export interface OnboardingItem {
  title: string;
  description: string;
  image: any;
}

export const onboardingData: OnboardingItem[] = [
  {
    title: 'Order from choosen chef',
    description:
      'Get all your loved foods in one once place, you just place the order we do the rest',
    image: require('../../resources/images/chef1.png'),
  },
  {
    title: 'Fast Delivery',
    description: 'Quick and safe delivery for all your favorite foods',
    image: require('../../resources/images/chef2.png'),
  },
  {
    title: 'Fresh Ingredients',
    description: 'We ensure fresh and high-quality ingredients in every meal',
    image: require('../../resources/images/chef3.png'),
  },
  {
    title: 'Easy Payment',
    description: 'Multiple payment options for your convenience',
    image: require('../../resources/images/chef4.png'),
  },
];
