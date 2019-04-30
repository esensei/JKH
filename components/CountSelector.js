import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'

const width = Dimensions.get('window').width //full width
const height = Dimensions.get('window').height //full width

export default class CountSelector extends Component {
  render() {
    const {h2, view, buttonTextOther, buttonTextCenter, countButton, countButtonMinus, countButtonPlus, countButtonCenter} = styles
    return (
      <View>
        <Text style={h2}>{this.props.name}</Text>
        <View style={countButton}>
          <TouchableOpacity onPress={this.props.onClickMinus} style={countButtonMinus}>
            <Text style={buttonTextOther}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled style={countButtonCenter}>
            <Text style={buttonTextCenter}>{this.props.count}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onClickPlus} style={countButtonPlus}>
            <Text style={buttonTextOther}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonTextCenter: {
    fontSize: 14
  },
  buttonTextOther: {
    fontSize: 18,
    color: 'white'
  },
  countButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  countButtonMinus: {
    borderTopLeftRadius: 5,
    width: 0.12 * width,
    height: 0.044 * height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(82,130,240,1)',
    borderBottomLeftRadius: 5
  },
  h2: {
    textAlign: 'left',
    paddingTop: 12,
    paddingBottom: 5,
    color: 'grey',
    fontSize: 16
  },

  countButtonCenter: {
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.139 * width,
    height: 0.064 * height,
    borderColor: 'rgba(82,130,240,1)'
  },
  countButtonPlus: {
    width: 0.12 * width,
    alignItems: 'center',
    justifyContent: 'center',
    height: 0.044 * height,
    borderTopRightRadius: 5,
    backgroundColor: 'rgba(82,130,240,1)',
    borderBottomRightRadius: 5
  }
})
