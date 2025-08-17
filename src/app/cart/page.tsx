"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Order Placed!",
      description: "Your order will be delivered soon. Payment will be collected upon delivery.",
    });
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="font-headline text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any bags to your cart yet.</p>
        <Button asChild size="lg">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="font-headline text-4xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <ul className="divide-y">
                {cartItems.map(item => (
                  <li key={item.product.id} className="flex items-center gap-4 p-4">
                    <div className="aspect-square w-24 h-24 rounded-md overflow-hidden border bg-secondary">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-grow grid gap-1">
                      <Link href={`/product/${item.product.id}`} className="font-headline font-semibold hover:underline">{item.product.name}</Link>
                      <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-4 text-center">{item.quantity}</span>
                         <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end justify-between self-stretch">
                       <p className="font-bold text-lg">${(item.product.price * item.quantity).toFixed(2)}</p>
                       <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.product.id)}>
                         <Trash2 className="h-5 w-5"/>
                         <span className="sr-only">Remove item</span>
                       </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1 sticky top-24">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button size="lg" className="w-full" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
              <p className="text-sm text-muted-foreground text-center">Cash on Delivery available</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
