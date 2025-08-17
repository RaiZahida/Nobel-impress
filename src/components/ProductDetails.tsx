"use client";

import React, { useState } from 'react';
import type { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Check, ShoppingCart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} is now in your shopping cart.`,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-sm font-medium text-primary uppercase tracking-wider">{product.category}</span>
        <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">{product.name}</h1>
      </div>
      <p className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</p>
      <div className="text-muted-foreground leading-relaxed">
        <p>{product.description}</p>
      </div>
      <div className="flex items-center gap-4 pt-4">
        <Button onClick={handleAddToCart} size="lg" className="min-w-[180px]" disabled={added}>
          {added ? (
            <>
              <Check className="mr-2 h-5 w-5" /> Added!
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </>
          )}
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={`/checkout/${product.id}`}>
            Order Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
