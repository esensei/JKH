import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";

import AuthLoadingScreen from './screens/AuthLoadingScreen'
import bottomMenu from './components/BottomMenu'
import AddNavigator from './screens/AddNavigator'






const AppStackNavigator = createStackNavigator({
    Login: {screen: AuthLoadingScreen,
      navigationOptions: {
        header: () => null,
      }},
    Home: {screen: bottomMenu,
      navigationOptions: {
        header: () => null,
      }},

    Add: {screen: AddNavigator,
      navigationOptions: {
        header: () => null,
      }}




});



const App = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }

});

export default App;
