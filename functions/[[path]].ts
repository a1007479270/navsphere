import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  try {
    // 处理其他路由
    return NextResponse.next();
  } catch (e: any) {
    // 如果是 404，重定向到首页
    if (e.status === 404) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    throw e;
  }
}
