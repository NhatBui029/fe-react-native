import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from '../../src/Navigators/HomeStackNavigator';
import OrderStackNavigator from '../../src/Navigators/OrderStackNavigator';
import UserTabNavigator from '../../src/Navigators/UserTabNavigator';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { BASE_URL } from "@env";

const Tab = createBottomTabNavigator();

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const { reload, user } = useAuth();

  useEffect(() => {
    const getListCartDeatil = async (user) => {
        try {
            const url = `${BASE_URL}/cart/getAll`.toString();
            const list = await axios.post(url,{
                userId: user.userId
            });
            setQuantity(list.data.length);
        } catch (e) {
            console.log(e.message)
        }
    }

    getListCartDeatil(user);
}, [reload])

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
      <Tab.Screen name="Giỏ hàng" component={OrderStackNavigator} options={{ tabBarBadge: quantity }} />
      <Tab.Screen name="Cá nhân" component={UserTabNavigator} />
    </Tab.Navigator>
  );
}
