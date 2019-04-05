import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

import RNPickerSelect from 'react-native-picker-select'

const width = Dimensions.get('window').width //full width
const formsPay = [
  {
    label: 'Наличными',
    value: 'nal'
  },
  {
    label: 'Оплата онлайн',
    value: 'beznal'
  }
]

export default class PaySelector extends Component {
  render() {
    const placeholder = {
      label: 'Выберите способ оплаты',
      value: null,
      color: '#9EA0A4'
    }
    const {h1} = styles
    return (
      <View>
        <Text style={h1}>{this.props.text}</Text>
        <RNPickerSelect
          items={formsPay}
          onValueChange={this.props.setPayout}
          style={styles}
          placeholder={placeholder}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    paddingTop: 12,
    paddingBottom: 5,
    color: 'grey',
    fontSize: 16
  },

  h2: {
    fontSize: 16
  },

  inputIOS: {
    width: width * 0.448,
    color: 'black',
    alignSelf: 'stretch',
    fontSize: 16,
    paddingVertical: 12,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(82,130,240,1)',
    borderRadius: 4,
    paddingRight: 30
  },

  inputAndroid: {
    width: width * 0.448,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(82,130,240,1)',
    borderRadius: 8,
    color: '#9EA0A4',
    paddingRight: 30
  }
})
