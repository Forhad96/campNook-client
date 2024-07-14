export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  ratings?: number;
  images: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
  _id?: string;
}
export interface ICart {
  user: string;
  items: ICartItem[];
  createdAt?: Date;
  updatedAt?: Date;
}
