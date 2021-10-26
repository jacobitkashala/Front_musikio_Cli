import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Metrics } from '../../Constants';

const McImage = ({ source, size, onPress, ...rest }) => {

  return (
    <View onPress={onPress}>
      <Image source={source} size={size} {...rest} />
    </View>
  )

};

McImage.defaultProps = {
  size: Metrics.images.xl,
};

const Image = styled.Image`
  z-index:10;
  width: ${props => props.size || Metrics.screenWidth}px;
  height: ${props => props.size || Metrics.images.medium}px;
  border-radius: ${(props) =>
    props.round
      ? props.size
        ? `${props.size}px`
        : `${Metrics.images.medium}px`
      : `0px`};
`;
export default McImage;
