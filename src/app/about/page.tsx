import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Award, Target, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Noor Fatima',
    role: 'Founder & Lead Designer',
    avatar: '/images/girl 1.png',
    initials: 'NF',
    style: 'rounded-full object-cover w-32 h-32 mx-auto mb-4 border-4 border-secondary'
  },
  {
    name: 'Esha Fatima',
    role: 'Head of Operations',
    avatar: '/images/girl 2.png',
    initials: 'EF',
    style: 'rounded-full object-cover w-32 h-32 mx-auto mb-4 border-4 border-secondary'
  },
  {
    name: 'Zahida',
    role: 'Marketing Director',
    avatar: '/images/girl 3.png',
    initials: 'Z',
    style: 'rounded-full object-cover w-32 h-32 mx-auto mb-4 border-4 border-secondary'
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">About Nobel IMpress</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We believe that a bag is more than just an accessory—it's a statement, a companion, and an essential part of your journey.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Founded in 2021, Nobel IMpress started with a simple idea: to create beautiful, high-quality bags that don't compromise on functionality. Our founder, a passionate designer and avid traveler, grew tired of choosing between style and practicality. Why not have both?
              </p>
              <p>
                From a small workshop to a growing online brand, our commitment has remained the same. We meticulously source the best materials and work with skilled artisans to craft bags that are built to last and designed to be loved.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about.png"
              alt="Our story image"
              layout="fill"
              objectFit="cover"
              data-ai-hint="our story image"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-8 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-muted-foreground">We use only the finest materials and partner with skilled artisans to ensure every bag is a masterpiece of durability and design.</p>
            </Card>
            <Card className="p-8 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-2">Functional Design</h3>
              <p className="text-muted-foreground">Our bags are thoughtfully designed to fit seamlessly into your life, with practical features that make your day easier and more organized.</p>
            </Card>
            <Card className="p-8 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-2">Customer Happiness</h3>
              <p className="text-muted-foreground">You are at the heart of everything we do. We strive to provide an exceptional experience, from browsing to unboxing.</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Meet The Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Meet The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <Card key={member.name} className="text-center p-8 shadow-lg">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-secondary">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-headline">{member.name}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-primary font-semibold mt-1">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
