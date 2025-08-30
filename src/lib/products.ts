
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  dataAiHint: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: '4-in-1-begset',
    price: 3150.00,
    description: 'A timeless classic, this tote is perfect for everyday use. Made from genuine leather, it features a spacious interior and multiple pockets for organization.',
    image: '/images/product1.jpeg',
    category: 'Totes',
    dataAiHint: 'leather tote'
  },
  {
    id: '2',
    name: '4-in-1-begset',
    price:2999,
    description: 'Sleek and modern, the Urban Crossbody is designed for the city-goer. Its compact size holds all your essentials without weighing you down.',
    image: '/images/product2.jpeg',
    category: 'Crossbody',
    dataAiHint: 'modern crossbody'
  },
  {
    id: '3',
    name: '4-in-1-begset ',
    price: 2999,
    description: 'Ready for anything, this durable backpack is your ideal companion for travel and adventure. Features a padded laptop sleeve and water-resistant fabric.',
    image: '/images/product3.jpeg',
    category: 'Backpacks',
    dataAiHint: 'travel backpack'
  },
  {
    id: '4',
    name: '4-in-1-begset',
    price:2999,
    description: 'Add a touch of elegance to your evening wear with this stunning clutch. Features a delicate chain strap and a secure clasp closure.',
    image: '/images/product4.jpeg',
    category: 'Clutches',
    dataAiHint: 'elegant clutch'
  },
  {
    id: '5',
    name: 'Bohemian Hobo',
    price: 119.99,
    description: 'Casual and chic, the Bohemian Hobo bag has a relaxed silhouette and is made from soft, supple suede. Perfect for a laid-back, stylish look.',
    image: '/images/product5.jpeg',
    category: 'Hobo Bags',
    dataAiHint: 'suede hobo'
  },
  {
    id: '6',
    name: 'The Minimalist Satchel',
    price: 149.99,
    description: 'Clean lines and a structured shape define this minimalist satchel. A sophisticated choice for work or weekend outings.',
    image: '/images/product6.jpeg',
    category: 'Satchels',
    dataAiHint: 'minimalist satchel'
  },
    {
    id: '7',
    name: 'Weekender Duffle',
    price: 199.99,
    description: 'Spacious and stylish, our Weekender Duffle is perfect for short getaways. Crafted from durable canvas with leather accents.',
    image: '/images/product7.jpeg',
    category: 'Duffles',
    dataAiHint: 'canvas duffle'
  },
  {
    id: '8',
    name: 'Festival Fanny Pack',
    price: 49.99,
    description: 'Keep your hands free and your style on point with this trendy fanny pack. Ideal for concerts, festivals, or a day out.',
    image: '/images/product8.jpeg',
    category: 'Fanny Packs',
    dataAiHint: 'trendy fannypack'
  },
  {
    id: '9',
    name: 'Canvas Market Tote',
    price: 89.99,
    description: 'Eco-friendly and spacious, this canvas tote is perfect for your farmers market trips or a day at the beach. Sturdy and washable.',
    image: '/images/product8.jpeg',
    category: 'Totes',
    dataAiHint: 'canvas tote'
  },
  {
    id: '10',
    name: 'Leather Laptop Tote',
    price: 189.99,
    description: 'A sophisticated tote with a padded compartment for your laptop. Perfect for the professional on the go, combining style and function.',
    image: 'https://placehold.co/800x800.png',
    category: 'Totes',
    dataAiHint: 'professional tote'
  },
  {
    id: '11',
    name: 'Quilted Camera Crossbody',
    price: 95.00,
    description: 'A chic, quilted crossbody bag perfect for carrying your camera and other small essentials. Features an adjustable strap for comfort.',
    image: 'https://placehold.co/800x800.png',
    category: 'Crossbody',
    dataAiHint: 'quilted crossbody'
  },
  {
    id: '12',
    name: 'Sporty Nylon Crossbody',
    price: 65.00,
    description: 'Lightweight and durable, this nylon crossbody is perfect for active days. Multiple zip pockets keep you organized on the move.',
    image: 'https://placehold.co/800x800.png',
    category: 'Crossbody',
    dataAiHint: 'nylon bag'
  },
  {
    id: '13',
    name: 'Tech Commuter Backpack',
    price: 175.00,
    description: 'A sleek backpack designed for the modern commuter. Features multiple compartments for all your tech gadgets and a USB charging port.',
    image: 'https://placehold.co/800x800.png',
    category: 'Backpacks',
    dataAiHint: 'tech backpack'
  },
  {
    id: '14',
    name: 'Hiking Daypack',
    price: 135.00,
    description: 'A rugged and comfortable daypack for your next hiking adventure. Features hydration pack compatibility and ergonomic shoulder straps.',
    image: 'https://placehold.co/800x800.png',
    category: 'Backpacks',
    dataAiHint: 'hiking backpack'
  },
  {
    id: '15',
    name: 'Sequin Party Clutch',
    price: 75.00,
    description: 'Dazzle at your next party with this eye-catching sequin clutch. The perfect accessory to make your outfit pop.',
    image: 'https://placehold.co/800x800.png',
    category: 'Clutches',
    dataAiHint: 'sequin clutch'
  },
  {
    id: '16',
    name: 'Woven Slouchy Hobo',
    price: 130.00,
    description: 'A beautifully woven hobo bag with a slouchy, relaxed fit. Adds a touch of artisanal charm to any outfit.',
    image: 'https://placehold.co/800x800.png',
    category: 'Hobo Bags',
    dataAiHint: 'woven bag'
  },
  {
    id: '17',
    name: 'Vintage-Inspired Satchel',
    price: 165.00,
    description: 'A charming satchel with a vintage feel. Features buckle details and a classic top handle, plus a detachable shoulder strap.',
    image: 'https://placehold.co/800x800.png',
    category: 'Satchels',
    dataAiHint: 'vintage satchel'
  },
  {
    id: '18',
    name: 'Convertible Crossbody Tote',
    price: 145.00,
    description: 'The ultimate versatile bag. Wear it as a tote or fold it over to use as a crossbody for a more compact look.',
    image: 'https://placehold.co/800x800.png',
    category: 'Totes',
    dataAiHint: 'convertible tote'
  },
  {
    id: '19',
    name: 'Campus Bookbag',
    price: 99.00,
    description: 'A classic bookbag perfect for students. Durable, spacious, and with plenty of pockets for books, a laptop, and supplies.',
    image: 'https://placehold.co/800x800.png',
    category: 'Backpacks',
    dataAiHint: 'student bookbag'
  },
  {
    id: '20',
    name: 'Everyday Phone Crossbody',
    price: 55.00,
    description: 'Just the essentials. This mini crossbody is perfectly sized for your phone, cards, and keys for when you want to travel light.',
    image: 'https://placehold.co/800x800.png',
    category: 'Crossbody',
    dataAiHint: 'phone crossbody'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsByNames = (names: string[]): Product[] => {
    return products.filter(p => names.includes(p.name));
}
