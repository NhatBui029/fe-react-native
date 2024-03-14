import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "./StarRating";

function CardProduct({ navigation, product }) {

    const goToDetail = (productId) => {
        navigation.navigate('Detail', { productId: productId });
    };


    return (
        <TouchableOpacity  onPress={() => goToDetail(product.id)} style={styles.cardProduct}>
            <Image
                source={product.image}
                style={styles.imgCard}
            />
            <View style={styles.mainProduct} >
                <Text style={styles.nameProduct}>{product.name}</Text>
                <Text style={styles.priceProduct}>{product.price}</Text>
                <StarRating rating={product.rating} />
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
    priceProduct: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600'
    }
    
})

export default CardProduct