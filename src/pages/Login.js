import React from 'react'
import { StyleSheet, View, StatusBar, Button } from 'react-native'

import { isAndroid } from '../utils/device'

export default class Login extends React.PureComponent {
  static navigationOptions = {
    title: '登录',
  }

  constructor(props) {
    super(props)
    this._navListener = props.navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('dark-content');
      isAndroid() && StatusBar.setBackgroundColor('#fff');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }


  render() {
    return (
      <View style={styles.fill}>
        <StatusBar translucent={false} backgroundColor='#fff' barStyle="dark-content" />
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