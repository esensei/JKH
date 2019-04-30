import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import {
  StyleSheet,
  Dimensions,
  Text,
  AsyncStorage,
  TouchableOpacity
} from 'react-native'
import HeadNavigator from '../components/HeadNavigator'
import HeadNavigator2 from '../components/HeadNavigator2'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const url = 'http://borolis.party:3000/api/v1'

class InfoContainer extends Component {
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
      body: JSON.stringify({apiToken: userToken, query: 'getBusinessPageByID', data: {businessID: this.props.navigation.state.params.id}
      })
    })

    const result = await response.json()
    this.setState({json: result})
  }



  render() {
    const {linearGradient, h1, container} = styles
    if (this.state.json.length === 0) {
      return (<LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <TouchableOpacity disabled style={container} />
      </LinearGradient>
      )
    }

    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <Text style={h1}>{this.state.json.createOrderFields.name}</Text>
        <TouchableOpacity disabled style={container}>
          {Number(this.props.navigation.state.params.id) === 1 ? <HeadNavigator2 screenProps={this.state.json} /> : <HeadNavigator screenProps={this.state.json} />
          }
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
      paddingTop: 0.05 * height
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
    paddingHorizontal: 0.03 * width,
    backgroundColor: 'white',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    height
  }
})

export default InfoContainer
