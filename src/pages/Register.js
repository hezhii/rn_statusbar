import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'

export default class Login extends React.PureComponent {
  static navigationOptions = {
    title: '注册',
    headerStyle: {
      backgroundColor: 'red'
    }
  }

  render() {
    return (
      <View style={styles.fill}>
        <StatusBar translucent={false} backgroundColor='red' barStyle="light-content" />
        <Text style={styles.text}>注册页面</Text>
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