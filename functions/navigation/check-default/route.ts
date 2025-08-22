// 迁移自 app/api/navigation/check-default/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';
import { checkDefaultNavigation } from '@/services/navigationService';

export async function GET() {
  const isDefault = await checkDefaultNavigation();
  return NextResponse.json({ isDefault });
}