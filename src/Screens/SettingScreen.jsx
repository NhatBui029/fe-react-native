import { View, Button } from "react-native";
import { useAuth } from "../../context/authContext";

function SettingScreen() {
    const { logout } = useAuth();

    async function handleLogout() {
        await logout();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='Đăng xuất' onPress={handleLogout}/>
        </View>
    );
}

export default SettingScreen