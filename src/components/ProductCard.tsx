import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          {image ? (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary">
              <span className="text-muted-foreground">No Image</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="mt-2 text-sm">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-lg font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
