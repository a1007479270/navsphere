// 迁移自 app/api/home/site/route.ts
// 确保所有路径和依赖项适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const response = await fetch('/api/site');
    if (!response.ok) {
      throw new Error(`Site API error: ${response.statusText}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in site API:', error);
    return NextResponse.json({ error: 'Failed to fetch site data' }, { status: 500 });
  }
}