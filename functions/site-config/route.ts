// 迁移自 app/api/site-config/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';
import { siteConfigService } from '@/services/siteConfigService';

export async function GET() {
  const config = await siteConfigService.getConfig();
  return NextResponse.json(config);
}