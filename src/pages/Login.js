import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default class Login extends React.PureComponent {
  static navigationOptions = {
    title: '登录',
  }

  render() {
    return (
      <Text style={styles.text}>登录</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#437dff',
    textAlign: 'center'
  }
})