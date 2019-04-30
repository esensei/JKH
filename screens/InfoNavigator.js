import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  ScrollView
} from 'react-native'

const url_alerts = 'http://borolis.party/getalerts.php'

class InfoNavigator extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      alerts: ['kekus']
    }
  }

  componentWillMount = async () => {
    const userToken = await AsyncStorage.getItem('apitoken')
    const response = await fetch(url_alerts, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({apitoken: userToken})
    })

    const result = await response.json()
    let arrayResult = []
    for (const currentArray of result.alerts) {
      arrayResult = arrayResult.concat(currentArray)
    }
    this.setState({alerts: arrayResult})
  }

  render() {
    const {circle, h1, h2, h3, linearGradient} = styles
    return (<LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
      <ScrollView>
        {
          this.state.alerts.map((item, index) => (<View key={index} style={circle}>
            <Text style={h1}>{item.content}</Text>
            <Text style={h2}>{item.alert_date_human}</Text>
            <Text style={h3}>{item.address}</Text>
          </View>))
        }
      </ScrollView>
    </LinearGradient>)
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 50
  },
  h1: {
    fontSize: 16
  },
  h2: {
    marginTop: 8,
    color: 'rgba(82,130,240,1)',
    fontSize: 14
  },
  h3: {
    marginTop: 8,
    color: 'rgba(82,130,240,1)',
    fontSize: 12
  },

  circle: {
    padding: 8,
    marginBottom: 20,
    flex: 0,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,1)'
  }
})

export default InfoNavigator
