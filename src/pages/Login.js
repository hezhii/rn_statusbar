import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Login extends React.PureComponent {
  static navigationOptions = {
    title: '登录',
  }

  render() {
    return (
      <View style={styles.fill}>
        <Text style={styles.text}>登录页面</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  text: {
    marginTop: 32,
    fontSize: 20,
    fontWeight: '500',
    color: '#437dff',
    textAlign: 'center'
  }
})