import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'

export default class DetailsOrder extends Component {
  render() {
    //const {this.props.navigation.state.params} = data
    const {container, h1, h2, stringContainer, subContainer} = styles
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SecondActivity')} style={container}>
        <View style={{flex: 1}}>
          <Image style={{height: 20, width: 10}} source={require('../images/cardTapFlip.png')} />
        </View>
        <View style={subContainer}>
          <Text style={h1}>{this.props.navigation.state.params.data}</Text>
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Статус доставки</Text>
          <Text style={h2}>{this.props.navigation.state.params.status}</Text>
        </View>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12
  },
  subContainer: {
    flex: 20,
    justifyContent: 'center'
  },
  stringContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 2,
    flexWrap: 'wrap'
  },
  h1: {
    alignSelf: 'center',
    color: 'rgba(82,130,240,1)',
    fontSize: 18
  }
})
