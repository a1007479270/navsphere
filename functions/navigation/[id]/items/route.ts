// 迁移自 app/api/navigation/[id]/items/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';
import { getNavigationItems } from '@/services/navigationService';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const items = await getNavigationItems(params.id);
  return NextResponse.json(items);
}