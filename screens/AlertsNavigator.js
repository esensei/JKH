import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { alertsFetchData } from '../actions/alerts'

class AlertsNavigator extends Component {
  componentDidMount = async () => {
    this.props.fetchData()
  }

  render() {
    const {circle, h1, h2, h3, linearGradient} = styles
    if (this.props.alerts.length == 0) {
      return (  <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient} >
          <ActivityIndicator size="large" color="white" />
        </LinearGradient>)
    }
    return (<LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
      <ScrollView>
        {
          this.props.alerts.map((item, index) => (<View key={index} style={circle}>
            <Text style={h1}>{item.content}</Text>
            <Text style={h2}>{item.alert_date_human}</Text>
            <Text style={h3}>{item.address}</Text>
          </View>))
        }
      </ScrollView>
    </LinearGradient>)
  }
}
const mapStateToProps = (state) => {
  return {
    alerts: state.alerts.alerts,
    hasErrored: state.alerts.itemsHasErrored,
    isLoading: state.alerts.itemsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(alertsFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertsNavigator)

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
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
