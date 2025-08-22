// 迁移自 app/api/navigation/restore/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';
import { restoreNavigation } from '@/services/navigationService';

export async function POST(request: Request) {
  const { id } = await request.json();
  await restoreNavigation(id);
  return NextResponse.json({ success: true });
}