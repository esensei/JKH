import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native"

import LinearGradient from 'react-native-linear-gradient'

class ServicesNavigator extends Component {

  header: {
    visible: false
  }

  render() {
    const {buttonContainer, buttonStyle, linearGradient, container, body} = styles
    return (<LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>

      <View style={body}>
        <TouchableOpacity style={buttonContainer} onPress={() => this.props.navigation.navigate('TopTapBar')}>
          <Text style={buttonStyle}>Домофон</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonContainer} onPress={() => this.props.navigation.navigate('InfoContainer')}>
          <Text style={buttonStyle}>Заказать воду</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={buttonStyle}>Уборка квартиры</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={buttonStyle}>Мастер на дом</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={buttonStyle}>Трансфер</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={buttonStyle}>Показания ЖКХ</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>);
  }
}

export default ServicesNavigator

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center'

  },

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonContainer: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {
      height: 1,
      width: 1
    }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android

    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 17,
    justifyContent: 'center',
    alignContent: 'center',
    height: 60
  },

  buttonStyle: {
    fontFamily: 'System',
    fontSize: 22,
    width: 290,
    textAlign: 'center',
    color: '#5282F0'
  }
});
