import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../Screens/ProfileScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function ProfileTabNavigator() {
    return (
        <Tab.Navigator style={styles.container}>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
})

export default ProfileTabNavigator