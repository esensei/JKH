import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import SecondActivity from '../screens/SecondActivity'
import GetWater from '../screens/GetWater'

import {StyleSheet, View, Text, Image} from "react-native"

const HeadNavigator = createMaterialTopTabNavigator({

  Заказ: {
    screen: GetWater,
    navigationOptions: {

      tabBarLabel: ({focused, tintColor}) => (
        focused
        ? <View style={{
            paddingVertical: 7,
            paddingHorizontal: 20,
            flex: 1,
            alignSelf: 'flex-end',
            borderColor: 'rgba(82,130,240,1)',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            backgroundColor: 'rgba(82,130,240,1)',
            borderWidth: 1
          }}>
          <Text style={{
              color: 'white'
            }}>Второй экран</Text>
        </View>
        : <View style={{
            paddingVertical: 7,
            paddingHorizontal: 20,
            alignSelf: 'flex-end',
            borderColor: 'rgba(82,130,240,1)',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            backgroundColor: 'white',
            borderWidth: 1
          }}>
          <Text style={{
              color: 'rgba(82,130,240,1)'
            }}>Второй экран</Text>
        </View>)
    }
  },
  Заказ2: {
    screen: SecondActivity,
    navigationOptions: {
      tabBarLabel: 'Еще',
      tabBarLabel: ({focused, tintColor}) => (
        focused
        ? <View style={{
            paddingVertical: 7,
            paddingHorizontal: 20,
            alignSelf: 'flex-start',
            borderColor: 'rgba(82,130,240,1)',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            backgroundColor: 'rgba(82,130,240,1)',
            borderWidth: 1
          }}>
          <Text style={{
              color: 'white'
            }}>Второй экран</Text>
        </View>
        : <View style={{
            paddingVertical: 7,
            paddingHorizontal: 20,
            padding: 30,
            flex: 1,
            alignSelf: 'flex-start',
            borderColor: 'rgba(82,130,240,1)',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            backgroundColor: 'white',
            borderWidth: 1
          }}>
          <Text style={{
              color: 'rgba(82,130,240,1)'
            }}>Второй экран</Text>
        </View>)
    }
  }

}, {
  tabBarOptions: {
    tabStyle: {
      padding: 0,
      paddingTop: 20,
      margin: 0,
      paddingBottom: 20
    },
    style: {
      backgroundColor: '#fff',
    
    },
    indicatorStyle: {
      backgroundColor: 'white'
    }
  }

})

export default createAppContainer(HeadNavigator)
