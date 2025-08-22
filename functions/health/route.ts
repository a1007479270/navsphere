// 迁移自 app/api/health/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok' });
}