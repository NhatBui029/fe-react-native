import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import CardProduct from "../Components/CardProduct";
import HomeSearch from "../Components/HomeSearch";
import products from "../data/products";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.mainHome}>
            <HomeSearch navigation={navigation}/>
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