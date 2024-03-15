import { View, Text , Button} from "react-native";

function LoginScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login!</Text>
            <Button
                title="Signup"
                onPress={() => navigation.navigate('Singup')}
            />
        </View>
    );
}

export default LoginScreen