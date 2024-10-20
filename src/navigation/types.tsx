export enum screenNames {
  launch = 'Launch',
  settings = 'Settings',
  onboarding = 'Onboarding',
  account = 'Account',
  restaurants = 'Restaurants',
}

export type RootStackParamList = {
  [screenNames.launch]: undefined;
  [screenNames.settings]: undefined;
  [screenNames.onboarding]: undefined;
  [screenNames.account]: undefined;
  [screenNames.restaurants]: undefined;
};
