import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../Screens/ProfileScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import { StyleSheet } from 'react-native';
import SettingScreen from '../Screens/SettingScreen';

const Tab = createMaterialTopTabNavigator();

function ProfileTabNavigator() {
    return (
        <Tab.Navigator style={styles.container}>
            <Tab.Screen name="Thông tin" component={ProfileScreen} />
            <Tab.Screen name="Đơn hàng" component={OrdersScreen} />
            <Tab.Screen name="Cài đặt" component={SettingScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
})

export default ProfileTabNavigator