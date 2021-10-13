import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Login'
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App