import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  //   TouchableWithoutFeedback,
  Text,
  //   Image,
  StyleSheet,
} from 'react-native';
import {colorsSwitch} from '../../Constants';
const McGenre = ({data}) => {
  const {item} = data;
  const color = colorsSwitch(item.title.toLowerCase());

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.textGenre}>{item.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 129,
    height: 58,
    margin: 2,
    borderRadius: 5,
    flexDirection: 'column',
    Items: 'center',
    justifyContent: 'center',
  },
  textGenre: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default McGenre;
