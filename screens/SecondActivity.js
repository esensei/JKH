import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'

import HistoryOrders from '../components/HistoryOrders'

export default class SecondActivity extends Component {
  onClickNavigate = (date, status, seller, products, subTotal, deliveryCost, totalPrice, deliveryDate) => {
    this.props.navigation.navigate('DetailsOrder', {date, status, seller, products, subTotal, deliveryCost, totalPrice, deliveryDate})
  }
  render() {
    const json = this.props.screenProps

    const {h1, container, imageStyle, lineStyle} = styles
    return (
      <ScrollView>
        <View style={container}>
          <Image style={styles.imageStyle} source={require('../images/Thunder-move.png')} />
          <Text style={h1}>Активные заказы</Text>
        </View>
        {json.orders.active.map((value, key) => (
          <View key={key}>
            <HistoryOrders data={value} subTotal={value.subTotal} totalPrice={value.fullCost} deliveryCost={value.deliveryCost} onClick={this.onClickNavigate} key={key} deliveryDate={value.deliveryDate} seller={value.seller} status={value.status} date={value.date} />
            {((key % 2 === 0) && !((key + 1) === Object.keys(json.orders.active).length)) ?
              <View style={lineStyle} /> : null
            }
          </View>)
        )}

        <View style={container}>
          <Image style={imageStyle} source={require('../images/history-order.png')} />
          <Text style={h1}>История заказов</Text>
        </View>
        {json.orders.history.map((value, key) => (
          <View key={key}>
            <HistoryOrders data={value} subTotal={value.subTotal} totalPrice={value.fullCost} deliveryCost={value.deliveryCost} onClick={this.onClickNavigate} key={key} deliveryDate={value.deliveryDate} seller={value.seller} status={value.status} date={value.date} />
            {((key % 2 === 0) && !((key + 1) === Object.keys(json.orders.history).length)) ?
              <View style={lineStyle} /> : null
            }
          </View>
        ))}
      </ScrollView>)
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: {
    width: 30,
    height: 30
  },
  lineStyle: {
    marginTop: 10,
    borderBottomColor: 'rgba(216,216,216,1)',
    borderBottomWidth: 2
  },
  h1: {
    marginLeft: 12,
    fontSize: 18,
    color: 'rgba(82,130,240,1)'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 5,
    paddingTop: 5
  }
})
