import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export default function Home() {
  const waterBottles = products.filter((p) => p.id.startsWith('prod'));
  const accessories = products.filter((p) => p.id.startsWith('acc'));

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Hydration, Delivered.</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our premium water bottles and accessories, designed for your active lifestyle.
        </p>
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
