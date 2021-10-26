import React from 'react';
import {StatusBar, StyleSheet, Text, Image} from 'react-native';
import styled from 'styled-components/native';

import {Images, Colors, Metrics} from '../../Constants';
// import {McLogo} from '../../Components';

const Onboarding = ({loadAssetsAsync}) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Image source={Images.logo} />
      <Image
        source={Images.cover}
        style={styles.image}
        onClick={() => {
          loadAssetsAsync();
        }}
      />
      <Text style={styles.text}>
        Retrouvez toutes les chansons congolaise préférer
      </Text>
      <Text style={styles.text}>.. .. .. .. .. .. .. .. .. .. .. </Text>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.black};
`;
const styles = StyleSheet.create({
  text: {
    color: Colors.colorText,
    fontSize: Metrics.s20,
    marginLeft: Metrics.s10,
  },
  image: {
    width: Metrics.width,
    height: Metrics.width,
    backgroundColor: 'gray',
    // cursor: 'pointer'
  },
});
export default Onboarding;
