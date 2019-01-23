import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 24,
  },
});

export default ({ routeName, focused }) => {
  const images = {
    Home: focused
      ? require('../../assets/icons/home_fill.png')
      : require('../../assets/icons/home.png'),
    My: focused
      ? require('../../assets/icons/my_fill.png')
      : require('../../assets/icons/my.png'),
  };
  return (
    <Image style={styles.image} source={images[routeName]} resizeMode="contain" />
  );
}
