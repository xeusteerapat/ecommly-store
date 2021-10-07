export interface Product {
  items: IProductItems[];
}

export interface IProductItems {
  productId: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  price: number;
}
