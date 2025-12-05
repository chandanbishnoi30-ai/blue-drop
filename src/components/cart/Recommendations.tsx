'use client';

import { useState, useEffect } from 'react';
import { getProductRecommendations } from '@/ai/flows/product-recommendation';
import type { ProductRecommendationOutput } from '@/ai/flows/product-recommendation';
import { products } from '@/lib/data';
import ProductCard from '../ProductCard';
import { Skeleton } from '../ui/skeleton';

interface RecommendationsProps {
  cartProductIds: string[];
}

export default function Recommendations({ cartProductIds }: RecommendationsProps) {
  const [recommendations, setRecommendations] = useState<ProductRecommendationOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cartProductIds.length > 0) {
      setLoading(true);
      getProductRecommendations({ cartItems: cartProductIds })
        .then((res) => {
          setRecommendations(res);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [cartProductIds]);

  const recommendedProducts = recommendations?.recommendedProductIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

  if (loading) {
    return (
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You might also like...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!recommendedProducts || recommendedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-2">You might also like...</h2>
      {recommendations?.reason && (
        <p className="text-muted-foreground mb-6 max-w-2xl">{recommendations.reason}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recommendedProducts.map(product => (
          product && <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
