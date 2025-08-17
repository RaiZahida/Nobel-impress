import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12 md:px-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-lg font-bold">Bag Bliss</h3>
          <p className="text-muted-foreground max-w-xs">Your one-stop shop for stylish, high-quality bags for every occasion.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-headline text-md font-semibold">Quick Links</h4>
          <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
          <Link href="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-headline text-md font-semibold">Legal</h4>
          <Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
        </div>
      </div>
      <div className="bg-secondary/80 py-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bag Bliss. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
