import React from 'react'
import {createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import {View, Text, StyleSheet} from 'react-native'

import secondTemp1 from '../template/secondTemp1'
import secondTemp2 from '../template/secondTemp2'
import secondTemp3 from '../template/secondTemp3'
import menuTemp2 from '../template/menuTemp2'
import detailTemp2 from '../template/detailTemp2'

const HeadNavigator2 = createMaterialTopTabNavigator({
  Заказ: {
    screen: createStackNavigator({
      secondTemp1: {screen: secondTemp1,
        navigationOptions: {
          header: () => null
        }},

      menuTemp2: {screen: menuTemp2,
        navigationOptions: {
          header: () => null
        }},
      detailTemp2: {screen: detailTemp2,
        navigationOptions: {
          header: () => null
        }}
    }),
    navigationOptions: {
      tabBarLabel: ({focused}) => (
        focused
          ? <View style={styles.headButtonFocusedLeft}>
            <Text style={{textAlign: 'center', color: 'white'}}>Каталог</Text>
          </View>
          : <View style={styles.headButtonUnFocusedLeft}>
            <Text style={{textAlign: 'center', color: 'rgba(82,130,240,1)'}}>Каталог</Text>
          </View>
      )
    }
  },
  Заказ2: {
    screen: secondTemp2,
    initialRouteName: 'secondTemp2',
    navigationOptions: {
      tabBarLabel: ({focused}) => (
        focused
          ? <View style={styles.headButtonFocusedCenter}>
            <Text style={{textAlign: 'center', color: 'white'}}>Заказ</Text>
          </View>
          : <View style={styles.headButtonUnFocusedCenter}>
            <Text style={{textAlign: 'center', color: 'rgba(82,130,240,1)'}}>Заказ</Text>
          </View>
      )
    }
  },

  Заказ3: {
    screen: secondTemp3,
    initialRouteName: 'secondTemp3',
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
  lazy: true,
  tabBarOptions: {
    tabStyle: {
      padding: 0,
      paddingTop: 10,
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
    paddingHorizontal: 10,
    flex: 1,
    alignSelf: 'stretch',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: 'rgba(82,130,240,1)',
    backgroundColor: 'rgba(82,130,240,1)',
    borderWidth: 1
  },
  headButtonFocusedCenter: {
    alignSelf: 'stretch',
    paddingVertical: 7,
    paddingHorizontal: 10,
    flex: 1,
    borderColor: 'rgba(82,130,240,1)',
    backgroundColor: 'rgba(82,130,240,1)',
    borderWidth: 1
  },
  headButtonFocusedRight: {
    alignSelf: 'stretch',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 10,
    flex: 1,
    borderColor: 'rgba(82,130,240,1)',
    backgroundColor: 'rgba(82,130,240,1)',
    borderWidth: 1
  },
  headButtonUnFocusedLeft: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    padding: 30,
    flex: 1,
    alignSelf: 'stretch',
    borderColor: 'rgba(82,130,240,1)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1
  },
  headButtonUnFocusedCenter: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    padding: 30,
    flex: 1,
    alignSelf: 'stretch',
    borderColor: 'rgba(82,130,240,1)',
    backgroundColor: 'white',
    borderWidth: 1
  },
  headButtonUnFocusedRight: {
    paddingVertical: 7,
    paddingHorizontal: 10,
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

export default createAppContainer(HeadNavigator2)
