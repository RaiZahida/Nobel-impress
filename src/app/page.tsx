import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Find Your Perfect Bag</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of high-quality bags for every occasion. Style, function, and bliss, all in one place.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
