import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { servicesFetchData } from '../actions/items'

class ServicesNavigator extends Component {
  componentDidMount = async () => {
    this.props.fetchData()
  }
  render() {
    const {buttonContainer, buttonStyle, linearGradient, body} = styles
    if (this.props.hasErrored) {
      alert(`Ошибка загрузки ${hasErrored}`.hasErrored)
    }
    if (this.props.items.length === 0) {
      return (
        <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient} >
          <ActivityIndicator size="large" color="white" />
        </LinearGradient>)
    }
    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <View style={body}>
          {this.props.items.businessesList.map((value, key) => (
            <TouchableOpacity key={key} style={buttonContainer} onPress={() => this.props.navigation.navigate('InfoContainer', {id: value.id})}>
              <Text style={buttonStyle}>{value.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>)
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.service.services,
    hasErrored: state.service.itemsHasErrored,
    isLoading: state.service.itemsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(servicesFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesNavigator)

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
