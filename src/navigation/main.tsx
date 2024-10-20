import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchScreen from '../screens/LaunchScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import AccountScreen from '../screens/auth/AccountScreen';
import RestaurantsScreen from '../screens/main/restaurants/RestaurantsScreen';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';
import {RootStackParamList, ScreenNames} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Login}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ScreenNames.Register}
          component={RegisterScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: '#FFFFFF',
            title: '',
          }}
        />
        <Stack.Screen name={ScreenNames.Launch} component={LaunchScreen} />
        <Stack.Screen
          name={ScreenNames.Onboarding}
          component={OnboardingScreen}
        />
        <Stack.Screen name={ScreenNames.Account} component={AccountScreen} />
        <Stack.Screen
          name={ScreenNames.Restaurants}
          component={RestaurantsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
