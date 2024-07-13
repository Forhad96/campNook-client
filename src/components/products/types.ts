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
