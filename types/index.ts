// User Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Subscription Types
export type PlanType = 'free' | 'pro';

export interface Subscription {
  id: string;
  userId: string;
  plan: PlanType;
  stripeCustomerId: string;
  stripeSubscriptionId?: string;
  status: 'active' | 'canceled' | 'past_due';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  canceledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Chat Types
export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant';
  content: string;
  tokens?: {
    prompt: number;
    completion: number;
  };
  createdAt: Date;
}

export interface Conversation {
  id: string;
  userId: string;
  title: string;
  description?: string;
  model: 'openrouter' | 'gemini';
  messageCount: number;
  createdAt: Date;
  updatedAt: Date;
}

// AI Provider Types
export type AIProvider = 'openrouter' | 'gemini';

export interface AIRequest {
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
  model: string;
  temperature?: number;
  maxTokens?: number;
}

export interface AIResponse {
  content: string;
  model: string;
  provider: AIProvider;
  tokens?: {
    prompt: number;
    completion: number;
  };
}

// Tool Types
export interface BusinessTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
  requiresPremium: boolean;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData extends LoginFormData {
  fullName: string;
}