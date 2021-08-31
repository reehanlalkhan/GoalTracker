import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const GoalItem = props => {
	return (
		<View style={styles.mainView}>

			<View style={styles.listItem}>
				<Text>{props.item}</Text>
			</View>

			<TouchableOpacity activeOpacity={0.8}
				underlayColor='#fff'
				onPress={props.onDelete.bind(this, props.id)}>
				<Image source={require('../assets/trash.png')}
					style={styles.imageIcon} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mainView: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignSelf: 'flex-start'
	},
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
		width: '90%'
	},
	imageIcon: {
		borderRadius: 20,
		borderColor: 'black',
		marginVertical: 10,
		padding: 10,
		marginBottom: 20,
		shadowColor: '#303838',
		shadowOffset: { width: 0, height: 5 },
		shadowRadius: 10,
		shadowOpacity: 0.35,
		width: 31,
		height: 31,
		resizeMode: 'contain'
	}
});

export default GoalItem;