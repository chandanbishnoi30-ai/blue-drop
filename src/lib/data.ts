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
    id: 'prod_002',
    name: 'Family Pack',
    description: 'Four 24oz bottles. Hydration for the whole family.',
    price: 69.99,
    imageId: 'p2',
  },
  {
    id: 'prod_003',
    name: 'Adventure Bottle',
    description: 'A rugged 32oz bottle for your outdoor adventures.',
    price: 29.99,
    imageId: 'p3',
  },
  {
    id: 'prod_004',
    name: 'Infuser Bottle',
    description: 'A 28oz glass bottle with a built-in fruit infuser.',
    price: 24.99,
    imageId: 'p4',
  },
  {
    id: 'prod_005',
    name: 'Blue Drop Bottle',
    description: 'The official Blue Drop 24oz bottle, with our logo.',
    price: 22.99,
    imageId: 'p5',
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
      { product: products[4], quantity: 1 },
    ],
  },
  {
    id: 'ORD-12346',
    date: '2024-06-15',
    total: 69.99,
    status: 'Shipped',
    items: [{ product: products[1], quantity: 1 }],
  },
  {
    id: 'ORD-12347',
    date: '2024-07-01',
    total: 29.99,
    status: 'Processing',
    items: [{ product: products[2], quantity: 1 }],
  },
];
