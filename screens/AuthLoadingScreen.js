import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import LoginNavigator from './LoginNavigator'
import bottomMenu from '../components/BottomMenu'

const url = "http://borolis.party/validatetoken.php"




class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    userToken = await AsyncStorage.getItem('apitoken')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
      body: JSON.stringify({apitoken: userToken })
      })
      const result = await response.json();
      if (result.apitoken === null) {
        await  AsyncStorage.removeItem('apitoken')
        this.props.navigation.navigate("LoginNavigator")
      }
      else {
        this.props.navigation.navigate("BottomNavigator")
      }
      console.log(result);
      // this.props.navigation.navigate(userToken ? "BottomNavigator" : 'LoginNavigator');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoadingScreen: {screen: AuthLoadingScreen},
    LoginNavigator: {screen: LoginNavigator},
    BottomNavigator: {screen: bottomMenu},
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  }
));
