import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/Searchbar';
import { Container } from 'native-base';
import Banner1 from './components/Banner1';
import FoodType from './components/foodOptions/FoodType';
import Restaurant from './components/restaurants/Restaurant';
import PrevList from './components/PrevList';
import tags from './components/Tags';

export default function App() {
	return (
		<Container>
			<ScrollView style={styles.container}>
				<View style={styles.container}>
					<Searchbar />
					<Banner1 />
					<FoodType />
					<PrevList />
					<Restaurant />
				</View>
			</ScrollView>
			<View styles={{backgroundColor:'white'}}>
				<Navbar />
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'white',
		flex: 1,
	},
});
