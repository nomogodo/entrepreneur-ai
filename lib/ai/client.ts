import axios from 'axios';
import { AIResponse, AIRequest } from '@/types';
import { retryWithBackoff } from '@/lib/utils';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

/**
 * Determines which model to use based on complexity
 */
export function selectModel(isComplex: boolean = false): string {
  if (isComplex) {
    return 'openrouter/openai/gpt-4-turbo-preview';
  }
  return 'openrouter/openai/gpt-3.5-turbo';
}

/**
 * Call OpenRouter API with retry logic and fallback
 */
export async function callOpenRouter(
  request: AIRequest,
  model: string
): Promise<AIResponse> {
  return retryWithBackoff(async () => {
    const response = await axios.post(
      `${OPENROUTER_BASE_URL}/chat/completions`,
      {
        model,
        messages: request.messages,
        temperature: request.temperature || 0.7,
        max_tokens: request.maxTokens || 2000,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL,
          'X-Title': 'Entrepreneur AI',
        },
        timeout: 30000,
      }
    );

    return {
      content: response.data.choices[0].message.content,
      model: response.data.model,
      provider: 'openrouter',
      tokens: {
        prompt: response.data.usage.prompt_tokens,
        completion: response.data.usage.completion_tokens,
      },
    };
  });
}

/**
 * Call Gemini API (fallback option)
 */
export async function callGemini(
  request: AIRequest
): Promise<AIResponse> {
  return retryWithBackoff(async () => {
    const contents = request.messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const response = await axios.post(
      `${GEMINI_BASE_URL}/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents,
        generationConfig: {
          temperature: request.temperature || 0.7,
          maxOutputTokens: request.maxTokens || 2000,
        },
      },
      { timeout: 30000 }
    );

    return {
      content: response.data.candidates[0].content.parts[0].text,
      model: 'gemini-pro',
      provider: 'gemini',
      tokens: {
        prompt: 0,
        completion: 0,
      },
    };
  });
}

/**
 * Main AI routing function - tries OpenRouter first, falls back to Gemini
 */
export async function callAI(
  request: AIRequest,
  model: string,
  tryFallback: boolean = true
): Promise<AIResponse> {
  try {
    return await callOpenRouter(request, model);
  } catch (error) {
    console.error('OpenRouter failed:', error);

    if (tryFallback) {
      console.log('Falling back to Gemini...');
      try {
        return await callGemini(request);
      } catch (fallbackError) {
        console.error('Gemini fallback failed:', fallbackError);
        throw new Error('All AI providers failed');
      }
    }

    throw error;
  }
}

/**
 * Calculate cost of API call
 */
export function calculateCost(
  provider: 'openrouter' | 'gemini',
  promptTokens: number,
  completionTokens: number
): number {
  if (provider === 'openrouter') {
    // Approximate pricing for GPT-3.5 (in USD)
    const promptCost = (promptTokens / 1000) * 0.0005;
    const completionCost = (completionTokens / 1000) * 0.0015;
    return promptCost + completionCost;
  }

  if (provider === 'gemini') {
    // Gemini Pro is free for now
    return 0;
  }

  return 0;
}
