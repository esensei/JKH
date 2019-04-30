import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import ImageCard from '../components/ImageCard'

export default class menuTemp2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Пицца Винченцо фирменная'
    }
  }
  onClickNavigate = (name, image) => {
    this.props.navigation.navigate('detailTemp2', {name, image})
  }
  render() {
    const {h1, container, subContainer, lineStyle} = styles
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('secondTemp1')} style={container}>
          <View style={{flex: 1}}>
            <Image style={{height: 20, width: 10}} source={require('../images/cardTapFlip.png')} />
          </View>
          <View style={subContainer}>
            <Text style={h1}>Пицца</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <View onPress={() => console.log('kek')}>
            <ImageCard onClick={this.onClickNavigate} text={'Пицца Винченцо фирменная'} />
          </View>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20
  },
  subContainer: {
    flex: 20,
    justifyContent: 'center'
  }
})
