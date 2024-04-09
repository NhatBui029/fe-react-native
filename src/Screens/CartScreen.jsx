import { View, Text, Button, ScrollView, StyleSheet, Image } from "react-native";
import CartItem from "../Components/CartItem";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import axios from "axios";
import { BASE_URL } from "@env";

function CartScreen({ navigation }) {

    const [list, setList] = useState();
    const { user , reload} = useAuth();

    useEffect(() => {
        const getListCartDeatil = async (user) => {
            try {
                const url = `${BASE_URL}/cart/getAll`.toString();
                const list = await axios.post(url,{
                    userId: user.userId
                });
                setList(prev => [...list.data]);
            } catch (e) {
                console.log(e.message)
            }
        }

        getListCartDeatil(user);
    }, [reload])

    const handleClickCheckOut = () => {
        navigation.navigate('Địa chỉ');
    }
    return (
        <>
            <ScrollView contentContainerStyle={styles.containerr}>
                {list && list.map((item, index) => <CartItem item={item} key={index} navigation={navigation}/>)}
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