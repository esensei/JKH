import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {StatusBar, View} from 'react-native'
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import bottomMenu from './components/BottomMenu'
import AddNavigator from './screens/AddNavigator'
import LoginNavigator from './screens/LoginNavigator'
import store from './stores'

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoadingScreen: {screen: AuthLoadingScreen},
    LoginNavigator: {screen: LoginNavigator},
    BottomNavigator: {screen: bottomMenu}
  },
  {
    initialRouteName: 'AuthLoadingScreen'
  })

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: SwitchNavigator,
    navigationOptions: {
      header: () => null
    }
  },
  Home: {
    screen: bottomMenu,
    navigationOptions: {
      header: () => null
    }
  },

  Add: {
    screen: AddNavigator,
    navigationOptions: {
      header: () => null
    }
  }
},
{
  initialRouteName: 'Login'
})
const Stack = createAppContainer(AppStackNavigator)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
      </Provider>
    )
  }
}
