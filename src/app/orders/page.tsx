import {
  Accordion,
} from '@/components/ui/accordion';
import { orders } from '@/lib/data';
import OrderHistoryItem from '@/components/orders/OrderHistoryItem';
import { Package } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OrdersPage() {

  if (!orders || orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <Package className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold">No orders yet</h1>
        <p className="mt-2 text-muted-foreground">
          You haven't placed any orders with us.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {orders.map((order) => (
          <OrderHistoryItem key={order.id} order={order} />
        ))}
      </Accordion>
    </div>
  );
}
