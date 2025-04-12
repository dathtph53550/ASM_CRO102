export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  is_favourite?: boolean;
  unit: string;
  category_id: number;
  hot?: boolean;
  is_hot?: boolean; // Added to match the database property
  viewed_at?: string;
  created_at?: string;
}

export interface Banner {
  id_banner: number;
  image: string;
}

export type ViewedProduct = Product & {
  viewed_at: string;
};

export interface Comment {
  id: number;
  comment: string; // Changed from content to match db.json
  product_id: string; // Changed from productId to match db.json
  user_id: string;
  created_at: string;
  rating: number; // Rating field for star display
  user?: {
    full_name: string;
  };
} 

export interface CartItem {
  id: string;
  order_id: string;
  product_id: string;
  price: number;
  quantity: number;
}

export interface CartItemWithDetails extends CartItem {
  name: string;
  image: string;
  description?: string;
  productId?: string; // For compatibility with both naming conventions
}

export interface Order {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}