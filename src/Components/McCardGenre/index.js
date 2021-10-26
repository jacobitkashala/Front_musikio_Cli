import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import { Metrics } from 'Constants';

const McCardGenre = ({data, navigation}) => {
  const {item} = data;
  const toAudio = () => {
    navigation.navigate('Audio', {selected: item});
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} onClick={toAudio} />
      <Text style={styles.textGenre}>{item.genre}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 150,
    margin: 2,
    flexDirection: 'column',
    // gap: "14px",
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    // cursor: 'pointer'
  },
  textGenre: {
    color: '#F5C108',
  },
  text: {
    color: '#fff',
  },
});

export default McCardGenre;
