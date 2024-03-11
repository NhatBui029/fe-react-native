import { createStackNavigator } from '@react-navigation/stack';
import DetailProductScreen from '../Screens/DetailProductScreen';
import CartScreen from '../Screens/CartScreen';
import DeleveryAddressScreen from '../Screens/DeleveryAddressScreen';
import PaymentMethodScreen from '../Screens/PaymentMethodScreen';

const Stack = createStackNavigator();

function OrderStackNavigator() {
  return (
    <Stack.Navigator
       
    >
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Delevery Address" component={DeleveryAddressScreen} />
      <Stack.Screen name="Payment Method" component={PaymentMethodScreen} />
    </Stack.Navigator>
  );
}

export default OrderStackNavigator