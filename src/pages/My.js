import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class My extends React.PureComponent {
  static navigationOptions = {
    title: '我的',
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>我的</Text>
        <Button
          title="退出登录"
          onPress={() => this.props.navigation.push('Login')}
          color="#437dff"
        />
      </View>
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