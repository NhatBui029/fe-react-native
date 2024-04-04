import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "./StarRating";
import view_price from "../helper/view_price";

function CardProduct({ navigation, product }) {

    const goToDetail = (productId) => {
        navigation.navigate('Detail', { productId: productId });
    };


    return (
        <TouchableOpacity onPress={() => goToDetail(product.id)} style={styles.cardProduct}>
            <Image
                source={{ uri: product.images[0].url }}
                style={styles.imgCard}
            />
            <View style={styles.mainProduct} >
                <Text style={styles.nameProduct}>{product.name.substring(0, 23)}...</Text>
                <View style={{ display: "flex", gap: 15, flexDirection: 'row', alignItems:'center' }}>
                    <Text style={styles.newPriceProduct}>{view_price(product.newPrice)}</Text>
                    <Text style={styles.oldPriceProduct}>{view_price(product.oldPrice)}</Text>
                </View>
                <View style={{ display: "flex", justifyContent: 'space-between', flexDirection: 'row' , alignItems:'center'}}>
                    <StarRating rating={product.rating} />
                    <Text style={{color: '#ccc', fontSize: 12}}>Đã bán: {product.sold}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cardProduct: {
        width: '47%',
        padding: 5,
    },
    imgCard: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
    },
    mainProduct: {
        backgroundColor: 'white',
        padding: 5,
    },
    nameProduct: {
        fontSize: 13
    },
    newPriceProduct: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600'
    },
    oldPriceProduct: {
        color: '#ccc',
        fontSize: 12,
        textDecorationLine: 'line-through'
    }

})

export default CardProduct