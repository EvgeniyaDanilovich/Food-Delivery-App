import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {MainNavigator} from './src/navigation/main';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};
