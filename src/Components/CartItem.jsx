import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import NumericInput from "./NumericInput";
import view_price from "../helper/view_price";
import { Ionicons } from "@expo/vector-icons";

export default function CartItem({ item, navigation }) {

    const goToDetail = (productId) => {
        navigation.navigate('Detail', { productId: productId });
    };

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.card}>
            <CheckBox checked size={20} />
            <TouchableOpacity onPress={() => goToDetail(item.id)}>
                <View style={styles.main}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.content}>
                        <Text >{item.name}</Text>
                        <Text style={styles.price}>{view_price(item.price)}</Text>
                        <NumericInput
                            quantity={item.quantity}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.remove}>
                <Ionicons name="trash" size={30} color={'white'} />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: 'white'
    },
    main: {
        width: 325,
        height: 100,
        flexDirection: 'row',
        gap: 10
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
        borderRadius: 3
    },
    content: {
        justifyContent: 'space-around'
    },
    remove: {
        width: 60,
        height: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: {
        fontSize: 17,
        fontWeight: '600',
        color: 'red'
    }
});