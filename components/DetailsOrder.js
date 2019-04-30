import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'

const width = Dimensions.get('window').width //full width

export default class DetailsOrder extends Component {
  render() {
    const {date, status, seller, subTotal, deliveryCost, totalPrice, products, deliveryDate} = this.props.navigation.state.params
    const {container, lineStyle, h1, h2, stringContainer, subContainer, orderButton, orderText, orderContainer} = styles
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SecondActivity')} style={container}>
          <View style={{flex: 1}}>
            <Image style={{height: 20, width: 10}} source={require('../images/cardTapFlip.png')} />
          </View>
          <View style={subContainer}>
            <Text style={h1}>{date}</Text>
          </View>
        </TouchableOpacity>
        <View style={stringContainer}>
          <Text style={h2}>Статус доставки</Text>
          <Text style={h2}>{status}</Text>
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Дата доставки</Text>
          <Text style={h2}>{deliveryDate}</Text>
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Продавец</Text>
          <Text style={h2}>{seller}</Text>
        </View>
        <View>
          <Text style={[h1, {marginVertical: 20}]}>Товары</Text>
        </View>
        {products.map((value, key) => (
          <View key={key} >
            <View style={stringContainer}>
              <Text style={h2}>{value.name}</Text>
              <Text style={h2}>{value.cost}р.</Text>
            </View>
            <View style={lineStyle} />
          </View>
        ))}
        <View style={stringContainer}>
          <Text style={h2}>Подытог</Text>
          <Text style={h2}>{subTotal}р.</Text>
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Доставка</Text>
          <Text style={h2}>{deliveryCost}р.</Text>
        </View>
        <View style={stringContainer}>
          <Text style={[h2, {fontWeight: 'bold'}]}>Итого</Text>
          <Text style={h2}>{totalPrice}р.</Text>
        </View>
        <View style={orderContainer}>
          <TouchableOpacity style={orderButton}>
            <Text style={orderText}>Повторить заказ</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lineStyle: {
    marginVertical: 10,
    borderBottomColor: 'rgba(216,216,216,1)',
    borderBottomWidth: 2
  },
  orderContainer: {
    marginTop: 30,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 0.1 * width
  },
  orderButton: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(82,130,240,1)'
  },
  orderText: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20
  },
  subContainer: {
    flex: 20,
    justifyContent: 'center'
  },
  h2: {
    fontSize: 16,
    marginBottom: 4
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
