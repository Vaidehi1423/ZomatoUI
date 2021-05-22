import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { Content, CardItem, Button, Icon, View } from 'native-base';

const FoodType = ({ image, title }) => {
	return (
		<Content style={styles.content}>
			<TouchableOpacity>
				<ImageBackground source={image} style={styles.image}>
					<CardItem style={styles.carditem}>
						<View style={{flex:1}}>
							<Text style={styles.title}>{title}</Text>
							<Button transparent style={{marginLeft:-10}}>
								<Icon name="arrow-forward-circle" style={{color: 'black'}}>
								</Icon>
							</Button>
						</View>
					</CardItem>
					
				</ImageBackground>
				
			</TouchableOpacity>
		</Content>
	);
};
const styles = StyleSheet.create({
	content: {
		padding: 6,
		height: 200,
		alignContent: 'center',
		width: "97%",
	},
	image: {
		width: '100%',
		// height: 200,
		width: '100%',
		height: 200,
		borderRadius: 10,
		overflow: 'hidden',
	},
	carditem: {
		backgroundColor: 'transparent',
		marginTop: 120,
	},
	icon: {
		color: 'white',
		fontWeight: 'bold',
		height: 500,
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
	},
});
export default FoodType;
