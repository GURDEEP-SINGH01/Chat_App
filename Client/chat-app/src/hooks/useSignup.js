import { useAuthContext } from "@/Context/AuthContext";
import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const signup = async ({ username, email, password, confirmPassword }) => {
        const success = handleInputError({ username, email, password, confirmPassword });
        if (!success) return;
        setLoading(true);

        await axios.post('/chatapp/signup', {
            username,
            email,
            password,
            confirmPassword
        }).then((user) => {
            localStorage.setItem('authUser', JSON.stringify(user));
            setAuthUser(user);
        })
            .catch(error => toast.error(error.message))
            .finally(setLoading(false))
    }
    return { loading, signup };
}

const handleInputError = ({ username, email, password, confirmPassword }) => {
    if (!username || !password || !email || !confirmPassword) {
        toast.error('Please fill all the Fields');
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords dont match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be atleast 6 characters');
        return false;
    }
    return true;
}

export default useSignup