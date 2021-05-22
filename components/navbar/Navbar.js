import React from 'react';
import { StyleSheet,Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

const Navbar = () => {
	return (
		<Footer style={styles.container}>
			<FooterTab style={{backgroundColor:'white'}}>
				<Button>
					<Icon name="cart-outline" />
					<Text>Order</Text>
				</Button>
				<Button>
					<Icon name="body-outline" />
					<Text>Go Out</Text>
				</Button>
				<Button>
					<Icon name="heart-half-outline" />
					<Text>Pro</Text>
				</Button>
				<Button>
					<Icon name="person" />
					<Text>Donate</Text>
				</Button>
			</FooterTab>
		</Footer>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginBottom: 0,
	},
});
export default Navbar;
