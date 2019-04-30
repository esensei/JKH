import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import CheckBox from 'react-native-check-box'
import RNPickerSelect from 'react-native-picker-select'
import DateTimePicker from 'react-native-modal-datetime-picker'
import CountSelector from '../components/CountSelector'
import PaySelector from '../components/PaySelector'

const width = Dimensions.get('window').width //full width
const height = Dimensions.get('window').height //full height

class GetWater extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: {},
      placeholder_color: 'rgb(201,201,206)',
      data: 'Выберите дату',
      date_now: new Date(),
      time: 'Выберите время',
      isPompa: false,
      date: false,
      count: 1,
      cost: 0,
      formsPay: null,
      isCooler: false,
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
      isDatePickerVisible: false,
      isTimePickerVisible: false,
      favSport0: 0,
      favSport1: undefined
    }
    this._handleDatePicked.bind(this)
  }

  componentWillMount = () => {
    const json = this.props.screenProps
    const {countSelectors, additionals} = json.createOrderFields
    const arr = new Array(countSelectors.length)
    const add = new Array(additionals.length)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = {name: null, cost: '0', quantity: 1}
    }
    for (let i = 0; i < add.length; i++) {
      add[i] = {name: null, cost: 0, quantity: 1, checked: false}
    }
    const full = {fullCost: null, deliveryDate: null, products: arr}
    console.log(full)
    this.setState({order: full, additionals: add })
  }
  onClickMinus = (value) => {
    const new_state = Object.assign({}, this.state.order.products)
    if (new_state[value].quantity === 0) return
    new_state[value].quantity -= 1
    this.setState({count: this.state.count - 1,
      order: Object.assign({}, this.state.order, {products: new_state})
    })
  }
  onClickPlus = (value) => {
    const new_state = Object.assign({}, this.state.order.products)
    new_state[value].quantity += 1
    this.setState({count: this.state.count + 1,
      order: Object.assign({}, this.state.order, {products: new_state})
    })
  }
  _showDateTimePicker = () => this.setState({ isDatePickerVisible: true })
  _hideDatePicker = () => this.setState({ isDatePickerVisible: false })
  _handleDatePicked = (date) => {
    const dat = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
    this.setState({data: dat,
      placeholder_color: 'black',
      order: Object.assign({}, this.state.order, {deliveryDate: dat})
    })
    this._hideDatePicker()
  }
   updateCost = () => {
     let count = 0
     this.state.additionals.forEach((value) => {
       value.checked ?
       count += value.cost
       : null
     })
     let arr = Object.assign([], this.state.order.products)
     arr.forEach((value) => {
       count += Number(value.cost) * Number(value.quantity)
     })
     // this.setState({cost: count})
     return count
   }

   additionalToJSON = () => {
     const result = []
     this.state.additionals.forEach((value) => {
     value.checked ?
         result.push({name : value.name, cost: value.cost, quantity : value.quantity})
         : null
     })
     return (result)
   }

  returnOnServer = () => {
    const addit = this.additionalToJSON()
    const new_state = Object.assign([], this.state.order.products)
    let con = new_state.concat(addit)
    this.setState({
        order:  Object.assign({}, this.state.order, {fullCost: this.updateCost(), products: con})
    }, () => {console.log(this.state.order)
      this.componentWillMount()
    }
    )}

  render() {
    const json = this.props.screenProps
    const {h2, h3, orderText, placeContainer, orderButton, orderContainer, dataPicker, pickerContainer} = styles
    return (
      <View>
        <View style={pickerContainer}>
          {json.createOrderFields.date &&
          <View style={placeContainer}>
            <Text style={h2}>Дата доставки</Text>
            <TouchableOpacity style={dataPicker} onPress={this._showDateTimePicker}>
              <Text style={[h3, {color: this.state.placeholder_color}]}>{this.state.data}</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDatePickerVisible}
              onConfirm={this._handleDatePicked}
              minimumDate={this.state.date_now}
              onCancel={this._hideDatePicker}
              mode={'datetime'}
            />
          </View>
          }
          {json.createOrderFields.pickers.map((source, key) =>
            (<View key={key} style={placeContainer}>
              <Text style={h2}>{source.title}</Text>
              <RNPickerSelect
                placeholder={{
                  label: source.placeholder,
                  value: 0,
                  color: 'black'}}
                items={source.list}
                onValueChange={(value, index) => {
                  const new_state = Object.assign({}, this.state.order.products)
                  new_state[source.id].cost = value
                  new_state[source.id].name = `${source.name} ${index === 0 ? null : source.list[index - 1].label}`
                  this.setState({
                    order: Object.assign({}, this.state.order, {products: new_state})
                  })
                }}
                style={styles}
                value={this.state.order.products[source.id].cost}
              />
            </View>
            ))}
          {json.createOrderFields.countSelectors.map((value, key) => (
            <View key={key} style={placeContainer}>
              <CountSelector name={value.title} count={this.state.order.products[value.pickerID].quantity} onClickMinus={() => this.onClickMinus(value.pickerID)} onClickPlus={() => this.onClickPlus(value.pickerID)} />
            </View>
          ))}
          <View style={placeContainer}>
            <PaySelector text={'Оплата'} formsPay={this.state.formsPay} setPayout={value => this.setState({order: Object.assign({}, this.state.order, {payMethod: value}) })} />
          </View>
        </View>
        <View>
          <Text style={h2}>Дополнительные услуги</Text>
          {json.createOrderFields.additionals.map((value, key) =>
            (<CheckBox
              key={key}
              style={{ padding: 10}}
              onClick={() => {
                const { additionals } = Object.assign({}, this.state)
                additionals[key].checked = !additionals[key].checked
                additionals[key].cost = Number(value.cost)
                additionals[key].name = value.name

                this.setState(
                  {additionals}
                )
              }}
              isChecked={this.state.additionals[key].checked}
              rightTextView={<Text style={{marginLeft: 10, fontSize: 16, color: 'rgba(52,52,52,1)'}}>{value.title} <Text style={{color: 'grey'}}>+ {value.cost}р.</Text></Text>}
              checkBoxColor={'rgba(82,130,240,1)'}
            />)
          )}
        </View>
        <View>
          <Text style={h2}>К оплате</Text>
          <Text style={h3}>{this.updateCost()}р.</Text>
        </View>
        <View style={orderContainer}>
          <TouchableOpacity onPress={() => { this.returnOnServer() }} style={orderButton}>
            <Text style={orderText}>Заказать</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default GetWater

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    paddingTop: 60
  },
  orderContainer: {

    marginTop: 30,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 0.09 * width
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
  header: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 15,
    fontSize: 18
  },
  dataPicker: {
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
    width: width * 0.448,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(82,130,240,1)'
  },
  h2: {
    paddingTop: 12,
    paddingBottom: 5,
    color: 'grey',
    fontSize: 16
  },

  h3: {
    fontSize: 16
  },

  container: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    height
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
  inputIOS: {
    color: 'black',
    alignSelf: 'stretch',
    width: width * 0.448,
    fontSize: 16,
    paddingVertical: 12,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(82,130,240,1)',
    borderRadius: 4,
    paddingRight: 30
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(82,130,240,1)',
    borderRadius: 8,
    color: '#9EA0A4',
    paddingRight: 30
  }
})
