import React from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components/native';
import Chansons from '../Chansons';


const Library = (props) => {

	return (
		<Container>
			<Text style={{color:'white'}}>Library</Text>
		</Container>
	);
}
const Container = styled.SafeAreaView`
flex:1;
`;
export default Library