import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './views/main/Main'
import Login from './views/login/Login'
import Register from './views/register/Register'
import Admin from './views/admin/Admin'
import Notification from './views/notification/Notification'
import RestaurantService from './views/restaurantServices/RestaurantServices'

import FlashMessage from 'react-native-flash-message';
import RestaurantsView from './views/restaurants/Restaurants.view';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator()


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="TabAdmin">{() =>
          (<Tab.Navigator initialRouteName='Admin' tabBarOptions={{
            activeBackgroundColor: 'red',
            inactiveBackgroundColor: '#8f0000',
            showLabel: false,
            style: {
              height: '8%',
              backgroundColor: 'black',
              borderTopWidth: 0
            }
          }}>
            <Tab.Screen name="Admin" component={Admin} />
            <Tab.Screen name="Notification" component={Notification} />
          </Tab.Navigator>)
          }</Stack.Screen>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="RestaurantService" component={RestaurantService} />
          <Stack.Screen name="Restaurants" component={RestaurantsView} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position='top'/>
    </>
  );
}

export default App;