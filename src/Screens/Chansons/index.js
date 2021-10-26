import React from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components/native';

import { Images, Colors, Metrics } from '../../Constants';
import { McText, McImage } from '../../Components';

const Library = (props) => {
	console.log(props);
	return (
		<Container>
			<Text>Chansons</Text>
		</Container>
	);
}
const Container = styled.View`
flex:1
`;

export default Library