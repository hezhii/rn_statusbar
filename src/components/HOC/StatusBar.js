import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { StatusBar } from 'react-native'

import { isAndroid } from '../../utils/device'

export const setStatusBar = (statusbarProps = {}) => WrappedComponent => {
  class Component extends React.PureComponent {
    constructor(props) {
      super(props)
      this._navListener = props.navigation.addListener('willFocus', this._setStatusBar)
    }

    componentWillUnmount() {
      this._navListener.remove();
    }

    _setStatusBar = () => {
      const {
        barStyle = "dark-content",
        backgroundColor = '#fff',
        translucent = false
      } = statusbarProps
      StatusBar.setBarStyle(barStyle)
      if (isAndroid()) {
        StatusBar.setTranslucent(translucent)
        StatusBar.setBackgroundColor(backgroundColor);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(Component, WrappedComponent);
}