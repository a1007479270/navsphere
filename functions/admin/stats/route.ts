// 迁移自 app/api/admin/stats/route.ts
// 确保适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';
import { getStats } from '@/services/adminService';

export async function GET() {
  const stats = await getStats();
  return NextResponse.json(stats);
}