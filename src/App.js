import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './views/main/Main'
import RestaurantService from './views/restaurantServices/RestaurantServices'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' headerMode='none'>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="RestaurantService" component={RestaurantService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;