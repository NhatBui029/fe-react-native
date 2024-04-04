import { Slot, useRouter, useSegments } from 'expo-router';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { ADMIN_USERID } from '@env'

const MainLayout = () => {
    const { isAuthenticated, user } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // if (typeof isAuthenticated == 'undefined') return;

        const inApp = segments[0] == '(app)';

        if (isAuthenticated && !inApp) {
            // console.log(user.userId)
            // console.log(process.env.ADMIN_USERID)
            if (user && user.userId == process.env.ADMIN_USERID) router.replace('admin');
            else router.replace('home');
        }
        else if (!isAuthenticated) router.replace('start');
    }, [ user])

    return <Slot />
}

export default function RootLayout() {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    );
}
