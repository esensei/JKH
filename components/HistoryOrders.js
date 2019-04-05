import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

export default class HistoryOrders extends Component {
  onHandle = () => {
    this.props.onClick(this.props.date, getStatus(this.props.status), this.props.seller)
  }
  render() {
    const {container, h1, h2, image, stringContainer} = styles
    return (
      <TouchableOpacity onPress={this.onHandle} style={container}>
        <View style={stringContainer}>
          <Text style={h1}>Заказ от {this.props.date}</Text>
          <Image style={image}source={require('../images/cardTap.png')} />
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Статус экрана</Text>
          <Text style={h2}>{getStatus(this.props.status)}</Text>
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Дата доставки</Text>
          <Text style={h2}>{this.props.delieveryDate}</Text>
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Продавец</Text>
          <Text style={h2}>{this.props.seller}</Text>
        </View>
        <View style={stringContainer}>
          <Text style={h2}>Итого</Text>
          <Text style={h2}>{this.props.totalPrice}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

function getStatus(status) { //status=(closed|cancel)
  switch (status) {
  case 'closed':
    return (
      <Text style={[styles.h2, {color: 'rgba(64,193,67,1)'}]}>Завершен</Text>
    )
  case 'canceled':
    return (
      <Text style={[styles.h2, {color: 'rgba(201,63,63,1)'}]}>Отменен</Text>
    )
  default:
    return (
      <Text style={[styles.h2, {color: 'rgba(201,63,63,1)'}]}>Ошибка статуса заказа</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  image: {
    width: 10,
    height: 20
  },
  h1: {
    fontSize: 18,
    marginBottom: 4
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
  }
})
