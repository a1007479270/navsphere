// 迁移自 app/api/resource/check-references/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';
import { checkResourceReferences } from '@/services/resourceService';

export async function POST(request: Request) {
  const { resourceId } = await request.json();
  const references = await checkResourceReferences(resourceId);
  return NextResponse.json(references);
}