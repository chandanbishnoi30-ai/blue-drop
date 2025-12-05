'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Recommendations from '@/components/cart/Recommendations';

export default function CartPage() {
  const {
    cartItems,
    cartTotal,
    cartCount,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const productIds = cartItems.map((item) => item.product.id);
  const tax = cartTotal * 0.08;
  const total = cartTotal + tax;

  if (cartCount === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(({ product, quantity }) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === product.imageId
            );
            return (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-4 flex gap-4">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden">
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
                  <div className="flex-grow flex flex-col">
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="font-semibold ml-auto">
                    ${(product.price * quantity).toFixed(2)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="lg:sticky lg:top-24">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
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
            <Button asChild className="w-full mt-6">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      {productIds.length > 0 && <Recommendations cartProductIds={productIds} />}
    </div>
  );
}
