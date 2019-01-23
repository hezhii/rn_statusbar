import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

import Header from '../components/Header'

export default class My extends React.PureComponent {
  static navigationOptions = {
    title: '我的',
  }

  render() {
    return (
      <View style={styles.fill}>
        <Header title="我的" style={styles.header} />
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
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#437dff',
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#437dff',
  },
  buttonWrapper: {
    padding: 16
  }
})