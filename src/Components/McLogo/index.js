import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../Constants';

const McLogo = () => {
  return (
    <Container>
      <Circle>
        <Text>M</Text>
      </Circle>
    </Container>
  );
};

const Container = styled.View`
  width:${props => props.size || 78}px;
  height:${props => props.size || 78}px;
`;
const Circle = styled.View`
  background-color: ${Colors.colorBgrLogo};
  border-radius:${70 / 2}px;;
  width:${props => props.circle || 70}px;
  height:${props => props.circle || 70}px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 40px;
  color: ${Colors.black};
`;
// font-family:${Fonts.type.fontLogo}
export default McLogo;
