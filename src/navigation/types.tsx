export enum SCREEN_NAMES {
  LAUNCH = 'Launch',
  ONBOARDING = 'Onboarding',
  ACCOUNT = 'Account',
  RESTAURANTS = 'Restaurants',
}

export type RootStackParamList = {
  [SCREEN_NAMES.LAUNCH]: undefined;
  [SCREEN_NAMES.ONBOARDING]: undefined;
  [SCREEN_NAMES.ACCOUNT]: undefined;
  [SCREEN_NAMES.RESTAURANTS]: undefined;
};
