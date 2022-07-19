import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {User} from '../models/user.model';
import {DetailedUserScreen} from '../screens/DetailedUserScreen';
import {AddUserScreen} from '../screens/AddUserScreen';

const Stack = createStackNavigator<MainRouteParamList>();

export const ApplicationNavigator = memo(function ApplicationNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Main'} component={MainScreen} />
      <Stack.Screen name={'DetailedUser'} component={DetailedUserScreen} />
      <Stack.Screen name={'AddUser'} component={AddUserScreen} />
    </Stack.Navigator>
  );
});

type MainRouteParamList = {
  Main: undefined;
  DetailedUser: {user: User};
  AddUser: undefined;
};
