import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'

import { Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator()

const App = () => {
  // IMPORTING CUSTOM FONTS FROM THE ASSETS FOLDER
  const [loaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    //   NAVTGATION THROUGHOUT THE APP
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
