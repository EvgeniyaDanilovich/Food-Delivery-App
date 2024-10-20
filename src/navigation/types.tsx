export enum ScreenNames {
  Login = 'Login',
  Register = 'Register',
  Launch = 'Launch',
  Onboarding = 'Onboarding',
  Account = 'Account',
  Restaurants = 'Restaurants',
}

export type RootStackParamList = {
  [ScreenNames.Login]: undefined;
  [ScreenNames.Register]: undefined;
  [ScreenNames.Launch]: undefined;
  [ScreenNames.Onboarding]: undefined;
  [ScreenNames.Account]: undefined;
  [ScreenNames.Restaurants]: undefined;
};
