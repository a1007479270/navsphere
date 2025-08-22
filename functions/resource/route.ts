// 迁移自 app/api/resource/route.ts
// 确保所有路径和依赖项适配 EdgeOne Pages 环境

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const owner = searchParams.get('owner');
    const repo = searchParams.get('repo');
    const githubPath = searchParams.get('path');
    const branch = searchParams.get('branch') || 'main';

    const currentFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${githubPath}?ref=${branch}`;
    const response = await fetch(currentFileUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in resource API:', error);
    return NextResponse.json({ error: 'Failed to fetch resource' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const owner = searchParams.get('owner');
    const repo = searchParams.get('repo');
    const githubPath = searchParams.get('path');
    const branch = searchParams.get('branch') || 'main';

    // 如果需要删除实际文件，需要额外的GitHub API调用
    return NextResponse.json({ message: 'Resource deletion initiated' });
  } catch (error) {
    console.error('Error in resource API:', error);
    return NextResponse.json({ error: 'Failed to delete resource' }, { status: 500 });
  }
}