import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * Rate limiting middleware
 */
const rateLimitMap = new Map<string, { count: number; reset: number }>();

export async function checkRateLimit(
  userId: string,
  limit: number = 30
): Promise<boolean> {
  const now = Date.now();
  const key = userId;

  const current = rateLimitMap.get(key);

  if (!current || now > current.reset) {
    rateLimitMap.set(key, { count: 1, reset: now + 60000 });
    return true;
  }

  if (current.count >= limit) {
    return false;
  }

  current.count++;
  return true;
}

/**
 * Verify JWT token from request
 */
export async function verifyAuth(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Auth verification failed:', error);
    return null;
  }
}

/**
 * Protected API route handler
 */
export async function withAuth(
  handler: (req: NextRequest, userId: string) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    const user = await verifyAuth(req);

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check rate limit
    const allowed = checkRateLimit(user.id);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }

    return handler(req, user.id);
  };
}
