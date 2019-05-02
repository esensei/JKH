import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import {
  StyleSheet,
  Dimensions,
  Text,
  AsyncStorage,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'

import HeadNavigator from '../components/HeadNavigator'
import HeadNavigator2 from '../components/HeadNavigator2'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const url = 'http://borolis.party:3000/api/v1'

class InfoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      json: [],
      visible: false
    }
  }

  componentDidMount = async () => {
    const userToken = await AsyncStorage.getItem('apitoken')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({apiToken: userToken, query: 'getBusinessPageByID', data: {businessID: this.props.navigation.state.params.id}
      })
    })
    this.getMenu()
    const result = await response.json()
    this.setState({json: result})
  }

  getMenu = () => {
    const onSuccess = (success) => {
      this.props.dispatch({ type: 'menuFetched', payload: success.createOrderFields})
      return success
    }
    const onError = (error) => {
      console.log(error)
      alert('Ошибка получения данных')
    }
    try {
      const success = {
        "createOrderFields": {
          "name": "Пиццерия Помидорка",
          "description": "Наши гастарбайтеры доставляют заказы во все районы города и всего за 30 минут. Оплатить покупку предлагаем банковской картой онлайн, а также картой и наличными курьеру при получении. Минимальная стоимость заказа для услуги бесплатной доставки - 450 рублей с учетом всех скидок и промокодов.",
          "menu": [
            {
              "id": "0",
              "name": "Пицца",
              "products": [
                {
                  "id": "0",
                  "title": "Пицца Винченцо фирменная",
                  "composition": "Бекон, Лосось, Лук красный, Моцарелла, укроп",
                  "countSelector": "true",
                  "weight": "800",
                  "cost": "450",
                  "image": [
                    {
                      "url": "https://recipes.timesofindia.com/photo/53110049.cms"
                    },
                    {
                      "url": "https://d2gk7xgygi98cy.cloudfront.net/20-4-facebook.jpg"
                    }
                  ]
                },
                {
                  "id": "1",
                  "title": "Пицца Бориса острая",
                  "composition": "Бекон, Курица, Халапеньо, Моцарелла",
                  "countSelector": "true",
                  "weight": "1200",
                  "cost": "325",
                  "image": [
                    {
                      "url": "https://recipes.timesofindia.com/photo/53110049.cms"
                    },
                    {
                      "url": "https://d2gk7xgygi98cy.cloudfront.net/20-4-facebook.jpg"
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }

  render() {
    const {linearGradient, h1, container} = styles
    if (this.state.json.length === 0) {
      return (<LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <TouchableOpacity disabled style={container} />
      </LinearGradient>
      )
    }

    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <Text style={h1}>{this.state.json.createOrderFields.name}</Text>
        <TouchableOpacity disabled style={container}>
          {Number(this.props.navigation.state.params.id) === 1 ? <HeadNavigator2 screenProps={this.state.json} /> : <HeadNavigator screenProps={this.state.json} />
          }
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    ...ifIphoneX({
      paddingTop: 0.05 * height
    }, {
      paddingTop: 0.05 * height
    })
  },
  h1: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginBottom: 0.013 * height
  },
  container: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android
    paddingHorizontal: 0.03 * width,
    backgroundColor: 'white',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    height
  }
})

export default connect(this.getMenu)(InfoContainer)
