import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  StyleSheet,
  View,
  // StatusBar,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import {Images, Colors, Metrics} from '../../Constants';
import {McCardGenre, McGenre, McVectorIcon} from '../../Components';

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
const playLists = [
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
  {
    id: 5,
    image: Images.michel,
    genre: 'Motivation',
  },
];

const Player = ({navigation}) => {
  const size = 30;

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
          size={30}
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
        <Text style={styles.textColorPrimary}> Genre</Text>
        <FlatList
          data={Genres}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={item => <McGenre data={item} />}
        />
      </View>
      <Text style={styles.textColorPrimary}>PlayList</Text>
      <ScrollView>
        {playLists.map((item, index) => (
          // <McGenre data={item} key={index} />
          <Text style={styles.textColorPrimary} key={index}>
            {index}
          </Text>
        ))}
      </ScrollView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.background};
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
  searchSection: {
    width: 30,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    padding: 23,
    // backgroundColor: '#1f1f1f',
    // backgroundColor: 'rgba(196, 196, 196, 0.16)',
    borderRadius: 26,
  },
  search: {
    position: 'absolute',
    marginLeft: Metrics.s50,
    zIndex: 1000,
  },
  textInput: {
    backgroundColor: '#1f1f1f',
    color: Colors.primary,
    width: 327,
    height: 52,
    marginLeft: 25,
    borderRadius: 40,
    fontSize: 20,
    paddingLeft: 30,
  },
});
export default Player;
