export const products = [
  {
    id: 1,
    name: 'Organic Henna Powder',
    price: 18,
    description: 'Premium organic henna powder for natural hair coloring and conditioning. Rich in nutrients that strengthen hair follicles and promote healthy growth.',
    benefits: [
      'Natural hair dye',
      'Promotes hair growth',
      'Adds shine and volume',
      'Chemical-free formula'
    ],
    ingredients: 'Pure Lawsonia inermis (Henna) leaves',
    usage: 'Mix with warm water to create a paste. Apply to clean, dry hair. Leave for 2-4 hours.',
    weight: '200g',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23c17b4a" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EHenna Powder%3C/text%3E%3C/svg%3E',
    category: 'hair-care',
    reviews: [
      { rating: 5, author: 'Sarah M.', comment: 'Amazing quality! My hair feels healthier than ever.' },
      { rating: 5, author: 'Lisa K.', comment: 'Best henna I\'ve used. Natural color and shine.' }
    ]
  },
  {
    id: 2,
    name: 'Shikakai Powder',
    price: 15,
    description: 'Ancient Ayurvedic hair cleanser known as "fruit for hair". Gently cleanses while nourishing your scalp and hair with natural saponins.',
    benefits: [
      'Natural hair cleanser',
      'Reduces dandruff',
      'Prevents split ends',
      'pH balanced for hair'
    ],
    ingredients: 'Pure Acacia concinna (Shikakai) pods',
    usage: 'Mix 2-3 tablespoons with water to form a paste. Massage into wet hair and scalp. Rinse thoroughly.',
    weight: '200g',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23a68860" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EShikakai Powder%3C/text%3E%3C/svg%3E',
    category: 'hair-care',
    reviews: [
      { rating: 5, author: 'Maya P.', comment: 'My hair is so soft and manageable now!' },
      { rating: 4, author: 'Anna W.', comment: 'Great natural shampoo alternative.' }
    ]
  },
  {
    id: 3,
    name: 'Moringa Powder',
    price: 22,
    description: 'Nutrient-dense moringa powder packed with vitamins, minerals, and antioxidants. Known as the "miracle tree" for its incredible health benefits.',
    benefits: [
      'Rich in antioxidants',
      'Boosts energy naturally',
      'Supports immune system',
      '90+ nutrients'
    ],
    ingredients: 'Pure Moringa oleifera leaves',
    usage: 'Add 1-2 teaspoons to smoothies, juices, or water daily. Can also be used in cooking.',
    weight: '250g',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23718355" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EMoringa Powder%3C/text%3E%3C/svg%3E',
    category: 'wellness',
    reviews: [
      { rating: 5, author: 'Jennifer L.', comment: 'I feel more energized throughout the day!' },
      { rating: 5, author: 'David R.', comment: 'Great quality moringa. Tastes fresh.' }
    ]
  },
  {
    id: 4,
    name: 'Turmeric Powder',
    price: 12,
    description: 'Premium golden turmeric powder with high curcumin content. A powerful anti-inflammatory and antioxidant superfood used in Ayurveda for centuries.',
    benefits: [
      'Anti-inflammatory properties',
      'Powerful antioxidant',
      'Supports joint health',
      'Boosts immunity'
    ],
    ingredients: 'Pure Curcuma longa (Turmeric) root',
    usage: 'Add 1/2 teaspoon to warm milk, smoothies, or cooking. Best absorbed with black pepper.',
    weight: '200g',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d4a017" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3ETurmeric Powder%3C/text%3E%3C/svg%3E',
    category: 'wellness',
    reviews: [
      { rating: 5, author: 'Michael T.', comment: 'Excellent quality turmeric. Very potent!' },
      { rating: 5, author: 'Rachel S.', comment: 'Helped with my joint pain. Highly recommend!' }
    ]
  }
];

export const subscription = {
  id: 'wellness-bundle',
  name: 'Wellness Bundle Subscription',
  price: 35,
  description: 'Get all four of our premium Ayurvedic powders delivered monthly. Save 30% compared to individual purchases!',
  includes: [
    'Organic Henna Powder (200g)',
    'Shikakai Powder (200g)',
    'Moringa Powder (250g)',
    'Turmeric Powder (200g)'
  ],
  benefits: [
    'Save $32 per month',
    'Free shipping',
    'Cancel anytime',
    'Exclusive wellness tips'
  ],
  image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%236B8E23" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3EWellness Bundle%3C/text%3E%3C/svg%3E'
};
