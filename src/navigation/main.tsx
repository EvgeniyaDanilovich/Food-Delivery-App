import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LaunchScreen} from '../screens/LaunchScreen';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {AccountScreen} from '../screens/auth/AccountScreen';
import {RestaurantsScreen} from '../screens/main/restaurants/RestaurantsScreen';
import {RootStackParamList, SCREEN_NAMES} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREEN_NAMES.LAUNCH} component={LaunchScreen} />
        <Stack.Screen
          name={SCREEN_NAMES.ONBOARDING}
          component={OnboardingScreen}
        />
        <Stack.Screen name={SCREEN_NAMES.ACCOUNT} component={AccountScreen} />
        <Stack.Screen
          name={SCREEN_NAMES.RESTAURANTS}
          component={RestaurantsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
