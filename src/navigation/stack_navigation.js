import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgetPassword, Login, SignUp} from '../screens';
const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
