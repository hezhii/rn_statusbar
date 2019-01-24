import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

import { setStatusBar } from '../components/HOC/StatusBar'

@setStatusBar()
export default class Login extends React.PureComponent {
  static navigationOptions = {
    title: '登录',
  }

  render() {
    return (
      <View style={styles.fill}>
        <View style={styles.buttonWrapper}>
          <Button
            title="点击注册"
            onPress={() => this.props.navigation.push('Register')}
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
  buttonWrapper: {
    padding: 16
  }
})