import React, { Component } from "react";
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'

import HeadNavigator from '../components/HeadNavigator'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Button
} from "react-native"


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class InfoContainer extends Component {
  render(){
    const {h2, h3, header, headerText, buttonTextOther, orderText, orderButton, orderContainer, buttonTextCenter, countButton, countButtonMinus, countButtonPlus, countButtonCenter, linearGradient, dataPicker, container,placeContainer, pickerContainer} = styles
    return(
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <TouchableOpacity disabled={true} style={container}>
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
    paddingTop: 60,
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

    height: height,
  }
})

export default InfoContainer
