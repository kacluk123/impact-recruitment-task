export interface CategoriesService {
  getAllCategories(): Promise<ServerResponseCategories>
  getProductForCategory(category: string): Promise<ServerResponseCategories>

}

export type ServerResponseCategories = string[]

export interface ServerResponseProducts {
  id: 5;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
