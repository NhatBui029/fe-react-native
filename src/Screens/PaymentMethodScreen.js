import { View, Text , Button} from "react-native";

function PaymentMethodScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>PaymentMethodScreen!</Text>
            <Button
                title="Continue"
                // onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
}

export default PaymentMethodScreen