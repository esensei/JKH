import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import ActiveOrders from '../components/ActiveOrders'
import HistoryOrders from '../components/HistoryOrders'

const json = {
  "activeOrders":[
    {
      "date": "21 декабря 2018 года",
      "status":"active",
      "delieveryDate": "~ в 18:30 21.12.2018",
      "seller":"ИП Водичкин Ш.А.",
      "totalPrice":"1 300p."
    },
    {
      "date": "1 декабря 2010 года",
      "status":"active",
      "delieveryDate": "~ в 13:33 1.12.2010",
      "seller":"ИП Петрху Ш.А.",
      "totalPrice":"1 300p."
    }
    ],
  "historyOrders":[
     {
      "date": "3 декабря 2012 года",
      "status":"canceled",
      "delieveryDate": "~ в 2:30 3.12.2012",
      "seller":"ИП Водинцев Ш.А.",
      "totalPrice":"3 343p."
    }
    ]
}

export default class SecondActivity extends Component {

  onClickNavigate = (data, status, seller) => {
    this.props.navigation.navigate('DetailsOrder', {data, status, seller})
  }

  render() {
    const {h1, container, imageStyle} = styles
    return (
      <View>
        <View style={container}>
          <Image style={styles.imageStyle} source={require('../images/Thunder-move.png')} />
          <Text style={h1}>Активные заказы</Text>
        </View>
        {json.activeOrders.map((value, key) => {
          if ((key + 1) % 2 == 0) {
            return (<ActiveOrders key={key} delieveryDate={value.delieveryDate} totalPrice={value.totalPrice} seller={value.seller} date={value.date} />
            )
          }})}

        <View style={container}>
          <Image style={imageStyle} source={require('../images/history-order.png')} />
          <Text style={h1}>История заказов</Text>
        </View>
        {json.historyOrders.map((value, key) =>
          <HistoryOrders onClick={this.onClickNavigate} key={key} delieveryDate={value.delieveryDate} totalPrice={value.totalPrice} seller={value.seller} status={value.status} date={value.date} />
        )}
    </View>)
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
