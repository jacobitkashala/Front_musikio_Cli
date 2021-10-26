import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import {Images, Colors, Metrics} from '../../Constants';
// import {McImage} from '../../Components';

const Onboarding = ({loadAssetsAsync}) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Image source={Images.logo} style={styles.logo} />
      <TouchableOpacity
        onPress={() => {
          loadAssetsAsync();
        }}>
        <Image source={Images.cover} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>
        Retrouvez toutes les chansons congolaise préférer
      </Text>
      <Text style={styles.text}>.. .. .. .. .. .. .. .. .. .. .. </Text>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  padding-top: ${Metrics.s5}px;
  flex: 1;
  background-color: ${Colors.black};
  justify-content: flex-start;
`;
const styles = StyleSheet.create({
  logo: {
    width: Metrics.s100,
    height: Metrics.s100,
  },
  text: {
    color: Colors.colorText,
    fontSize: Metrics.s20,
    marginLeft: Metrics.s10,
  },
  image: {
    width: Metrics.width,
    height: Metrics.width,
    padding: Metrics.s5,
    backgroundColor: 'gray',
    // cursor: 'pointer'
  },
});
export default Onboarding;
