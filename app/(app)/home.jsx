import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from '../../src/Navigators/HomeStackNavigator';
import OrderStackNavigator from '../../src/Navigators/OrderStackNavigator';
import ProfileTabNavigator from '../../src/Navigators/ProfileTabNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Giỏ hàng') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Cá nhân') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeStackNavigator} />
      <Tab.Screen name="Giỏ hàng" component={OrderStackNavigator} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Cá nhân" component={ProfileTabNavigator} />
    </Tab.Navigator>
  );
}
