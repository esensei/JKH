import React, { Component } from "react";
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import {
    View,
    Text,
    Switch,
    AsyncStorage,
    Image,
    StyleSheet,
    Button,
    ScrollView,
    TextInput,
    TouchableOpacity
} from "react-native"


const url = "http://borolis.party/logout.php"
const url_info = "http://borolis.party/aboutme.php"

class AddNavigator extends React.Component {
  constructor(props){
     super(props);

     this.state = {
       data: [],
       first_name: '',
       second_name: '',
       address: '',
       floor_number: '',
       apartment_number: '',
       entrance_number: '',
       username: '',
       company_address: '',
       owner_first_name: '',
       owner_second_name: '',
       owner_patronymic: '',
       company_name: '',
       phone_number: ''
     }
  }
  componentWillMount = async () => {
    userToken = await AsyncStorage.getItem('apitoken')
    const response = await fetch(url_info, {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
      body: JSON.stringify({apitoken: userToken })
      })
      const result = await response.json();
      console.log(result);
      this.setState({first_name: result.info.first_name, second_name: result.info.second_name, patronymic: result.info.patronymic,
      address: result.houses[0].address, entrance_number: result.info.addresses.all[0].entrance_number,
      apartment_number: result.info.addresses.all[0].apartment_number, floor_number: result.info.addresses.all[0].floor_number,
      username: result.info.username,
      company_name: result.management_company.name, company_address: result.management_company.address, phone_number: result.management_company.phone_number,
      owner_first_name: result.management_company.owner_first_name, owner_second_name: result.management_company.owner_second_name, owner_patronymic: result.management_company.owner_patronymic })
  }

  onButtonLogout  = async () =>  {
    console.log('kek');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
      body: JSON.stringify({apitoken: await AsyncStorage.getItem('apitoken')})
      })
      this.props.navigation.navigate("Login")

    }
  render () {
    const {h1,h2,h3, circle, pushCont, h1_logout, container, context, linearGradient} = styles
    return(
    <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
      <ScrollView>
      <View style={circle}>
       <Text style={h1}>Мой аккаунт </Text>
       <Text style={h2}>Ф.И.О.</Text>
       <Text style={h3}>{this.state.first_name} {this.state.second_name} {"\n"}{this.state.patronymic}</Text>
       <Text style={h2}>Адрес</Text>
       <Text style={h3}>{this.state.address}</Text>
       <View style={container}>
        <View style={context}>
         <Text style={h2}>Подъезд</Text>
         <Text style={h3}>{this.state.entrance_number}</Text>
        </View>
        <View style={context}>
         <Text style={h2}>Квартира</Text>
         <Text style={h3}>{this.state.apartment_number}</Text>
        </View>
        <View>
         <Text style={h2}>Этаж</Text>
         <Text style={h3}>{this.state.floor_number}</Text>
        </View>
       </View>
       <Text style={h2}>Логин</Text>
       <Text style={h3}>{this.state.username}</Text>
      </View>

      <View style={circle}>
        <Text style={h1}>Настройки</Text>
        <View style={pushCont}>
          <Text style={h3}>PUSH-уведомления</Text>
          <Switch value={this.state.value}    thumbColor={"rgba(82,130,240,1)"} />
        </View>
      </View>

      <View style={circle}>
        <Text style={h1}>Мой УК</Text>
        <Text style={h2}>Название</Text>
        <Text style={h3}>{this.state.company_name}</Text>
        <Text style={h2}>Руководитель</Text>
        <Text style={h3}>{this.state.owner_first_name} {this.state.owner_second_name} {"\n"}{this.state.owner_patronymic}</Text>
        <Text style={h2}>Фактический адрес</Text>
        <Text style={h3}>{this.state.company_address}</Text>
        <Text style={h2}>Телефон</Text>
        <Text style={h3}>{this.state.phone_number}</Text>
      </View>

      <View style={circle}>
        <Text onPress={this.onButtonLogout} style={h1_logout}>Выход</Text>
      </View>

      </ScrollView>
    </LinearGradient>
  )
  }
}

export default AddNavigator

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    switch:{
    },

    pushCont:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      marginTop: 12,
    },

    h1: {
      fontSize: 18,
      color: 'rgba(82,130,240,1)'
    },

    h1_logout: {
      fontSize: 18,
      color: 'red'
    },

    h2:{
      paddingTop: 12,
      color: 'grey',
      fontSize: 16,
    },

    h3:{
      fontSize: 16,
    },

    linearGradient: {
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 50,
    },

    circle: {
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      marginBottom: 20,
      flex: 0,
      borderRadius: 13,
      backgroundColor: 'rgba(255,255,255,1)'
    }
  })
