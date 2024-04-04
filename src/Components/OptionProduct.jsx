import { StyleSheet, Text, View } from "react-native"

export default function OptionProduct({ option,selectOptionId }) {
    return (
        <View style={ option.id == selectOptionId ? styles.select : styles.option}>
            <Text style={styles.name}>Size {option.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    option: {
        backgroundColor: '#DADDE1',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    name: {
        fontSize: 12
    },
    select: {
        backgroundColor: '#EBEDF0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'green'
    }
})