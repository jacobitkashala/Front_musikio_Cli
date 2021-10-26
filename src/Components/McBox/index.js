import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const McBox = ({data}) => {
  const {image} = data;
  console.log(data);
  return (
    <View style={styles.menuItem}>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    width: '30%',
    height: '30%',
    backgroundColor: 'red',
    // padding: 28,
    margin: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
    borderRadius: 1,
  },
});
export default McBox;
