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
import {Colors} from '../../Constants';

const Audio = ({navigation, route}) => {
  //{id: 1, image: '/static/media/afficheKOtoss.4633f8b1.jpeg', genre: '1960-1990'}
  const [selectedMusic, setSelectedMusic] = useState(null);
  console.log(selectedMusic);

  useEffect(() => {
    const {item} = route.params;
    setSelectedMusic(item);
  }, []);

  return (
    <Container key={selectedMusic?.id}>
      <StatusBar barStyle="light-content" />
      <View>
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

        <TouchableOpacity
          onPress={() => {
            console.log('bine');
          }}>
          <McVectorIcon
            type="Octicons"
            name="settings"
            color={Colors.primary}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          {/* <ContainerN>
            <Image style={styles.image} source={{uri: selectedMusic?.image}} />
          </ContainerN> */}
        </View>
      </View>
      <Text style={styles.title}> title</Text>
      <Text style={styles.name}> Nom musiciens</Text>
      {/* <SliderSection>
				<Slider
					minimumValue={0}
					maximumValue={1}
					value={0.2}
					minimumTrackTintColor={Colors.primary}
					maximumTrackTintColor={Colors.green100}
					thumbImage={selectedMusic.image}
				>
				</Slider>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={styles.textMinu}>0:17</Text>
					<Text style={styles.textMinu}>2:9</Text>
				</View>
			</SliderSection> */}
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <McVectorIcon
            type="AntDesign"
            name="arrowleft"
            color={Colors.primary}
            size={24}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('bine');
          }}>
          <McVectorIcon
            type="Octicons"
            name="settings"
            color={Colors.primary}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
`;

const HeaderSection = styled.View`
  margin: 12px 24px;
  flex-direction: row;
  justify-content: space-between;
`;

const MusicDetailSection = styled.View`
  margin: 0px 24px;
  justify-content: center;
`;

const ContainerJ = styled.View`
width: 180px,
height: 180px,
borderRadius: 90px,
background-color:gray,
`;

const ContainerN = styled.View`
width: 170,
height: 170,
borderRadius: 85,
background-color:yellow,
`;

const ControlSection = styled.View``;
const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    marginTop: 5,
    borderRadius: 80,
    backgroundColor: 'gray',
  },
  name: {
    fontSize: 25,
    color: '#ffff',
  },
  title: {
    fontSize: 25,
    color: '#ffff',
  },
  textMinu: {
    fontSize: 12,
    color: '#ffff',
  },
  controlSection: {
    margin: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Audio;
