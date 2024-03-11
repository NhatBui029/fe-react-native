import { View, Text , Button} from "react-native";

function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
}

export default HomeScreen