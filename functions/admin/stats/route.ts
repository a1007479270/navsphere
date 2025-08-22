import { NextResponse } from 'next/server'
import { getEdgeOneContent } from '@/lib/edgeone' // 替换为EdgeOne兼容的数据获取方式
import { NavigationCategory } from '@/types/navigation'

export const runtime = 'edge'

export async function GET() {
  try {
    // 从EdgeOne兼容的存储获取数据
    const navigationData = await getEdgeOneContent('navsphere/content/navigation.json')
    const navigationItems = navigationData.navigationItems || []
    
    // 计算一级分类数量
    const parentCategories = navigationItems.length
    
    // 计算二级分类数量
    const subCategories = navigationItems.reduce((total: number, category: any) => {
      return total + (category.subCategories?.length || 0)
    }, 0)

    // 计算总分类数量
    const totalCategories = parentCategories + subCategories

    // 计算站点总数
    const totalSites = navigationItems.reduce((total: number, category: any) => {
      const parentSites = category.items?.length || 0
      const subCategoriesSites = Array.isArray(category.subCategories) 
        ? category.subCategories.reduce((sum: number, subCategory: NavigationCategory) => {
            return sum + (subCategory.items?.length || 0)
          }, 0)
        : 0

      return total + parentSites + subCategoriesSites
    }, 0)

    const result = {
      parentCategories,
      subCategories,
      totalCategories,
      totalSites
    }
    
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
