
import type { Product, Order } from './types';

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Starter Pack',
    description: 'One 24oz bottle. Perfect for getting started.',
    price: 19.99,
    imageId: 'p1',
  },
  {
    id: 'prod_005',
    name: 'Blue Drop Bottle',
    description: 'The official Blue Drop 24oz bottle, with our logo.',
    price: 22.99,
    imageId: 'p1',
  },
  {
    id: 'acc_001',
    name: 'Cleaning Brush Set',
    description: 'Keep your bottles sparkling clean with this custom brush set.',
    price: 9.99,
    imageId: 'a1',
  },
  {
    id: 'acc_002',
    name: 'Replacement Caps',
    description: 'A set of 3 colorful replacement caps. Fits all our bottles.',
    price: 7.99,
    imageId: 'a2',
  },
];

export const orders: Order[] = [
  {
    id: 'ORD-12345',
    date: '2024-05-20',
    total: 29.98,
    status: 'Delivered',
    items: [
      { product: products[0], quantity: 1 },
      { product: products[2], quantity: 1 },
    ],
  },
];
