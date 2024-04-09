import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import InfoPerson from '../Components/InfoPerson'
import InfoAccount from '../Components/InfoAccount'
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import axios from "axios";

const Tab = createMaterialTopTabNavigator();

function ProfileTabNavigator() {
    const [infoUser, setInfoUser] = useState();
    const { user } = useAuth();

    // useEffect(() => {
    //     const getInfoUser = async (user) => {
    //         try {
    //             const url = `http://192.168.157.247:3000/user/getInfoUser`.toString();
    //             const res = await axios.post(url, {
    //                 userId: user.userId
    //             });
    //             return res;
    //         } catch (e) {
    //             console.log('ko goi dc api: ', e)
    //         }
    //     }
    //     const res = getInfoUser(user);
    //     setInfoUser(res.data)
    // }, [])

    return (
        <Tab.Navigator style={styles.container}>
            <Tab.Screen name="Tài khoản" component={InfoAccount}  />
            <Tab.Screen name="Cá nhân" component={InfoPerson} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: '100%'
    }
})

export default ProfileTabNavigator