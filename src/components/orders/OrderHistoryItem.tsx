import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import type { Order } from '@/lib/types';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '../ui/separator';

interface OrderHistoryItemProps {
  order: Order;
}

export default function OrderHistoryItem({ order }: OrderHistoryItemProps) {
  const getStatusVariant = (status: Order['status']) => {
    switch (status) {
      case 'Delivered':
        return 'default';
      case 'Shipped':
        return 'secondary';
      case 'Processing':
        return 'outline';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <AccordionItem value={order.id} className="border rounded-lg bg-card">
      <AccordionTrigger className="px-6 py-4 hover:no-underline">
        <div className="flex-grow flex items-center justify-between">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-left">
            <span className="font-bold text-lg">{order.id}</span>
            <span className="text-sm text-muted-foreground">
              Date: {new Date(order.date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
            <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
            <span className="font-semibold text-lg">${order.total.toFixed(2)}</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4">
        <Separator className="mb-4" />
        <h3 className="font-semibold mb-2">Items</h3>
        <div className="space-y-4">
          {order.items.map(({ product, quantity }) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === product.imageId
            );
            return (
              <div key={product.id} className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-md overflow-hidden">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <div className="flex-grow">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Qty: {quantity}
                  </p>
                </div>
                <p>
                  ${(product.price * quantity).toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
