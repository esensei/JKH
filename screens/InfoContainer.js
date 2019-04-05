import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native'
import HeadNavigator from '../components/HeadNavigator'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class InfoContainer extends Component {
  render() {
    const {linearGradient, h1, container} = styles
    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <Text style={h1}>Заказать воду</Text>
        <TouchableOpacity disabled style={container}>
          <HeadNavigator />
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    ...ifIphoneX({
      paddingTop: 0.05 * height
    }, {
      paddingTop: 0.01 * height
    })
  },
  h1: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginBottom: 0.013 * height
  },
  container: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    height
  }
})

export default InfoContainer
