import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { memo } from 'react';

type ProductCardProps = {
  product: Product;
};

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/product/${product.id}`} className="block">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-secondary">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.dataAiHint}
            />
          </div>
          <div className="p-4 border-t">
            <h3 className="font-headline text-lg font-semibold truncate">{product.name}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{product.category}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="font-bold text-xl text-primary">Rs {product.price.toFixed(2)}</p>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
});

export { ProductCard };
