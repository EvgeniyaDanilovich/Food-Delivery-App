import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LaunchScreen} from '../screens/LaunchScreen';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {AccountScreen} from '../screens/auth/AccountScreen';
import {RestaurantsScreen} from '../screens/main/restaurants/RestaurantsScreen';
import {RootStackParamList, screenNames} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenNames.launch} component={LaunchScreen} />
        <Stack.Screen
          name={screenNames.onboarding}
          component={OnboardingScreen}
        />
        <Stack.Screen name={screenNames.account} component={AccountScreen} />
        <Stack.Screen
          name={screenNames.restaurants}
          component={RestaurantsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
