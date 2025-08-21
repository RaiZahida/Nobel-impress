import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Jessica M.',
    avatar: 'https://placehold.co/100x100.png',
    text: 'I absolutely love my new tote from Nobel IMpress! The quality is outstanding, and it\'s the perfect size for my daily essentials. I get compliments everywhere I go!',
    initials: 'JM',
  },
  {
    name: 'Sarah L.',
    avatar: 'https://placehold.co/100x100.png',
    text: 'The Adventure Backpack is a game-changer for my weekend trips. It\'s stylish, durable, and surprisingly spacious. Highly recommend!',
    initials: 'SL',
  },
  {
    name: 'Emily R.',
    avatar: 'https://placehold.co/100x100.png',
    text: 'I ordered the Evening Clutch for a wedding, and it was perfect. Elegant, well-made, and just the right size for my phone and lipstick. The shipping was fast too!',
    initials: 'ER',
  }
]

export default function Home() {
  const newArrivals = products.slice(0, 4);
  const featuredProducts = products.slice(4, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Style, Meet Function.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Discover our curated collection of high-quality bags for every occasion. Find the perfect blend of fashion and practicality to elevate your everyday.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/categories">Shop All Bags <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#new-arrivals">New Arrivals</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Stylish woman carrying a handbag"
              width={600}
              height={400}
              priority
              className="rounded-lg shadow-2xl object-cover w-full h-full"
              data-ai-hint="woman handbag"
            />
          </div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section id="new-arrivals" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
           <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
             <Image
                src="https://placehold.co/600x450.png"
                alt="Nobel IMpress workshop"
                layout="fill"
                objectFit="cover"
                data-ai-hint="leather workshop"
              />
           </div>
           <div>
             <h2 className="font-headline text-3xl md:text-4xl font-bold">Crafted with Passion</h2>
             <p className="mt-4 text-lg text-muted-foreground">
              At Nobel IMpress, we believe a bag is more than just an accessory—it's a companion. We're dedicated to designing and curating beautiful, functional, and durable bags that you'll love for years to come.
             </p>
             <Button asChild size="lg" className="mt-6">
                <Link href="/about">Learn More About Us</Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Featured Products Section */}
       <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
         <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

       {/* Testimonials Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between p-6 bg-secondary/30 border-0 shadow-lg">
                <CardContent className="p-0 pb-6">
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
                <CardHeader className="p-0 flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person" />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
