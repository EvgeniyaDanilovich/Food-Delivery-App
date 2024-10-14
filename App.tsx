import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchScreen from './src/screens/LaunchScreen';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import AccountScreen from './src/screens/auth/AccountScreen';
import RestaurantsScreen from './src/screens/main/RestaurantsScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Screen name="Launch" component={LaunchScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Settings" component={RestaurantsScreen} />
    </NavigationContainer>
  );
}

export default App;
