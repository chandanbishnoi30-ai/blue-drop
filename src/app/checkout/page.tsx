'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  const router = useRouter();
  const tax = cartTotal * 0.08;
  const total = cartTotal + tax;

  if (cartItems.length === 0) {
    // In a real app, you might want to redirect
    // For now, showing a message.
    if (typeof window !== 'undefined') {
      router.push('/cart');
    }
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty.</h1>
        <p className="text-muted-foreground">Redirecting to cart...</p>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:order-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64 pr-4">
                <div className="space-y-4">
                  {cartItems.map(({ product, quantity }) => {
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
                          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                            {quantity}
                          </span>
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        <p>
                          ${(product.price * quantity).toFixed(2)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:order-1">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
