import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Stay Hydrated, Stay Fresh
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-200">
            Discover our premium water bottle packages, designed for your active
            lifestyle.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="#products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section id="products" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
