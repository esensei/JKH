import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
const url = 'http://borolis.party:3000/api/v1'

class ServicesNavigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      json: [],
      visible: false
    }
  }
  componentDidMount = async () => {
    const userToken = await AsyncStorage.getItem('apitoken')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({apiToken: userToken, query: 'getBusinessesList'})
    })


    const result = await response.json()
    this.setState({json: result})
  }
  render() {
    const {buttonContainer, buttonStyle, linearGradient, body} = styles
    if (this.state.json.length === 0) {
      return (<LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient} />
  )}
    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <View style={body}>
          {this.state.json.businessesList.map((value, key) => (
            <TouchableOpacity key={key} style={buttonContainer}
              onPress={() => this.props.navigation.navigate('InfoContainer', {id : value.id})}>
              <Text style={buttonStyle}>{value.name}</Text>
            </TouchableOpacity>
          ))}

        </View>
      </LinearGradient>)
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
})
