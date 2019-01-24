/**
 * 全屏页面中使用的 Header 组件。非全屏页面使用 react-nativetion 的 Header 即可。
 * 
 * 组件会根据当前运行的环境调整高度，考虑了状态栏。
 */

import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { isiOS, isiPhoneX } from '../../utils/device'

const STATUS_BAR_HEIGHT = isiOS() ? (isiPhoneX() ? 34 : 20) : StatusBar.currentHeight
const HEADER_HEIGHT = 44

const Header = ({ title, left, right, color = '#fff', style }) => {
  const headerStyle = [
    styles.header,
    {
      height: STATUS_BAR_HEIGHT + HEADER_HEIGHT,
      paddingTop: STATUS_BAR_HEIGHT
    },
    style
  ]

  return (
    <View style={headerStyle}>
      <View style={styles.left}>
        {left}
      </View>
      <Text style={[styles.title, { color }]}>{title}</Text>
      <View style={styles.right}>
        {right}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    flex: 2,
    fontSize: 17,
    textAlign: 'center',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;