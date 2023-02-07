import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from './SplashScreen';
import FrontScreen from './FrontScreen'
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import DrawerScreen from './DrawerScreen';

const screens = {
  FrontScreen: {
    screen: FrontScreen, 
    navigationOptions: {   
      headerShown: false
    }
  },
  SignInScreen: {
    screen: SignInScreen, 
    navigationOptions: { 
      headerShown: false
    }
  },
  SignUpScreen: {
    screen: SignUpScreen, 
    navigationOptions: {
      headerShown: false
    }
  },
  DrawerScreen: {
    screen: DrawerScreen, 
    navigationOptions: {
      headerShown: false
    }
  },
}

const StackNavigator = createStackNavigator(screens);

const SwitchNavigator = createSwitchNavigator(
  {
    App: StackNavigator,
    Splash: SplashScreen,
  },
  {initialRouteName: 'Splash'}
);

export default createAppContainer(SwitchNavigator);