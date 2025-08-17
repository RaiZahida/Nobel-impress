"use client";

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getProductById, Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const checkoutSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  district: z.string().min(2, { message: 'District is required.' }),
  city: z.string().min(2, { message: 'City is required.' }),
  address: z.string().min(10, { message: 'Please enter a complete address.' }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [product] = useState<Product | undefined>(getProductById(id));
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const { toast } = useToast();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: '',
      phone: '',
      district: '',
      city: '',
      address: '',
    },
  });

  if (!product) {
    notFound();
  }

  const deliveryCharges = 200;
  const total = product.price + deliveryCharges;

  const onSubmit = (data: CheckoutFormValues) => {
    console.log('Order Details:', data);
    // Here you would typically send the data to your backend/database
    toast({
      title: 'Order Placed!',
      description: 'Your order has been received. We will contact you for confirmation.',
    });
    setIsOrderPlaced(true);
  };
  
  if (isOrderPlaced) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <Card className="p-8">
           <CardHeader>
              <CardTitle className="text-3xl font-headline">Thank You For Your Order!</CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-muted-foreground">Your order for the <strong>{product.name}</strong> has been placed successfully.</p>
             <p className="text-muted-foreground mt-2">You will receive a confirmation call shortly.</p>
           </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="font-headline text-4xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="lg:col-span-1">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Shipping Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="03001234567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>District</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Lahore" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Lahore" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complete Address</FormLabel>
                        <FormControl>
                          <Input placeholder="House #123, Street 4, ABC Town" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full">
                    Confirm Order
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1 sticky top-24">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
               <div className="flex items-center gap-4">
                 <div className="aspect-square w-20 h-20 rounded-md overflow-hidden border bg-secondary">
                   <Image
                     src={product.image}
                     alt={product.name}
                     width={80}
                     height={80}
                     className="object-cover w-full h-full"
                   />
                 </div>
                 <div className="flex-grow">
                   <p className="font-semibold">{product.name}</p>
                   <p className="text-sm text-muted-foreground">Quantity: 1</p>
                 </div>
                 <p className="font-semibold">${product.price.toFixed(2)}</p>
               </div>
              <Separator />
              <div className="flex justify-between">
                <span>Product Price</span>
                <span className="font-semibold">${product.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="font-semibold">${deliveryCharges.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
             <CardFooter>
                <p className="text-sm text-muted-foreground text-center w-full">Payment will be collected upon delivery (Cash on Delivery).</p>
             </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
