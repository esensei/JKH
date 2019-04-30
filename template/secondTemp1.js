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

const width = Dimensions.get('window').width //full width


export default class secodTemp1 extends Component {
  render() {
    const {h1, h2, container, h2Menu, image, lineStyle} = styles
    return (
      <ScrollView>
        <Text style={h1}>Пиццерия помидорка</Text>
        <Text style={h2}>Наши курьеры доставляют заказы во все районы города и всего за 30 минут. Оплатить покупку предлагаем банковской картой онлайн, а также картой и наличными курьеру при получении. Минимальная стоимость заказа для услуги бесплатной доставки - 450 рублей с учетом всех скидок и промокодов.</Text>
        <Text style={[h2, {color: 'gray'}]}>Меню</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('menuTemp2')} style={container}>
          <Text style={h2Menu}>Пицца</Text>
          <Image style={image} source={require('../images/cardTap.png')} />
        </TouchableOpacity>
        <View style={lineStyle} />
      </ScrollView>)
  }
}

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
  h2Menu: {
    fontSize: 16
  },

  image: {
    width: 10,
    height: 20
  },
  container: {
    marginTop: 0.025 * width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 2,
    flexWrap: 'wrap'
  },
  lineStyle: {
    marginTop: 10,
    borderBottomColor: 'rgba(216,216,216,1)',
    borderBottomWidth: 2
  }
})
