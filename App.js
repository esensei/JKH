import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import bottomMenu from './components/BottomMenu'
import AddNavigator from './screens/AddNavigator'
import LoginNavigator from './screens/LoginNavigator'

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

const App = createAppContainer(AppStackNavigator)
export default App
