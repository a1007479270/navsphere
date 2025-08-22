// 迁移自 app/api/navigation/reorder/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';
import { reorderNavigation } from '@/services/navigationService';

export async function POST(request: Request) {
  const { ids } = await request.json();
  await reorderNavigation(ids);
  return NextResponse.json({ success: true });
}