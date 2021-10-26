import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import { Metrics } from 'Constants';

const McCardGenre = ({data, navigation}) => {
  const {item, id} = data;
  // console.log(data);
  return (
    <View style={styles.container} key={id}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Audio', {selected: item});
        }}>
        <Image style={styles.image} source={item.image} />
      </TouchableOpacity>
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
  },
  textGenre: {
    color: '#F5C108',
  },
  text: {
    color: '#fff',
  },
});

export default McCardGenre;
