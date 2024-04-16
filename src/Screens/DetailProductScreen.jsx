import { View, Image, Text, Button, ScrollView, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import StarRating from "../Components/StarRating";
import view_price from "../helper/view_price";
import ReviewProduct from "../Components/ReviewProduct";
import NumericInput from "../Components/NumericInput";
import axios from "axios";
import { TouchableOpacity } from "react-native";
import IconBorder from "../Components/IconBorder";
import OptionProduct from "../Components/OptionProduct";
import { useAuth } from "../../context/authContext";
import { BASE_URL } from "@env";

function DetailProductScreen({ navigation, route }) {
    const { productId } = route.params;
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [selectOption, setSelectOption] = useState();
    const { user, setReload } = useAuth();
    const [countInStock, setCountInStock] = useState(0);
    const [sold, setSold] = useState(0);

    useEffect(() => {
        const getProductById = async (productId) => {
            try {
                const url = `${BASE_URL}/product/getById/${productId}`.toString();
                const res = await axios.get(url);
                setProduct(res.data);
                setCountInStock(res.data.countInStock);
                setSold(res.data.sold);
            } catch (e) {
                console.log(e.message)
            }
        }
        getProductById(productId);
    }, [])

    async function handleAddToCart() {
        const res = await axios.post(`${BASE_URL}/cart/add`, {
            userId: user.userId,
            productId: product.id,
            optionId: selectOption,
            quantity: quantity
        });
        setReload(prev => !prev);
        Alert.alert('Thông báo',"Đã thêm vào giỏ hàng !");
    }

    function handleSelectOption(optionId, countInStock, sold) {
        setSelectOption(optionId);
        setCountInStock(countInStock);
        setSold(sold);
    }

    return (
        <ScrollView contentContainerStyle={styles.detail}>
            {product &&
                <>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <IconBorder name={'arrow-back'} size={20} />
                    </TouchableOpacity>
                    <Image
                        source={{ uri: product.images[0].url }}
                        style={styles.imageDetail}
                    />
                    <View style={styles.mainDetail}>
                        <Text style={styles.nameProduct}>{product.name}</Text>
                        <View style={styles.ratingProduct}>
                            <StarRating rating={product.rating} sizeStar={14} />
                            <Text>Kho: {countInStock} | Đã bán: {sold}</Text>
                        </View>
                        <View style={{ display: "flex", gap: 15, flexDirection: 'row' }}>
                            <Text style={styles.newPriceProduct}>{view_price(product.newPrice)}</Text>
                            <Text style={styles.oldPriceProduct}>{view_price(product.oldPrice)}</Text>
                        </View>
                        <Text style={styles.descProduct}>{product.description.replace(/\s+/g, ' ')}</Text>
                        <Text>Loại</Text>
                        <ScrollView
                            contentContainerStyle={styles.optionsProduct}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                product.options.map(option => {
                                    return (
                                        <TouchableOpacity key={option.id} onPress={() => handleSelectOption(option.id, option.countInStock, option.sold)}>
                                            <OptionProduct option={option} selectOptionId={selectOption} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                        <View style={styles.quantityProduct}>
                            <Text>Số lượng</Text>
                            <NumericInput
                                quantity={quantity}
                                setQuantity={setQuantity}
                                countInStock={countInStock}
                            />
                        </View>
                        <Button
                            style={styles.addToCartBtn}
                            title="Thêm vào giỏ hàng"
                            color='green'
                            onPress={handleAddToCart}
                            disabled={!selectOption}
                        />
                    </View>
                    <ReviewProduct productId={product.id} rating={product.rating} />
                </>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detail: {

    },
    optionsProduct: {
        flexDirection: 'row',
        gap: 15,
        marginVertical: 5,
    },
    backBtn: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 100
    },
    imageDetail: {
        width: '100%',
        height: 360,
        resizeMode: 'cover'
    },
    mainDetail: {
        padding: 10,
        gap: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    nameProduct: {
        fontSize: 18,
        fontWeight: '600'
    },
    newPriceProduct: {
        color: 'red',
        fontSize: 20,
        fontWeight: '600'
    },
    oldPriceProduct: {
        color: '#ccc',
        fontSize: 16,
        textDecorationLine: 'line-through'
    },
    ratingProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    descProduct: {
        paddingRight: 2,
        textAlign: 'justify',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    quantityProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 10,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
})


export default DetailProductScreen