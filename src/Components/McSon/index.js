import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  //   TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {Images} from '../../Constants';

const McSon = ({son}) => {
  const {id, image, title, autor, mode} = son;
  const choseImage = mode === 'gratuit' ? Images.gratuit : Images.payant;

  return (
    <View style={styles.container} key={id}>
      <Image style={styles.imageSon} source={image} />
      <View style={styles.containerInfo}>
        <Text style={styles.non}>{title}</Text>
        <View style={styles.modeTitle}>
          <Image style={styles.imageMode} source={choseImage} />
          <Text style={styles.title}>{autor}</Text>
        </View>
      </View>
      <Image style={styles.imageUpload} source={Images.telechargement} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: 129,
    // height: 58,
    margin: 1,
    // borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  imageSon: {
    width: 120,
    height: 120,
    margin: 2,
  },
  containerInfo: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  modeTitle: {
    flexDirection: 'row',
    // height: 150,
  },
  imageMode: {
    width: 81,
    height: 33,
  },
  non: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: '600',
  },
  title: {
    color: '#ffff',
    fontSize: 20,
    // fontWeight: '600',
  },
  imageUpload: {
    width: 50,
    height: 50,
  },
});

export default McSon;
