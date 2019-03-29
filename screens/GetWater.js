import React, { Component } from "react";
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import {
    View,
    Text,
    Switch,
    AsyncStorage,
    Picker,
    Image,
    StyleSheet,
    Button,
    ScrollView,
    TextInput,
    TouchableOpacity
} from "react-native"
import { Dimensions } from "react-native";
import CheckBox from 'react-native-check-box'
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from 'react-native-modal-datetime-picker';
import CountSelector from '../components/CountSelector'
import PaySelector from '../components/PaySelector';

const fields = [
  {
    label: '3л',
    value: '3л',
  },
  {
    label: '5л',
    value: '5л',
  },
  {
    label: '19л',
    value: '19л',
  },
];


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class GetWater extends React.Component {
  constructor(props){
     super(props);

         this.state = {
           placeholder_color: 'rgb(201,201,206)',
           data: 'Выберите дату',
           date_now: new Date(),
           time: 'Выберите время',
           isPompa: false,
           count: 0,
           formsPay: null,
           isCooler: false,
           timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
           isDatePickerVisible: false,
           isTimePickerVisible: false,
           favSport0: undefined,
           favSport1: undefined
         };
  }
  _showDateTimePicker = () => this.setState({ isDatePickerVisible: true });
  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });
  _handleDatePicked = (date) => {
    let dat = date.getDate() + '.'+ (date.getMonth() + 1) + '.' + date.getFullYear();
    this.setState({data: dat,
      placeholder_color: 'black'
    })
    this._hideDatePicker();
  }

  onClickMinus = () => {
    this.setState({count: (this.state.count===0)? this.state.count :this.state.count - 1})
  }
  onClickPlus = () => {
    this.setState({count: this.state.count + 1})
  }

  render () {
    const placeholder = {
         label: 'Выберите объем',
         value: null,
         color: 'black'
       };
    const {h2, h3, header, headerText, buttonTextOther, orderText, orderButton, orderContainer, buttonTextCenter, countButton, countButtonMinus, countButtonPlus, countButtonCenter, linearGradient, dataPicker, container,placeContainer, pickerContainer} = styles
    return(
      <View>
        <View style={pickerContainer}>
          <View style={placeContainer}>
            <Text style={h2}>Дата доставки</Text>
            <TouchableOpacity style={dataPicker} onPress={this._showDateTimePicker}>
              <Text  style={[h3,{color:this.state.placeholder_color}]}>{this.state.data}</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDatePickerVisible}
              onConfirm={this._handleDatePicked}
              minimumDate ={this.state.date_now}
              onCancel={this._hideDatePicker}
              mode={'datetime'}
          />
          </View>
          <View style={{flexGrow: 0.1}}>
          </View>
          <View style={placeContainer}>
            <Text style={h2}>Объем бутылей</Text>
            <RNPickerSelect
              placeholder={placeholder}
              items={fields}
              onValueChange={value => {
                this.setState({
                  favSport0: value
                    });
                  }}

              style={styles}

              value={this.state.favSport0}

            />

          </View>
        </View>
        <View>
          <Text style={h2}>Дополнительные услуги</Text>
          <CheckBox
              style={{ padding: 10}}
              onClick={()=>{
                this.setState({
                    isPompa:!this.state.isPompa
                })
              }}
              isChecked={this.state.isPompa}
              rightTextView={<Text style={{marginLeft: 10, fontSize: 16,color: 'rgba(52,52,52,1)'}}>Помпа <Text style={{color: 'grey'}}>+ 1 500р.</Text></Text>}
              checkBoxColor={'rgba(82,130,240,1)'}
          />
          <CheckBox
              style={{ padding: 10}}
              onClick={()=>{
                this.setState({
                    isCooler:!this.state.isCooler
                })
              }}
              isChecked={this.state.isCooler}
              rightTextView={<Text style={{marginLeft: 10, fontSize: 16,color: 'rgba(52,52,52,1)'}}>Куллер <Text style={{color: 'grey'}}>+ 13 000р.</Text></Text>}
              checkBoxColor={'rgba(82,130,240,1)'}
              rightTextStyle={{color:'rgba(52,52,52,1)'}}
          />
        </View>
        <View style={pickerContainer}>
          <View style={placeContainer}>
            <CountSelector name={'Количество бутылей'} count={this.state.count} onClickMinus={this.onClickMinus} onClickPlus={this.onClickPlus}></CountSelector>
          </View>
          <View style={{flexGrow: 0.1}}/>
          <View style={placeContainer}>
            <PaySelector text={"Оплата"}formsPay={this.state.formsPay} setPayout={value => {this.setState({formsPay: value})}}/>
          </View>
        </View>
        <View>
          <Text style={h2}>К оплате</Text>
          <Text style={h3}>0 р.</Text>
        </View>
        <View style={orderContainer}>
          <TouchableOpacity style={orderButton}>
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
    paddingTop: 60,
  },
  orderContainer:{
    marginTop: 30,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 38,
    paddingRight: 38
  },
  orderButton:{
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(82,130,240,1)'
  },
  orderText:{
    alignSelf: 'center',
    fontSize: 14,
    color: 'white'
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText:{
    textAlign: 'center',
    color:'white',
    marginBottom: 15,
    fontSize: 18
  },
  dataPicker:{
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(82,130,240,1)',
  },
  h2:{
    paddingTop: 12,
    paddingBottom: 5,
    color: 'grey',
    fontSize: 16,
  },

  h3:{
    fontSize: 16,
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

    height: height,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  placeContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between'

  },
  inputIOS: {
    color: 'black',
    alignSelf:'stretch',
    fontSize: 16,
    paddingVertical: 12,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(82,130,240,1)',
    borderRadius: 4,

    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(82,130,240,1)',
    borderRadius: 8,
    color: '#9EA0A4',
    paddingRight: 30,
  }
});
