import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ForgetPassword,
  Login,
  NewPassword,
  NewPasswordSuccess,
  SignUp,
  Verification,
} from '../screens';
const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LogIn">
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="NewPasswordSuccess" component={NewPasswordSuccess} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
