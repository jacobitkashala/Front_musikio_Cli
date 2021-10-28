import React from 'react'; //{useState, useEffect}
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import {McVectorIcon} from '../../Components';
import {Colors, Metrics, Images} from '../../Constants';
const Users = ({navigation}) => {
  //   const [selectedMusic, setSelectedMusic] = useState(null);
  //   const [step, setStep] = useState(0);
  //   const [isFavorie, setIsFavorie] = useState(false);
  //   const [srcFavorie, setSrcFavorie] = useState(Images.notFavorie);
  //   // console.log(Images?.one);Images
  //   useEffect(() => {
  //     const {item} = route.params;
  //     setSelectedMusic(item);
  //     // setSrcFavorie(isFavorie ? Images.notFavorie : Images.favorie);
  //   }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Player');
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
        <View style={styles.user}>
          <Image style={styles.imageUser} source={Images.user} />
          <Text style={styles.title}>Nom</Text>
          <Text style={styles.title}>Role</Text>
        </View>
        <View style={styles.compt}>
          <View style={styles.row}>
            <Image style={styles.upload} source={Images.nbrLike} />
            <Text style={styles.title}> : 500K</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.upload} source={Images.musicUploader} />
            <Text style={styles.title}> : 500K</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.upload} source={Images.download} />
            <Text style={styles.title}> : 500K</Text>
          </View>
        </View>
      </View>
      <View style={styles.logout}>
        <Image style={styles.logoutImage} source={Images.logout} />
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
    // alignItems: 'center',
  },
  containerDis: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.black2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
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
    width: 100,
    height: 100,
    // borderRadius: 253 / 2,
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
  logout: {
    left: 0,
    bottom: 0,
  },
});

export default Users;
