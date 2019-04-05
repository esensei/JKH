import React from 'react'
import {createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import {View, Text, StyleSheet} from 'react-native'

import SecondActivity from '../screens/SecondActivity'
import GetWater from '../screens/GetWater'
import DetailsOrder from './DetailsOrder'

const HeadNavigator = createMaterialTopTabNavigator({
  Заказ: {
    screen: GetWater,
    navigationOptions: {
      tabBarLabel: ({focused}) => (
        focused
          ? <View style={styles.headButtonFocusedLeft}>
            <Text style={{textAlign: 'center', color: 'white'}}>Заказ</Text>
          </View>
          : <View style={styles.headButtonUnFocusedLeft}>
            <Text style={{textAlign: 'center', color: 'rgba(82,130,240,1)'}}>Заказ</Text>
          </View>
      )
    }
  },
  Заказ2: {
    screen: createStackNavigator({
      SecondActivity: {screen: SecondActivity,
        navigationOptions: {
          header: () => null
        }},

      DetailsOrder: {screen: DetailsOrder,
        navigationOptions: {
          header: () => null
        }}
    }),
    initialRouteName: 'SecondActivity',
    navigationOptions: {
      tabBarLabel: ({focused}) => (
        focused
          ? <View style={styles.headButtonFocusedRight}>
            <Text style={{textAlign: 'center', color: 'white'}}>Мои заказы</Text>
          </View>
          : <View style={styles.headButtonUnFocusedRight}>
            <Text style={{textAlign: 'center', color: 'rgba(82,130,240,1)'}}>Мои заказы</Text>
          </View>
      )
    }
  }

}, {
  tabBarOptions: {
    tabStyle: {
      padding: 0,
      paddingTop: 20,
      margin: 0,
      paddingBottom: 13
    },
    style: {
      backgroundColor: '#fff',
      borderWidth: 0
    },
    indicatorStyle: {
      width: 0,
      backgroundColor: 'white'
    }
  }

})

const styles = StyleSheet.create({
  headButtonFocusedLeft: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    flex: 1,
    alignSelf: 'stretch',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: 'rgba(82,130,240,1)',
    backgroundColor: 'rgba(82,130,240,1)',
    borderWidth: 1
  },
  headButtonFocusedRight: {
    alignSelf: 'stretch',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 20,
    flex: 1,
    borderColor: 'rgba(82,130,240,1)',
    backgroundColor: 'rgba(82,130,240,1)',
    borderWidth: 1
  },
  headButtonUnFocusedLeft: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    padding: 30,
    flex: 1,
    alignSelf: 'stretch',
    borderColor: 'rgba(82,130,240,1)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1
  },

  headButtonUnFocusedRight: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    padding: 30,
    flex: 1,
    alignSelf: 'stretch',
    borderColor: 'rgba(82,130,240,1)',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1
  }
})

export default createAppContainer(HeadNavigator)
