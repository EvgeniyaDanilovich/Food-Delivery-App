import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {MainNavigator} from './src/navigation/main';
import {ThemeProvider} from './src/utilities/providers/themeContext';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </Provider>
  );
};
// import React, {useContext} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LaunchScreen from './src/screens/LaunchScreen';
// import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
// import AccountScreen from './src/screens/auth/AccountScreen';
// import RestaurantsScreen from './src/screens/main/RestaurantsScreen';
// import {Provider} from 'react-redux';
// import {store} from './src/store/store';
// import {SettingsScreen} from './src/screens/main/SettingsScreen';
// import {
//   ThemeProvider,
//   ThemeContext,
// } from './src/utilities/providers/themeContext';
// import {View, Text} from 'react-native';

// const Stack = createNativeStackNavigator();

// export const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <ThemeProvider>
//         <MainApp />
//       </ThemeProvider>
//     </Provider>
//   );
// };

// export const MainApp: React.FC = () => {
//   const themeContext = useContext(ThemeContext);

//   if (!themeContext) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Loading theme...</Text>
//       </View>
//     );
//   }

//   const {theme} = themeContext;

//   return (
//     <NavigationContainer theme={theme}>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: theme.colors.background,
//           },
//           headerTintColor: theme.colors.text,
//         }}>
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//         <Stack.Screen name="Launch" component={LaunchScreen} />
//         <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//         <Stack.Screen name="Account" component={AccountScreen} />
//         <Stack.Screen name="Restaurant" component={RestaurantsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
