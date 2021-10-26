import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
// import { Metrics } from 'Constants';
import McImage from '../McImage';

const McPlayList = ({ data }) => {

	const { image } = data;

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: image }}
			/>
		</View>
	)

};
const styles = StyleSheet.create({
	container: {
		width: 150,
		margin: 2,
		flexDirection: "column",
		// gap: "14px",
	},
	image: {
		width: 150,
		height: 150,
		marginTop: 5,
		borderRadius: 5,
		backgroundColor: 'gray',
		// cursor: 'pointer'
	},
	textGenre: {
		color: '#F5C108',
	},
	text: {
		color: '#fff',
	}
})

export default McPlayList;