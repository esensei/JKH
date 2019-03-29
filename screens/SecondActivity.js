import React, {Component} from "react";
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native"

export default class SecondActivity extends React.Component {
  render() {
    const {h1, h2, container, imageStyle, h3} = styles
    return (<View>
      <View style={container}>
        <Image style={styles.imageStyle} source={require('../images/Thunder-move.png')}/>
        <Text style={h1}>Активные заказы</Text>
      </View>
      <View style={container}>
        <Image style={styles.imageStyle} source={require('../images/history-order.png')}/>
        <Text style={h1}>История заказов</Text>
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: {
    width: 30,
    height: 30
  },
  h1: {
    marginLeft: 12,
    fontSize: 18,
    color: 'rgba(82,130,240,1)'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 5,
    paddingTop: 5
  }
})
