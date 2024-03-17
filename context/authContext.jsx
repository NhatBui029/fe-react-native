import { useEffect, useState, useContext, createContext } from "react"
import { auth, db } from '../firebaseConfig'
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
                updateUserState(user.uid);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        })

        return unsub;
    }, [])

    useEffect(() => {
        // console.log('user: ', user)
    }, [user])

    async function updateUserState(userId) {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let data = docSnap.data();
            setUser({
                ...user,
                username: data.username,
                userId: data.userId
            })
        }
    }

    const login = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
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
            return { success: true }
        } catch (err) {
            return { success: false, msg: err.message, error: e }
        }
    }

    const register = async (username, email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);

            setDoc(doc(db, 'users', response?.user?.uid), {
                username,
                userId: response?.user?.uid
            })

            return { success: true, data: response.user }
        } catch (err) {
            let msg = err.message;
            if (msg.includes('auth/email-already-in-use')) msg = 'Email đã tồn tại !'
            if (msg.includes('auth/invalid-email')) msg = 'Email không đúng định dạng !'
            return { success: false, msg: msg }
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
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