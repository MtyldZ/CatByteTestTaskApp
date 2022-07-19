import React, {memo} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {ApplicationNavigator} from './navigators/application.navigator';
import {NavigationContainer} from '@react-navigation/native';

export function App() {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}

const AppComponent = memo(function AppComponent() {
  return (
    <NavigationContainer>
      <ApplicationNavigator />
    </NavigationContainer>
  );
});
