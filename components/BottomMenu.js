import React, { Component } from "react";
import {
    StyleSheet,
    Image
  } from "react-native"
import ServicesNavigator from '../screens/ServicesNavigator'
import LoginNavigator from '../screens/LoginNavigator'
import AddNavigator from '../screens/AddNavigator'
import InfoNavigator from '../screens/InfoNavigator'

import GetWater from '../screens/GetWater'
import InfoContainer from '../screens/InfoContainer'

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
 Услуги: {
   screen: createStackNavigator({
     ServicesNavigator: {screen: ServicesNavigator,
       navigationOptions: {
         header: () => null,
       }},

     InfoContainer: {screen: InfoContainer,
       navigationOptions: {
         header: () => null,
       }}
   }),
   navigationOptions: {
     tabBarLabel: 'Услуги',
     tabBarIcon:({focused, tintColor}) => (
       focused ?
       <Image style={styles.buttomImage} source={require('../images/bot_menu1_focus.png')}/>
       :
       <Image style={styles.buttomImage} source={require('../images/bot_menu1.png')}/>
     )
   }
 },
 Информация:{
   screen: InfoNavigator,
   navigationOptions: {
     tabBarLabel: 'Информация',
     tabBarIcon:({focused, tintColor}) => (
       focused ?
       <Image style={styles.buttomImage} source={require('../images/bot_menu2_focus.png')}/>
       :
       <Image style={styles.buttomImage} source={require('../images/bot_menu2.png')}/>
   )
   }
 },
 Еще: {
   screen: AddNavigator,
   navigationOptions: {
     tabBarLabel: 'Еще',
     tabBarIcon:({focused, tintColor}) => (
       focused ?
       <Image style={styles.buttomImage} source={require('../images/bot_menu3_focus.png')}/>
         :
         <Image style={styles.buttomImage} source={require('../images/bot_menu3.png')}/>)

   }
 }
},
{
  headerMode: 'none',
  tabBarPosition: 'bottom',
  tabBarOptions: {
                style: {
                    height: 60,
                },

                labelStyle: {
                    fontSize: 14,
                    color: 'rgba(82,130,240,1)',
                },
            }
})

const styles = StyleSheet.create({
    buttomImage:
    {
      width: 35,
      height: 35
    },
    container:
    {
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    }
  })

export default createAppContainer(TabNavigator);
