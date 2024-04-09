import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import NumericInput from "./NumericInput";
import view_price from "../helper/view_price";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { BASE_URL } from "@env";

export default function CartItem({ item, navigation }) {
    const { id, optionId, productId } = item;
    const [product, setProduct] = useState(null);
    const [option, setOption] = useState(null);
    const [quantity, setQuantity] = useState(parseInt(item.quantity));
    const { setReload} = useAuth();

    useEffect(() => {
        const getProductById = async (productId) => {
            try {
                const url = `${BASE_URL}/product/getById/${productId}`.toString();
                const res = await axios.get(url);
                setProduct(res.data);
            } catch (e) {
                console.log(e.message)
            }
        }
        getProductById(productId);
    }, [item]);

    useEffect(() => {
        const getOptionNameById = async (optionId) => {
            try {
                const res = await axios.get(`${BASE_URL}/option/getById/${optionId}`);
                setOption(res.data)
            } catch (e) {
                console.log(e.message)
            }
        }
        getOptionNameById(optionId);
    }, []);

    useEffect(() => {
        const updateQuantity = async (id, quantity) => {
            try {
                const res = await axios.patch(`${BASE_URL}/cart/update`, {
                    id: id,
                    quantity: quantity
                });
                setQuantity(parseInt(res.data.quantity));
            } catch (e) {
                console.log(e.message)
            }
        }
        updateQuantity(id, quantity);
    }, [quantity])

    const goToDetail = (productId) => {
        navigation.navigate('Detail', { productId: productId });
    };

    async function handleDeleteCart(id) {
        console.log('delete ok>', id);
        const deleteCart = await axios.delete(`${BASE_URL}/cart/delete/${id}`);
        setReload(prev => !prev);
    }

    return (

        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.card}
        >
            {
                product &&
                <>
                    <CheckBox checked size={20} />
                    <TouchableOpacity onPress={() => goToDetail(product.id)}>
                        <View style={styles.main}>
                            <Image source={{ uri: product.images[0].url }} style={styles.image} />
                            <View style={styles.content}>
                                <Text >{product.name.substring(0, 32)}</Text>
                                <Text style={styles.price}>{view_price(product.newPrice)}</Text>
                                <View style={{ display: "flex", gap: 15, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text>Loại: {option}</Text>
                                    <NumericInput
                                        quantity={quantity}
                                        setQuantity={setQuantity}
                                        countInStock={parseInt(product.countInStock)}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteCart(id)}>
                        <View style={styles.remove}>
                            <Ionicons name="trash" size={30} color={'white'} />
                        </View>
                    </TouchableOpacity>

                </>
            }

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