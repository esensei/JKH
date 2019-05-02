import React, {Component} from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import MenuPiece from './menuPiece'

const width = Dimensions.get('window').width //full width


class secondTemp1 extends Component {
  render() {
    const {h1, h2, lineStyle} = styles
    return (
      <ScrollView>
        <Text style={h1}>{this.props.name}</Text>
        <Text style={h2}>{this.props.description}</Text>
        <Text style={[h2, {color: 'gray'}]}>Меню</Text>
        {this.props.typeOfMenu.map((value, key) => (
          <MenuPiece key={key} name={value.name} id={value.id} nav={this.props.navigation} />
        ))}

        <View style={lineStyle} />
      </ScrollView>)
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.menu.data.name,
    description: state.menu.data.description,
    typeOfMenu: state.menu.data.menu
  }
}

export default connect(mapStateToProps)(secondTemp1)

const styles = StyleSheet.create({
  h1: {
    marginTop: 0.037 * width,
    fontSize: 18,
    color: 'rgba(82,130,240,1)'
  },
  h2: {
    marginTop: 0.025 * width,
    fontSize: 16
  },
  lineStyle: {
    marginTop: 10,
    borderBottomColor: 'rgba(216,216,216,1)',
    borderBottomWidth: 2
  }
})
