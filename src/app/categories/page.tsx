import { products } from '@/lib/products';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function CategoriesPage() {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="font-headline text-4xl font-bold text-center mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map(category => (
          <Link key={category} href={`/categories/${encodeURIComponent(category)}`} className="block group">
            <Card className="aspect-video bg-secondary flex items-center justify-center p-4 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:-translate-y-1">
              <h2 className="font-headline text-xl md:text-2xl font-semibold text-center">{category}</h2>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
