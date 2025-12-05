import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import Image from 'next/image';

export default function Home() {
  const waterBottles = products.filter((p) => p.id.startsWith('prod'));
  const accessories = products.filter((p) => p.id.startsWith('acc'));

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="relative text-center mb-16 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517739568984-3e0b5735f9d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Water drop"
            fill
            className="object-cover"
            data-ai-hint="water drop"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative py-20 px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">Hydration, Delivered.</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our premium water bottles and accessories, designed for
            your active lifestyle.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Water Bottles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {waterBottles.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Accessories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
