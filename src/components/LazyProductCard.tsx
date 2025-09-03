import dynamic from 'next/dynamic';
import { Product } from '@/lib/products';

// Lazy load the ProductCard component
const ProductCard = dynamic(() => import('./ProductCard').then(mod => ({ default: mod.ProductCard })), {
  loading: () => (
    <div className="bg-secondary animate-pulse rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-square bg-secondary"></div>
      <div className="p-4 border-t">
        <div className="h-4 bg-secondary rounded mb-2"></div>
        <div className="h-3 bg-secondary rounded mb-1"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-5 bg-secondary rounded w-16"></div>
          <div className="h-8 w-8 bg-secondary rounded"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false, // Disable SSR for this component to improve initial load
});

type LazyProductCardProps = {
  product: Product;
};

export function LazyProductCard({ product }: LazyProductCardProps) {
  return <ProductCard product={product} />;
}