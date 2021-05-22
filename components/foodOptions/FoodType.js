import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content } from 'native-base';
import FoodTypeCard from './FoodTypeCard';

const FoodType = () => {
	return (
		<Content>
			
			<Grid>
				<Col>
					<Row style={{alignContent:'center', marginHorizontal:4, borderRadius:10}}>
						<FoodTypeCard
							image={{
								uri:
									'https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAFLAT-5-CASHBPAYT4D535087D/0x1920/70/3.jpg',
							}}
							title=""
						/>
					</Row>
				</Col>
				<Col>
					<Row>
						<FoodTypeCard
							image={{
								uri: 'https://i.pinimg.com/736x/5f/3b/75/5f3b758ab635b25e28d9f7aa7f33857c.jpg',
							}}
							title=""
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
		fontSize: 20,
		marginLeft: 10,
		marginBottom: 10
	}
});
export default FoodType;
