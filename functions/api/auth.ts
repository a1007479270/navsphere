import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  // 设置环境变量
  process.env.GITHUB_ID = process.env.GITHUB_ID;
  process.env.GITHUB_SECRET = process.env.GITHUB_SECRET;
  process.env.GITHUB_OWNER = process.env.GITHUB_OWNER;
  process.env.GITHUB_REPO = process.env.GITHUB_REPO;
  process.env.GITHUB_BRANCH = process.env.GITHUB_BRANCH;
  process.env.NEXTAUTH_URL = process.env.NEXTAUTH_URL;
  process.env.NEXTAUTH_SECRET = process.env.GITHUB_SECRET;

  // 处理 /api/auth 路由
  return NextResponse.next();
}
