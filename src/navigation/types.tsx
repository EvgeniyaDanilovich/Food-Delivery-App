export enum ScreenNames {
  Launch = 'Launch',
  Onboarding = 'Onboarding',
  Account = 'Account',
  Restaurants = 'Restaurants',
}

export type RootStackParamList = {
  [ScreenNames.Launch]: undefined;
  [ScreenNames.Onboarding]: undefined;
  [ScreenNames.Account]: undefined;
  [ScreenNames.Restaurants]: undefined;
};
