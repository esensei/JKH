import React from 'react'
import { Dimensions, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width //full width

const MenuPiece = (props) => {
  const {container, h2Menu, image} = styles
  return (
    <TouchableOpacity onPress={() => props.nav.navigate('menuTemp2', {id : props.id})} style={container}>
      <Text style={h2Menu}>{props.name}</Text>
      <Image style={image} source={require('../images/cardTap.png')} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0.025 * width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 2,
    flexWrap: 'wrap'
  },
  h2Menu: {
    fontSize: 16
  },

  image: {
    width: 10,
    height: 20
  }
})
export default MenuPiece
