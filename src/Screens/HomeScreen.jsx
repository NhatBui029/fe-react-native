import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import CardProduct from "../Components/CardProduct";
import HomeSearch from "../Components/HomeSearch";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@env";

function HomeScreen({ navigation }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAllProduct = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/product/getAll`);
                setProducts(res.data);
            } catch (e) {
                console.log('ko goi dc api: ', e)
            }
        }
        getAllProduct();
    }, [])

    return (
        <View style={styles.mainHome}>
            <HomeSearch navigation={navigation} />
            <ScrollView contentContainerStyle={styles.listProduct}>
                {products.map((product, index) => (
                    <CardProduct
                        key={product.id}
                        product={product}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainHome: {
        marginBottom: 120
    },
    listProduct: {
        marginTop: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})
export default HomeScreen