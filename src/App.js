import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './views/main/Main'
import Login from './views/login/Login'
import Register from './views/register/Register'
import Admin from './views/admin/Admin'
import RestaurantService from './views/restaurantServices/RestaurantServices'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' headerMode='none'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TabAdmin">{()=>
          (<Tab.Navigator initialRouteName='Admin'>
            <Tab.Screen name="Admin" component={Admin}/>
          </Tab.Navigator>)
        }</Stack.Screen>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="RestaurantService" component={RestaurantService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;