import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from 'react-native'

const url = 'http://borolis.party/validatetoken.php'

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('apitoken')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({apitoken: userToken })
    })
    const result = await response.json()
    if (result.apitoken === null) {
      await AsyncStorage.removeItem('apitoken')
      this.props.navigation.navigate('LoginNavigator')
    } else {
      this.props.navigation.navigate('BottomNavigator')
    }
    console.log(result)
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}
