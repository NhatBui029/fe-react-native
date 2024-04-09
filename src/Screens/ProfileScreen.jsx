// import React from "react";
// import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import Tabs from "../Components/Profile/Tabs";
// import ProfileTabNavigator from '../Navigators/ProfileTabNavigator'

// function ProfileScreen() {
//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <View style={styles.profileContainer}>
//                 <Image
//                     source={{ uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png" }}
//                     style={styles.profileImage}
//                     resizeMode="cover"
//                 />
//                 <Text style={styles.heading}>Admin</Text>
//                 <Text style={styles.subText}>Test1@gmail.com</Text>
//             </View>
//             <ProfileTabNavigator style={{height: '80%'}}/>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#6B52AE",
//         paddingTop: 10,
//         height: '100%'
//     },
//     profileContainer: {
//         alignItems: "center",
//         marginBottom: 20,
//         height: '20%'
//     },
//     heading: {
//         fontSize: 15,
//         fontWeight: "bold",
//         marginTop: 2,
//         marginBottom: 2,
//         color: "white",
//         maxWidth: "100%",
//     },
//     subText: {
//         fontSize: 10,
//         fontStyle: "italic",
//         color: "white",
//     },
//     profileImage: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         marginBottom: 10,
//     },
// });

// export default ProfileScreen;
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "react-native-elements";
import Tabs from "../Components/Profile/Tabs";

function ProfileScreen() {
    return (
        <View style={styles.container}>
            {/* Image Profile Screen */}
            <View style={styles.profileContainer}>
                <Image 
                    source={{ uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png" }}
                    style={styles.profileImage}
                    resizeMode="cover"
                />
                <Text style={styles.heading}>Admin</Text>
                <Text style={styles.subText}>Test1@gmail.com</Text>
            </View>
            <Tabs/>
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