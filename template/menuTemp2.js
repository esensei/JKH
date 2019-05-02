import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import ImageCard from '../components/ImageCard'

class menuTemp2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Пицца Винченцо фирменная'
    }
  }
  onClickNavigate = (name, image, id) => {
    const items = this.props.items
    this.props.navigation.navigate('detailTemp2', {name, image, id, items})
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
          {this.props.items.map((value, key) => (
            <View key={key}>
              <ImageCard id={value.id} onClick={this.onClickNavigate} text={value.title} />
            </View>
          ))}

        </ScrollView>
      </View>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    items: state.menu.data.menu[ownProps.navigation.state.params.id].products
  }
}


export default connect(mapStateToProps)(menuTemp2)

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
