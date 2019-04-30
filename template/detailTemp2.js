import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  AsyncStorage,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'

import CountSelector from '../components/CountSelector'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class detailTemp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: 'Пицца Винченцо фирменная',
      composition: 'Бекон, Лосось, Лук красный, Моцарелла, укроп',
      countSelector: true,
      weight: 1000,
      count: 0,
      cost: 400
    }
  }
  componentWillMount = () => {
    AsyncStorage.removeItem('Cart')
    AsyncStorage.getItem('Cart', (err, res) => { console.log(JSON.parse(res)) })
  }

  onClickPlus = () => {
    const c = this.state.count + 1
    this.setState({count: c})
  }
  onClickMinus = () => {
    let c = this.state.count
    c <= 0 ? c : c--
    this.setState({count: c})
  }

  saveData() {
    const {cost, weight, count, id, title, composition} = this.state
    console.log('We are in SAve function')
    try {
    let product = []
    let items = {
        id,
        title,
        cost,
        count,
        weight,
        composition
      }

      AsyncStorage.getItem('Cart', (err, res) => {
        if (!res) {
          product.push(items)
          alert('Добавлен в пустой')
          AsyncStorage.setItem('Cart', JSON.stringify(product))
        } else {
          alert('Добавлен в сущ')
          product = JSON.parse(res)
          let pars = JSON.parse(res)
          pars.map((value, index) => {
            if (value.id === items.id) {
              pars[index].count += count
              AsyncStorage.setItem('Cart', JSON.stringify(pars), alert(pars[index].count))
              return
            }
          })
          product.push(items)
          AsyncStorage.setItem('Cart', JSON.stringify(product),
            console.log('item added ' + JSON.stringify(product)))
        }

      })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    const {image,orderButton, orderText, container, h2, textContainer, columnContainer, h3, custom, containerHead, h1, subContainer} = styles
    const {count, cost, description, composition, weight} = this.state
    return (
      <View style={container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('menuTemp2')} style={containerHead}>
          <View style={{flex: 1}}>
            <Image style={{height: 20, width: 10}} source={require('../images/cardTapFlip.png')} />
          </View>
          <View style={subContainer}>
            <Text style={h1}>{this.props.navigation.state.params.name}</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <View style={custom}>
            <Image style={image} source={{uri: this.props.navigation.state.params.image}} />
          </View>
          <Text style={h2}>Описание</Text>
          <Text style={h3}>{description} </Text>
          <Text style={h2}>Состав</Text>
          <Text style={h3}>{composition}.</Text>
          <CountSelector name={'Количество'} count={count} onClickMinus={() => this.onClickMinus()} onClickPlus={() => this.onClickPlus()} />
          <View styles={columnContainer}>
            <View style={textContainer}>
              <Text style={h2}>Масса 1 шт.</Text>
              <Text style={h3}>{weight}гр.</Text>
            </View>
            <View style={textContainer}>
              <Text style={h2}>Стоимость</Text>
              <Text style={h3}>{cost * count}р.</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => { this.saveData() }} style={orderButton}>
            <Text style={orderText}>Добавить в корзину</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    alignSelf: 'center',
    color: 'rgba(82,130,240,1)',
    fontSize: 18
  },
  h2: {
    marginTop: 0.023 * width,
    fontSize: 16,
    color: 'gray'
  },
  orderButton: {
    marginTop: 10,
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
  h3: {

    fontSize: 16
  },
  columnContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    },
  textContainer: {

    width: 0.40 * width,

 },
  containerHead: {
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
  container: {
    flex: 1
  },
  custom:{
    overflow: 'hidden',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  image: {
    width: 0.94 * width,
    height: 0.21 * height
  }
})


export default detailTemp2
