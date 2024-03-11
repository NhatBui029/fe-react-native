import { View, Text , Button} from "react-native";

function DeleveryAddressScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Delevery Address!</Text>
            <Button
                title="Continue"
                onPress={() => navigation.navigate('Payment Method')}
            />
        </View>
    );
}

export default DeleveryAddressScreen