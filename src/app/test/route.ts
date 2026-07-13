import { getRequestContext } from '@cloudflare/next-on-pages';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    const ctx = getRequestContext();
    const env = ctx?.env as any;
    
    return NextResponse.json({
      status: "success",
      hasCtx: !!ctx,
      hasEnv: !!env,
      envKeys: env ? Object.keys(env) : [],
      hasDB: !!(env && env.DB)
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error?.message || String(error),
      stack: error?.stack
    }, { status: 500 });
  }
}
