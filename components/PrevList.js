import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Content, Right } from 'native-base';
import PrevOrdered from './PrevOrdered';

const PrevList = () => {
	return (
		<Content>
			{/* <View >
				<Text style={styles.title}>Order Online</Text>
                <Text stlye={{marginTop:0}}>view more</Text>
			</View> */}
            <Text style={styles.title}>Order Online</Text>
            <Text style={{marginLeft:300, marginTop:-20, marginBottom: 10}}>view more</Text>
			<Grid>
				<Col>
					<Row>
						<PrevOrdered
							image={{
								uri:
									'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg',
							}}
							title="Pizza"
						/>
					</Row>
                    <Row>
						<PrevOrdered
							image={{
								uri: 'https://c1.wallpaperflare.com/preview/973/361/77/barbecue-meat-grill-grilled-meats-thumbnail.jpg',
							}}
							title="Chickcen"
						/>
					</Row>
				</Col>
				<Col>
					<Row>
						<PrevOrdered
							image={{
								uri: 'https://i.pinimg.com/originals/b4/98/d2/b498d219990d8dd16bb27c4c79971420.jpg',
							}}
							title="Burger"
						/>
					</Row>
                    <Row>
						<PrevOrdered
							image={{
								uri:
									'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbGFkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
							}}
							title="Salad"
						/>
					</Row>
				</Col>
			</Grid>
		</Content>
	);
};
const styles = StyleSheet.create({
	title: {
		color: 'black',
		fontWeight: '600',
		fontSize: 18,
		marginLeft: 10,
        marginTop: 10,
		// marginBottom: 10,
	},
});
export default PrevList;
