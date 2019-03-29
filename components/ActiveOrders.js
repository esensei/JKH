import React from 'react'
import PropTypes from 'prop-types'
import { Stylesheet } from 'react-native';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native"

export default class ActiveOrders extends React.Component {
  render () {
    const {container, h1, stringContainer} = styles
    return (
      <View style={container}>
        <View style={stringContainer}>
          <Text style={h1}>Заказ от {props.date}</Text>
          <Image source={require('../images/cardTap.png')}/>
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Статус экрана</Text>
          <Image source={require('../images/cardTap.png')}/>
        </View>
      </View>
    )
  }
}

function getStatus(status) { //status=(active|closed|cancel)
  switch (status) {
    case 'active':
      return()
      break;
    case 'closed':
      return()
      break;
    case 'cancel':
      return()
      break;
    default:

  }
}


module.exports = StyleSheet.create({
  container:{

  },
  h1:{
    fontSize: 18,
  },
  h2:{
    fontSize: 16,
  },
  stringContainer:{
    flexDirection: 'row'
  }
});
