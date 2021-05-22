import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Content, Item, Input, Icon, Header } from 'native-base';
const Searchbar = () => {
	return (
		<Header searchBar transparent span style = {{backgroundColor:'white'}}>
			{/* <View style={styles.searchbar}>
				<Text>
					Hello World!
				</Text>
			</View> */}
			
			<Content>
				<Item transparent>
					<Icon name="location-outline" style={{ color: 'red' }} />
					<Input placeholder="Times Square, NYC" />
					<Icon name="person" style={{ color: 'red' }} />
				</Item>
				<Item rounded style={styles.searchbar}>
					<Icon name="search" style={{ color: 'red' }} />
					<Input placeholder="Restaurant name, cuisine, or a dish..." />
				</Item>
			</Content>

		</Header>
	);
};

const styles = StyleSheet.create({
	locationBar: {
		backgroundColor: 'red',
		height: 20,
		flex: 1
	},
	searchbar: { 
		backgroundColor: 'white',
		marginVertical: 2,
		paddingVertical:0,
		flex: 1 },
});

export default Searchbar;
