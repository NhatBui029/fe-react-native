import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackAdminNavigator from '../../src/Navigators/HomeStackAdminNavigator';
import OrderStackNavigator from '../../src/Navigators/OrderStackNavigator';
import ProfileTabNavigator from '../../src/Navigators/ProfileTabNavigator';
import SettingScreen from '../../src/Screens/SettingScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Chat') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          } else if (route.name === 'Quản lí') {
            iconName = focused ? 'storefront' : 'storefront-outline';
          } else if (route.name === 'Cài đặt') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Chat" component={HomeStackAdminNavigator} />
      <Tab.Screen name="Quản lí" component={OrderStackNavigator} />
      <Tab.Screen name="Cài đặt" component={SettingScreen} />
    </Tab.Navigator>
  );
}
