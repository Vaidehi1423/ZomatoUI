import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Content, CardItem, Text, View } from 'native-base';

import { StyleSheet } from 'react-native';

const Banner1 = () => {
	return (
		<Content padder>
			<ImageBackground
				source={{
					uri: 'https://pbs.twimg.com/media/DoKaRSqWsAANSLO?format=jpg&name=small',
				}}
				style={styles.banner}
			>
				<CardItem style={styles.cardItem}>
					<View style={{flex:1}}>
						<Text
							style={{ color: 'white' , fontSize: 15, fontWeight: 'bold', marginLeft: 70, marginTop: -5 }}
						>{`We're Operational till 11 PM`}</Text>
						<Text
							style={{ color: 'white' , fontSize: 12, fontWeight: '400', marginLeft: 55, marginTop: 4 }}
						>
							Order Early to avoid any delay in delivery
						</Text>
					</View>
				</CardItem>
				{/* <CardItem style={styles.cardItem}>
					<Text style={{ color: 'white', marginLeft: 20, marginTop: 20 }}>The best offers for you</Text>
				</CardItem> */}
				{/* <TouchableOpacity>
					<CardItem
						style={{
							backgroundColor: 'black',
							width: 150,
							marginLeft: 35,
							borderRadius: 10,
							overflow: 'hidden',
						}}
					>
						<Text style={{ color: 'white' }}>UP TO 50% OFF</Text>
					</CardItem>
				</TouchableOpacity> */}
			</ImageBackground>
		</Content>
	);
};

const styles = StyleSheet.create({
	banner: {
		width: '100%',
		height: 50,
		borderRadius: 10,
		overflow: 'hidden',
	},
	cardItem: {
		backgroundColor: 'transparent',
	},
	card: { borderRadius: 20, overflow: 'hidden', borderWidth: 3, borderColor: 'red' },
});

export default Banner1;
