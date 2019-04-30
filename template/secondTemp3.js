import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'


export default class secodTemp3 extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Пиццерия помидорка</Text>
      </ScrollView>)
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
