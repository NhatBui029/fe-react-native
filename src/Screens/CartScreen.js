import { View, Text, Button, ScrollView, StyleSheet, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import img1 from '../../assets/1.png' 
import { Ionicons } from "@expo/vector-icons";

const product = {
    id: 1,
    name: 'Giày Nike Jordan1 Low',
    price: '1230000',
    image: img1,
    quantity: 4
}

function CartScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.card}>
                <CheckBox checked size={20} />
                <View style={styles.main}>
                    <Image source={product.image} style={styles.image}/>
                    <View style={styles.content}>
                        <Text >{product.name}</Text>
                        <Text style={{fontWeight: 600, color: 'red'}}>{product.price}</Text>
                    </View>
                </View>
                <View style={styles.remove}>
                    <Ionicons name="trash" size={30} color={'white'}/>
                </View>
            </ScrollView>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    main: {
        width: 325,
        height: 100,
        flexDirection: 'row',
        gap: 10
    },
    image: {
        height: 100,
        width: 100, 
        resizeMode: 'cover'
    },
    content: {
        flex: 3
    },
    remove: {
        width: 60,
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent: 'center'
    }
});
export default CartScreen