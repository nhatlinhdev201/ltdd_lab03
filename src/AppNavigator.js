import { createStackNavigator } from 'react-navigation'
import FistScreen from './screen/FistScreen'
import FistScreenNext from './screen/Screen1_a'
import React from 'react'

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FistScreen" component={FistScreen}/>
          <Stack.Screen name="FistScreenNext" component={FistScreenNext}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator;