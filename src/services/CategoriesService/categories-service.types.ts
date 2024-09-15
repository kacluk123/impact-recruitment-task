export interface CategoriesService {
  getAllCategories(): Promise<UIResponseCategories>
  getProductForCategory(category: string): Promise<UIResponseProdocuts>
}

export type ServerResponseCategories = string[]

export type UIResponseCategories = ApiError | {
  data: ServerResponseCategories
}

export interface ServerResponseProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type UIResponseProdocuts = ApiError | {
  data: ServerResponseProduct[]
}

export interface ApiError {
  error: string;
}
