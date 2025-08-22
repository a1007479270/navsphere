// 迁移自 app/api/navigation/[id]/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';
import { getNavigationById } from '@/services/navigationService';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const navigation = await getNavigationById(params.id);
  return NextResponse.json(navigation);
}