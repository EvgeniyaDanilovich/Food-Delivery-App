import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LaunchScreen from './src/screens/LaunchScreen';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import AccountScreen from './src/screens/auth/AccountScreen';
import RestaurantsScreen from './src/screens/main/RestaurantsScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Launch" component={LaunchScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
