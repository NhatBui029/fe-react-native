import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';

const Stack = createStackNavigator();

function LoginStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={
            {headerShown: false}
        }
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Singup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default LoginStackNavigator