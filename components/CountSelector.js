import React, { Component } from "react";
import PropTypes from 'prop-types'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native"


export default class CountSelector extends Component {
  constructor(props){
  super(props);
}
  render(){
    const {h2, buttonTextOther, buttonTextCenter, countButton, countButtonMinus, countButtonPlus, countButtonCenter} = styles

    return(
    <View>
      <Text style={h2}>{this.props.name}</Text>
      <View style={countButton}>
        <TouchableOpacity onPress={this.props.onClickMinus} style={countButtonMinus}>
          <Text style={buttonTextOther}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={true} style={countButtonCenter}>
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
  buttonTextCenter:{
    fontSize: 14,
  },
  buttonTextOther:{
    fontSize: 18,
    color: 'white'
  },
  countButton:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  countButtonMinus:{
    borderTopLeftRadius: 5,
    width: 45,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(82,130,240,1)',
    borderBottomLeftRadius: 5,
  },
  h2:{
    paddingTop: 12,
    paddingBottom: 5,
    color: 'grey',
    fontSize: 16,
  },

  countButtonCenter:{
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderColor: 'rgba(82,130,240,1)'
  },
  countButtonPlus:{
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    borderTopRightRadius: 5,
    backgroundColor:'rgba(82,130,240,1)',
    borderBottomRightRadius: 5,
    }
})
