import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {McVectorIcon} from '../../Components';
// import {Images, Colors, Metrics} from '../../Constants';
import {Colors} from '../../Constants';

const Favories = () => {
  return (
    <Container>
      <McVectorIcon
        type="AntDesign"
        name="arrowleft"
        color={Colors.primary}
        size={24}
        // style={styles.search}
      />
      <Text>Bien</Text>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
`;
export default Favories;
