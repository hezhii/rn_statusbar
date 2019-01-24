import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from './components/TabBarIcon'

import Home from './pages/Home'
import My from './pages/My'
import Login from './pages/Login'
import Register from './pages/Register'

const Main = createBottomTabNavigator(
  {
    Home,
    My
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} routeName={routeName} />,
      };
    },
    tabBarOptions: {
      activeTintColor: '#437dff',
      inactiveTintColor: '#888FA1',
      style: {
        borderTopColor: '#E6E8EB',
      },
    },
  }
)

export default createAppContainer(createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    Login,
    Register
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: '返回'
    }
  }
))