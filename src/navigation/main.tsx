import React, {useContext} from 'react';
import {ThemeContext} from '../utilities/providers/themeContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LaunchScreen} from '../screens/LaunchScreen';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import {AccountScreen} from '../screens/auth/AccountScreen';
import {RestaurantsScreen} from '../screens/main/restaurants/RestaurantsScreen';
import {SettingsScreen} from '../screens/main/SettingsScreen';
import {RootStackParamList, screenNames} from './types';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading theme...</Text>
      </View>
    );
  }

  const {theme} = themeContext;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
        }}>
        <Stack.Screen
          name={screenNames.onboarding}
          component={OnboardingScreen}
        />
        <Stack.Screen name={screenNames.launch} component={LaunchScreen} />
        <Stack.Screen name={screenNames.settings} component={SettingsScreen} />

        <Stack.Screen name={screenNames.account} component={AccountScreen} />
        <Stack.Screen
          name={screenNames.restaurants}
          component={RestaurantsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
