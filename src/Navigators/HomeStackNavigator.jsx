import { createStackNavigator } from '@react-navigation/stack';
import DetailProductScreen from '../Screens/DetailProductScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={
            {headerShown: false}
        }
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailProductScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator