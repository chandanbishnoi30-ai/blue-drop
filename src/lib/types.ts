export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageId: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  date: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: {
    product: Product;
    quantity: number;
  }[];
};
