import { View , Text, Button} from "react-native";

function CartScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cart!</Text>
            <Button 
                title="Check out"
                onPress={()=> navigation.navigate('Delevery Address')}
            />
        </View>
    );
}

export default CartScreen