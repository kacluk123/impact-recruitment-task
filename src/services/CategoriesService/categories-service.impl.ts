import { CategoriesService, ServerResponseCategories, ServerResponseProducts } from './categories-service.types'

class CategoriesServiceImpl implements CategoriesService {
  async getAllCategories(): Promise<ServerResponseCategories> {
    const response = await fetch(`${process.env.API_URL}/products/categories`);
    const json: ServerResponseCategories = await response.json();
    return json
  }
  async getProductForCategory(category: string): Promise<ServerResponseProducts> {
    const response = await fetch(`${process.env.API_URL}/products/category/${category}`);
    const json: ServerResponseProducts = await response.json();
    return json
  }
}

export const categorieService = new CategoriesServiceImpl()