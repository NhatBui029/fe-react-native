import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from './src/Navigators/HomeStackNavigator';
import ProfileTabNavigator from './src/Navigators/ProfileTabNavigator';
import OrderStackNavigator from './src/Navigators/OrderStackNavigator';
import { useState } from 'react';
import LoginStackNavigator from './src/Navigators/LoginStackNavigator';

const Tab = createBottomTabNavigator();

export default function App() {

  // const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer style={styles.container}>
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
          headerShown: false
        })}
      >
        <Tab.Screen name="Trang chủ" component={HomeStackNavigator} />
        <Tab.Screen name="Giỏ hàng" component={OrderStackNavigator} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Cá nhân" component={ProfileTabNavigator} />
      </Tab.Navigator>
    </ NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
