import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NumericInput({quantity, setQuantity, countInStock }) {
    return (
        <View style={styles.changeQuantity}>
            <Ionicons
                style={styles.icon}
                name="remove" size={18}
                onPress={() => setQuantity(prev => prev - 1)}
                disabled={quantity > 1 ? false : true}
            />
            <Text style={styles.contentQuantity}>{quantity}</Text>
            <Ionicons
                style={styles.icon}
                name="add" size={18}
                onPress={() => setQuantity(prev => prev + 1)}
                disabled={quantity < countInStock ? false : true}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    changeQuantity: {
        flexDirection: 'row',
        marginRight: 20,
        alignItems: 'center',
        paddingVertical: 5,
        width: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    icon: {
        flex: 1,
        textAlign: 'center',
    },
    contentQuantity: {
        flex: 2,
        textAlign: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
})
