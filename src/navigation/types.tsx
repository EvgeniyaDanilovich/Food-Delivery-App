export enum screenNames {
  launch = 'Launch',
  onboarding = 'Onboarding',
  account = 'Account',
  restaurants = 'Restaurants',
}

export type RootStackParamList = {
  [screenNames.launch]: undefined;
  [screenNames.onboarding]: undefined;
  [screenNames.account]: undefined;
  [screenNames.restaurants]: undefined;
};
