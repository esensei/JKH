import React, {Component} from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  AsyncStorage
} from 'react-native'
import PaySelector from '../components/PaySelector'

const width = Dimensions.get('window').width //full width


export default class secodTemp2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: []
    }
  }
  componentDidMount = () => {
    AsyncStorage.getItem('Cart', (err, res) => {
      if (!res) {
        return
      }
      this.setState( {cart: JSON.parse(res)})
    })
  }
  componentDidUpdate = () =>  {
    AsyncStorage.getItem('Cart').then(response => {
      this.setState({cart: JSON.parse(response)})
    }).done()
  }

  render() {
    const {cart} = this.state
    const {h2, input, container, pickerContainer, placeContainer, orderText, orderButton, orderContainer, lineStyle} = styles
    return (
      <ScrollView>
        <Text style={[h2, {color: 'rgba(52,52,52,1)'}]}>Заказ</Text>
        {cart.map((value, index) => (
          <View key={index}>
            <TouchableOpacity style={container}>
              <Text style={h2}>{value.title}</Text>
              <Text style={h2}>{value.cost}р.</Text>
            </TouchableOpacity>
            <View style={lineStyle} />
          </View>
        ))}

        <Text style={[h2, {color: 'rgba(52,52,52,1)'}]}>Комментарий</Text>
        <TextInput style={input} placeholderTextColor={'rgba(52,52,52,1)'} placeholder={'Комментарий к заказу'} />
        <View style={pickerContainer}>
          <View style={placeContainer}>
            <Text style={[h2, {color: 'rgba(52,52,52,1)'}]}>К оплате</Text>
            <Text style={h2}>1000р.</Text>
          </View>
          <View style={placeContainer}>
            <PaySelector text={'Оплата'}   />
          </View>
        </View>
        <View style={orderContainer}>
          <TouchableOpacity  style={orderButton}>
            <Text style={orderText}>Заказать</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>)
  }
}

const styles = StyleSheet.create({
  orderText: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'white'
  },
  orderButton: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(82,130,240,1)'
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexShrink: 2

  },
  placeContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  orderContainer: {
    marginTop: 30,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 0.1 * width
  },
  input: {
    marginTop: 8,
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 8,
    borderColor: 'rgba(82,130,240,1)'
  },
  h2: {
    marginTop: 0.03 * width,
    fontSize: 16
  },
  h3: {
    fontSize: 16
  },
  container: {
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
