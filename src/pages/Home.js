import React from 'react'
import { StyleSheet, View, ImageBackground, Button } from 'react-native'

import Header from '../components/Header'

export default class Home extends React.PureComponent {
  static navigationOptions = {
    title: '主页'
  }

  render() {
    return (
      <View style={styles.fill}>
        <ImageBackground style={styles.bg} source={require('../assets/imgs/bg.png')}>
          <Header title="主页" />
        </ImageBackground>
        <View style={styles.buttonWrapper}>
          <Button
            title="退出登录"
            onPress={() => this.props.navigation.push('Login')}
            color="#437dff"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  bg: {
    height: 234,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#437dff',
    textAlign: 'center'
  },
  buttonWrapper: {
    padding: 16
  }
})