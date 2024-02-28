import images from './images';

const wines = [
  {
    title: 'Domaine de la Romanée-Conti',
    price: '$350',
    tags: 'FR | Bottle',
  },
  {
    title: 'Opus One',
    price: '$300',
    tags: 'US | Bottle',
  },
  {
    title: 'Bollinger La Grande Année Champagne',
    price: '$200',
    tags: 'FR | Bottle',
  },
  {
    title: 'Schneider Aventinus Eisbock',
    price: '$30',
    tags: 'DE | 330 ml',
  },
  {
    title: 'Duvel',
    price: '$20',
    tags: 'BE | 330 ml',
  },
];

const cocktails = [
  {
    title: 'Mango Tango',
    price: '$18',
    tags: 'Vodka | Mango Juice | Lime | Mint',
  },
  {
    title: 'Berry Bliss',
    price: '$15',
    tags: 'Gin | Mixed Berries | Elderflower Syrup | Prosecco',
  },
  {
    title: 'Tropical Sunset',
    price: '$12',
    tags: 'Rum | Pineapple Juice | Coconut Cream | Grenadine',
  },
  {
    title: 'Citrus Sparkler',
    price: '$22',
    tags: 'Tequila | Citrus Juice Blend | Agave Nectar | Soda',
  },
  {
    title: 'Cherry Bomb',
    price: '$24',
    tags: 'Bourbon | Cherry Liqueur | Sweet Vermouth | Bitters',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michelin Star',
    subtitle: 'Recognized for exceptional culinary excellence.',
  },
  {
    imgUrl: images.award01,
    title: 'Master of Flavors',
    subtitle: 'Celebrating creativity and innovation in cuisine.',
  },
  {
    imgUrl: images.award05,
    title: 'Golden Spoon Award',
    subtitle: 'Honoring outstanding contributions to gastronomy.',
  },
  {
    imgUrl: images.award03,
    title: 'Gourmet Icon',
    subtitle: 'Setting the standard for culinary perfection.',
  },
];

export default { wines, cocktails, awards };
