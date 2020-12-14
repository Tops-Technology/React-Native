import React, {Component} from 'react';

import { Image } from 'react-native';

import { createStackNavigator, createBottomTabNavigator, createAppContainer, } from 'react-navigation';

import Home_Activity from './screens/Home_Activity';
import Settings_Activity from './screens/Settings_Activity';
import Details_Activity from './screens/Details_Activity';
import Profile_Activity from './screens/Profile_Activity';

const HomeTab = createStackNavigator(
  {
    Home: Home_Activity ,
    Details: Details_Activity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
     
    },
  }
);

const SettingsTab = createStackNavigator(
  {
    Settings: Settings_Activity ,
    Details: Details_Activity ,
    Profile: Profile_Activity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);

const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Settings: SettingsTab ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ require('./assets/home.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else {
          return (
            <Image
              source={ require('./assets/settings.png') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);


export default createAppContainer(MainApp);