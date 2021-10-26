import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  StyleSheet,
  View,
  // StatusBar,
  TextInput,
  FlatList,
} from 'react-native';
import {Images, Colors, Metrics} from '../../Constants';
import {McCardGenre, McGenre, McBox, McVectorIcon} from '../../Components';

const Genres = [
  {
    id: 1,
    title: 'Reguer',
  },
  {
    id: 2,
    title: 'AfroCongo',
  },
  {
    id: 3,
    title: 'Gospel',
  },
  {
    id: 4,
    title: 'Salsa',
  },
];
const cardData = [
  {
    id: 1,
    image: Images.fallytokoss,
    genre: '1960-1990',
  },
  {
    id: 2,
    image: Images.ferre,
    genre: 'romatique',
  },
  {
    id: 3,
    image: Images.congo60,
    genre: 'Motivation',
  },
  {
    id: 4,
    image: Images.michel,
    genre: 'Motivation',
  },
];
const playList = [
  {
    id: 1,
    image: Images.fallytokoss,
    genre: '1960-1990',
  },
  {
    id: 2,
    image: Images.ferre,
    genre: 'romatique',
  },
  {
    id: 3,
    image: Images.congo60,
    genre: 'Motivation',
  },
  {
    id: 4,
    image: Images.michel,
    genre: 'Motivation',
  },
  {
    id: 5,
    image: Images.michel,
    genre: 'Motivation',
  },
  {
    id: 6,
    image: Images.michel,
    genre: 'Motivation',
  },
  {
    id: 7,
    image: Images.michel,
    genre: 'Motivation',
  },
  {
    id: 8,
    image: Images.michel,
    genre: 'Motivation',
  },
  {
    id: 9,
    image: Images.michel,
    genre: 'Motivation',
  },
];

const Player = ({navigation}) => {
  const size = 50;

  return (
    <Container>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.textColorActiv}> Chansons </Text>
          <Text style={styles.textColorPrimary}> Tendance </Text>
        </View>
        <View style={styles.headerContent}>
          <McVectorIcon
            type="AntDesign"
            name="setting"
            color={Colors.primary}
            size={size}
          />
          <McVectorIcon
            type="MaterialIcons"
            name="notifications-none"
            color={Colors.primary}
            size={size}
          />
        </View>
      </View>
      <View style={styles.searchSection}>
        <McVectorIcon
          type="EvilIcons"
          name="search"
          color={Colors.primary}
          size={24}
          style={styles.search}
        />
        <TextInput
          placeholder="Recherche .. .. .."
          placeholderTextColor={Colors.primary}
          style={styles.textInput}
        />
      </View>
      <View>
        <FlatList
          data={cardData}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={item => (
            <McCardGenre data={item} navigation={navigation} />
          )}
        />
      </View>
      <View>
        <TextTitle> Genre</TextTitle>
        <FlatList
          data={Genres}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={item => <McGenre data={item} />}
        />
      </View>
      <TextTitle>PlayList</TextTitle>
      {/* <View style={styles.menuContenaire}>
        <McBox data={playList[0].image} />
        <McBox data={playList[0].image} />
        <McBox data={playList[0].image} />
        <McBox data={playList[0].image} />
        <McBox data={playList[0].image} />
        <McBox data={playList[0].image} />
        <McBox data={playList[0].image} />
        <McBox data={playList[0].image} />
      </View> */}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.background};
`;
const TextTitle = styled.Text`
  color: #a0a0a0;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin: 10px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    margin: Metrics.s20,
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
  },
  textColorActiv: {
    color: Colors.colorTitleCard,
    fontSize: Metrics.s24,
  },
  textColorPrimary: {
    color: Colors.primary,
    fontSize: Metrics.s24,
  },
  menuContenaire: {
    height: Metrics.height / 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  search: {
    position: 'absolute',
    margin: Metrics.s20,
  },
  searchSection: {
    width: 327,
    height: 52,
    flexDirection: 'row',
    // justifyContent: 'center',
    margin: 20,

    padding: 23,
    backgroundColor: 'rgba(196, 196, 196, 0.16)',
    borderRadius: 26,
  },
  textInput: {
    backgroundColor: '#1f1f1f',
    color: Colors.primary,
    width: 327,
    height: 52,
    marginLeft: 25,
    borderRadius: 40,
    fontSize: 20,
    paddingLeft: 20,
  },
});
export default Player;
