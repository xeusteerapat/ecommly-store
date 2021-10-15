export type Product = {
  items: IProductItems[];
};

export type IProductItems = {
  productId: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  price: number;
};

export type IProductById = {
  items: IProductItems;
};
