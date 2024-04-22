import { useEffect, useState, useContext, createContext } from "react"
import { auth, db } from '../firebaseConfig'
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import axios from 'axios';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsAuthenticated(true);
                await updateUserState(user?.uid);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        })

        return unsub;
    }, [])


    async function updateUserState(userId) {
        try {
            const docRef = doc(db, 'users', userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                setUser({
                    ...user,
                    username: data.username,
                    userId: data?.userId
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    const login = async (email, password) => {
        try {
            console.log('logiin')
            const res = await signInWithEmailAndPassword(auth, email, password);
            // await updateUserState(res.user.uid);
            return { success: true }
        } catch (err) {
            let msg = err.message;
            if (msg.includes('auth/invalid-email')) msg = 'Email không đúng định dạng !';
            if (msg.includes('auth/invalid-credential')) msg = 'Email hoặc mật khẩu không chính xác!';
            return { success: false, msg: msg }
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            console.log('sign out')
            return { success: true }
        } catch (err) {
            return { success: false, msg: err.message, error: e }
        }
    }

    const register = async (username, email, password) => {
        try {
            const resFireBase = await createUserWithEmailAndPassword(auth, email, password);
            const resMysql = await axios.post(`${process.env.BASE_URL}/user/register`, {
                username: username,
                email: email,
                password: password,
                userId: resFireBase?.user?.uid
            });

            await setDoc(doc(db, 'users', resFireBase?.user?.uid), {
                username,
                userId: resFireBase?.user?.uid
            })

            console.log('create acc : ', resMysql.data)

            return { success: true, data: resFireBase.user, resMysql: resMysql.data }
        } catch (err) {
            let msg = err.message;
            if (msg.includes('auth/email-already-in-use')) msg = 'Email đã tồn tại !'
            if (msg.includes('auth/invalid-email')) msg = 'Email không đúng định dạng !'
            return { success: false, msg: msg }
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register, reload, setReload }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value) throw new Error('useAuth must be wrapper inside AuthContextProvider');

    return value;
}

export { AuthContext, AuthContextProvider, useAuth }