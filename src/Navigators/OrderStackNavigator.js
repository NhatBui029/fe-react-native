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
      <Stack.Screen name="Giỏ hàng " component={CartScreen} />
      <Stack.Screen name="Địa chỉ" component={DeleveryAddressScreen} />
      <Stack.Screen name="Thanh toán" component={PaymentMethodScreen} />
    </Stack.Navigator>
  );
}

export default OrderStackNavigator