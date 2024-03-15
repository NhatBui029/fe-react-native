import { View, Text, Button, ScrollView, StyleSheet, Image } from "react-native";
import img1 from '../../assets/1.png'
import CartItem from "../Components/CartItem";

const products = [
    {
        id: 1,
        name: 'Giày Nike Jordan1 Low',
        price: '1230000',
        image: img1,
        countInStock: 4,
        quantity: 4
    },
    {
        id: 2,
        name: 'Giày Nike Jordan1 Low',
        price: '1230000',
        image: img1,
        countInStock: 100,
        quantity: 8
    }
]

function CartScreen({ navigation }) {

    const handleClickCheckOut = () => {
        navigation.navigate('Địa chỉ');
    }
    return (
        <>
            <ScrollView contentContainerStyle={styles.containerr}>
                {products.map(product => <CartItem item={product} key={product.id} navigation={navigation} />)}
            </ScrollView>
            <View style={styles.checkOutBtn}>
                <Button
                    title="Thanh toán"
                    onPress={handleClickCheckOut}
                    color={'green'}
                    
                />
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    containerr: {
        gap: 10,
        marginTop: 10
    },
    checkOutBtn: {
        position: 'absolute',
        bottom: 10, 
        left: 0,
        right: 0
    }
});
export default CartScreen