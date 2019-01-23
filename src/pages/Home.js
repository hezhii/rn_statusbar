import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default class Home extends React.PureComponent {
  static navigationOptions = {
    title: '主页'
  }

  render() {
    return (
      <Text style={styles.text}>主页</Text>
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