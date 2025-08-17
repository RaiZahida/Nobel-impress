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
    name: 'The Classic Tote',
    price: 129.99,
    description: 'A timeless classic, this tote is perfect for everyday use. Made from genuine leather, it features a spacious interior and multiple pockets for organization.',
    image: 'https://placehold.co/800x800.png',
    category: 'Totes',
    dataAiHint: 'leather tote'
  },
  {
    id: '2',
    name: 'Urban Crossbody',
    price: 79.99,
    description: 'Sleek and modern, the Urban Crossbody is designed for the city-goer. Its compact size holds all your essentials without weighing you down.',
    image: 'https://placehold.co/800x800.png',
    category: 'Crossbody',
    dataAiHint: 'modern crossbody'
  },
  {
    id: '3',
    name: 'Adventure Backpack',
    price: 159.99,
    description: 'Ready for anything, this durable backpack is your ideal companion for travel and adventure. Features a padded laptop sleeve and water-resistant fabric.',
    image: 'https://placehold.co/800x800.png',
    category: 'Backpacks',
    dataAiHint: 'travel backpack'
  },
  {
    id: '4',
    name: 'Evening Clutch',
    price: 99.99,
    description: 'Add a touch of elegance to your evening wear with this stunning clutch. Features a delicate chain strap and a secure clasp closure.',
    image: 'https://placehold.co/800x800.png',
    category: 'Clutches',
    dataAiHint: 'elegant clutch'
  },
  {
    id: '5',
    name: 'Bohemian Hobo',
    price: 119.99,
    description: 'Casual and chic, the Bohemian Hobo bag has a relaxed silhouette and is made from soft, supple suede. Perfect for a laid-back, stylish look.',
    image: 'https://placehold.co/800x800.png',
    category: 'Hobo Bags',
    dataAiHint: 'suede hobo'
  },
  {
    id: '6',
    name: 'The Minimalist Satchel',
    price: 149.99,
    description: 'Clean lines and a structured shape define this minimalist satchel. A sophisticated choice for work or weekend outings.',
    image: 'https://placehold.co/800x800.png',
    category: 'Satchels',
    dataAiHint: 'minimalist satchel'
  },
    {
    id: '7',
    name: 'Weekender Duffle',
    price: 199.99,
    description: 'Spacious and stylish, our Weekender Duffle is perfect for short getaways. Crafted from durable canvas with leather accents.',
    image: 'https://placehold.co/800x800.png',
    category: 'Duffles',
    dataAiHint: 'canvas duffle'
  },
  {
    id: '8',
    name: 'Festival Fanny Pack',
    price: 49.99,
    description: 'Keep your hands free and your style on point with this trendy fanny pack. Ideal for concerts, festivals, or a day out.',
    image: 'https://placehold.co/800x800.png',
    category: 'Fanny Packs',
    dataAiHint: 'trendy fannypack'
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
