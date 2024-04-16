import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Tabs from "../Components/Profile/Tabs";
import axios from 'axios'
import { useAuth } from "../../context/authContext";
import {BASE_URL} from '@env'

function ProfileScreen() {
    const {user} = useAuth();
    const [userOnline, setUserOnline] = useState();
    const {reload} = useAuth();

    useEffect(() => {
        const getInfoUser = async (user) => {
            try {
                const url = `${BASE_URL}/user/getInfoUser`.toString();
                const res = await axios.post(url, {
                    userId: user.userId,
                });
                setUserOnline(res.data)
            } catch (e) {
                console.log('ko goi dc api: ', e)
            }
        }

        getInfoUser(user);
    }, [reload])

    return (
        <View style={styles.container}>
            {/* Image Profile Screen */}
            <View style={styles.profileContainer}>
                <Image 
                    source={{ uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png" }}
                    style={styles.profileImage}
                    resizeMode="cover"
                />
                <Text style={styles.heading}>{userOnline && userOnline.name}</Text>
                <Text style={styles.subText}>{userOnline && userOnline.account.email}</Text>
            </View>
            <Tabs user={userOnline}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6B52AE",
        paddingTop: 10,
        // paddingBottom: 6,
    },
    profileContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    heading: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 2,
        marginBottom: 2,
        color: "white",
        maxWidth: "100%",
    },
    subText: {
        fontSize: 10,
        fontStyle: "italic",
        color: "white",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10,
    },
});

export default ProfileScreen;