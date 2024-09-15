import { CategoriesService, ServerResponseCategories, ServerResponseProduct, UIResponseCategories, UIResponseProdocuts } from './categories-service.types'

class CategoriesServiceImpl implements CategoriesService {
  async getAllCategories(): Promise<UIResponseCategories> {
    const response = await fetch(`${process.env.API_URL}/products/categories`);
    if (response.ok) {
      const json: ServerResponseCategories = await response.json();
      return {
        data: json,
      }
    } else {
      return {
        error: 'Failed to get categories'
      }
    }
  }
  async getProductForCategory(category: string): Promise<UIResponseProdocuts> {
    const response = await fetch(`${process.env.API_URL}/products/category/${category}`);
    if (response.ok) {
      const json: ServerResponseProduct[] = await response.json();
      return { data: json }
    } else {
      return {
        error: `Failed to get products for ${category}`
      }
    }
  }
}

export const categoriesService = new CategoriesServiceImpl()