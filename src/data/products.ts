export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  priceOld?: string;
  priceNew: string;
  description: string;
  affiliateLink: string;
  specs?: ProductSpec[];
}

export interface RecommendationItem {
  category: string;
  type: 'best-seller' | 'best-price' | 'best-viewed' | 'best-offer';
  title: string;
  price: string | number;
  affiliateLink: string;
}

export const products: ProductItem[] = [
  {
    id: 'p1',
    name: 'Pro Compute Core Rig',
    category: 'Electronics',
    priceOld: '$1,499',
    priceNew: '$1,299',
    description: 'Benchmark: Optimized for local Dolphin3 and LLM execution.',
    affiliateLink: 'https://example.com/affiliate/p1',
    specs: [
      { label: 'CPU', value: '16-core Zen 5' },
      { label: 'RAM', value: '64GB DDR5' },
      { label: 'Storage', value: '2TB NVMe SSD' }
    ]
  },
  {
    id: 'p2',
    name: 'Ergonomic Workspace Command Desk',
    category: 'Home',
    priceNew: '$349',
    description: 'Setup: Perfect minimalist cable-managed layout.',
    affiliateLink: 'https://example.com/affiliate/p2',
    specs: [
      { label: 'Material', value: 'Solid oak composite' },
      { label: 'Adjustable', value: 'Standing desk mode' },
      { label: 'Extras', value: 'RGB ambient trim' }
    ]
  },
  {
    id: 'p3',
    name: 'Tactical Cyber-Shell Parka',
    category: 'Fashion',
    priceOld: '$180',
    priceNew: '$120',
    description: 'Style: Matte-black weatherized utility outer shell.',
    affiliateLink: 'https://example.com/affiliate/p3',
    specs: [
      { label: 'Shell', value: 'Waterproof ripstop' },
      { label: 'Lining', value: 'Thermal insulating mesh' },
      { label: 'Storage', value: '7 secure pockets' }
    ]
  },
  {
    id: 'p4',
    name: 'Smart Nootropic Focus Stacks',
    category: 'Health',
    priceNew: '$45',
    description: 'Routine: Morning execution matrix for deep focus work.',
    affiliateLink: 'https://example.com/affiliate/p4',
    specs: [
      { label: 'Form', value: 'Capsule bundle' },
      { label: 'Support', value: 'Cognitive clarity and calm' },
      { label: 'Cycle', value: '30-day regimen' }
    ]
  }
];

export const recommendations: RecommendationItem[] = [
  {
    category: 'Electronics',
    type: 'best-seller',
    title: 'Pro Compute Core Rig',
    price: '$1,299',
    affiliateLink: 'https://example.com/affiliate/p1'
  },
  {
    category: 'Fashion',
    type: 'best-offer',
    title: 'Tactical Cyber-Shell Parka',
    price: '$120',
    affiliateLink: 'https://example.com/affiliate/p3'
  },
  {
    category: 'Health',
    type: 'best-price',
    title: 'Smart Nootropic Focus Stacks',
    price: '$45',
    affiliateLink: 'https://example.com/affiliate/p4'
  }
];
