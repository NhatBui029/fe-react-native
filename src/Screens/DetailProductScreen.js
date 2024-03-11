import { View , Text, Button} from "react-native";

function DetailProductScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DetailProduct!</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export default DetailProductScreen