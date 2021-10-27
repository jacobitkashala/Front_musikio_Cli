/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import {McVectorIcon} from '../../Components';
import {Colors, Metrics, Images} from '../../Constants';
// ,
//   Images.favorie,
//   ,
//   ,
//   ,
//   ,

const Audio = ({navigation, route}) => {
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [step, setStep] = useState(0);
  const [isFavorie, setIsFavorie] = useState(false);
  const [srcFavorie, setSrcFavorie] = useState(Images.notFavorie);
  // console.log(Images?.one);Images
  useEffect(() => {
    const {item} = route.params;
    setSelectedMusic(item);
    // setSrcFavorie(isFavorie ? Images.notFavorie : Images.favorie);
  }, []);

  return (
    <Container key={selectedMusic?.id}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <McVectorIcon
            type="AntDesign"
            name="arrowleft"
            color={Colors.primary}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerDis}>
        <View style={styles.rondJaun}>
          <View style={styles.rondBlanck1}>
            <Image style={styles.image} source={selectedMusic?.image} />
          </View>
        </View>
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.title}>Nom Group</Text>
        <Text style={styles.name}>{selectedMusic?.genre} </Text>
        <TouchableOpacity
          onPress={() => {
            setIsFavorie(prev => !prev);
            console.log(isFavorie);
          }}>
          <Image source={srcFavorie} />
        </TouchableOpacity>
      </View>
      <View style={styles.minutes}>
        <Text style={styles.title}>{step}</Text>
        <Text style={styles.name}>2:15 </Text>
      </View>
      <View style={styles.slider}>
        <Slider
          onSlidingStart={() => {
            console.log('recuper curser');
          }}
          onSlidingComplete={value => {
            setStep(value);
            console.log('la valeur est :', value);
          }}
          onValueChange={value => {
            console.log('bien actuell', value);
          }}
          style={styles.height4}
          minimumValue={0}
          maximumValue={1}
          value={0.3}
          thumbTintColor={Colors.yellow}
          minimumTrackTintColor={Colors.black50}
          maximumTrackTintColor={Colors.yellow}
          // thumbImage={selectedMusic?.image}
        />
      </View>
      <View style={styles.controlerBttons}>
        <Image style={styles.one} source={Images?.one} />
        <Image style={styles.two} source={Images?.prev} />
        <Image style={styles.lecteur} source={Images?.lecteur} />
        <Image style={styles.two} source={Images?.next} />
        <Image style={styles.one} source={Images?.partage} />
      </View>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
`;

const styles = StyleSheet.create({
  header: {
    Width: Metrics.s20,
    Height: Metrics.s20,
    margin: Metrics.s10,
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: Colors.black2,
    // alignItems: 'center',
  },
  containerDis: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  height4: {height: 4},
  rondJaun: {
    backgroundColor: Colors.yellow,
    width: 302,
    height: 302,
    borderRadius: 302 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rondBlanck1: {
    backgroundColor: Colors.black1,
    width: 290,
    height: 290,
    borderRadius: 290 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 253,
    height: 253,
    borderRadius: 253 / 2,
    backgroundColor: 'gray',
  },
  containerInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.s10,
  },
  name: {
    // marginTop: 25,
    fontSize: 30,
    color: Colors.green1,
  },
  title: {
    // marginTop: 25,
    fontSize: 25,
    color: Colors.white,
  },
  minutes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    margin: 0,
  },
  textMinu: {
    fontSize: 12,
    color: '#ffff',
  },
  controlerBttons: {
    marginTop: Metrics.s10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  one: {
    width: 37,
    height: 37,
  },
  two: {
    width: 36,
    height: 36,
  },
  lecteur: {
    width: 75,
    height: 75,
  },
});

export default Audio;
