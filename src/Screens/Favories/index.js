import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { McVectorIcon } from '../../Components';
import { Images, Colors, Metrics } from '../../Constants';

const Favories = () => {
	return (
		<container>
			<View> 
				<McVectorIcon
				type="AntDesign"
				name="arrowleft"
				color={Colors.primary}
				size={24}
			// style={styles.search}
			/></View>
			<Text style={{ color: 'white' }}>Favorite</Text>
		</container>
	);
}
const container = styled.SafeAreaView`
flex:1;
`
export default Favories