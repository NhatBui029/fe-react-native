import { TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Badge } from "react-native-elements";

function HomeSearch() {
    return (
        <View style={styles.homeSearch}>
            <TextInput
                style={styles.inputSearch}
                placeholder="Nhập tên sản phẩm..."
                keyboardType="default"
            />
            <View>
                <Ionicons name='cart' size={30} color='white' options={{ tabBarBadge: 3 }} />
                <Badge
                    status="error"
                    value={3}
                    containerStyle={{ position: 'absolute', top: -10, right: -10 }}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    homeSearch: {
        height: 100,
        backgroundColor: 'green',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputSearch: {
        height: 40,
        width: '80%',
        margin: 12,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 2
    }
})

export default HomeSearch