interface Review {
  reviewer: string;
  time: string;
  message: string;
}
export interface ProductType {
  _id: string;
  image: string;
  productName: string;
  category: string;
  status: string;
  price: number;
  description: string;
  keyFeatures: string[];
  individualRating: number;
  averageRating: number;
  reviews: Review[];
}
