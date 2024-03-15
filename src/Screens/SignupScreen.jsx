import { View, Text , Button} from "react-native";

function SignupScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Signup!</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

export default SignupScreen