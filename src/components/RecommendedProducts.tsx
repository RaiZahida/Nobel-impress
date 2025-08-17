import { getPersonalizedBagRecommendations } from '@/ai/flows/personalized-recommendations';
import { getProductsByNames, Product } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { Skeleton } from './ui/skeleton';

type RecommendedProductsProps = {
  currentProduct: Product;
};

export async function RecommendedProducts({ currentProduct }: RecommendedProductsProps) {
  // In a real app, viewing history would be stored per-user.
  // For this demo, we'll just use the current product's name.
  const viewingHistory = currentProduct.name;

  try {
    const recommendationResult = await getPersonalizedBagRecommendations({
      viewingHistory,
      numberOfRecommendations: 3,
    });
    
    const recommendedProductNames = recommendationResult.recommendations;
    const recommendedProducts = getProductsByNames(recommendedProductNames)
        // Filter out the current product from recommendations
        .filter(p => p.id !== currentProduct.id);

    if (recommendedProducts.length === 0) {
      return null;
    }
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    // Render nothing or an error message on failure
    return (
      <div className="text-center text-destructive">
        Could not load recommendations at this time.
      </div>
    );
  }
}

RecommendedProducts.Skeleton = function RecommendedProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[300px] w-full rounded-xl" />
          <div className="space-y-2 p-4">
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/5" />
          </div>
        </div>
      ))}
    </div>
  );
};
