import { useState } from 'react'
import { useAuthContext } from '@/Context/AuthContext'
import axios from 'axios';
import toast from 'react-hot-toast';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const login = async (username, password) => {
        const success = handleInputError(username, password);
        if (!success) return
        await axios.post('chatapp/signin', { username, password })
            .then((user) => {
                localStorage.setItem('authUser', JSON.stringify(user));
                setAuthUser(user);
            }).catch(err => toast.error(err.message))
            .finally(setLoading(false))
    }
    return { loading, login };
}

const handleInputError = (username, password) => {
    if (!username || !password) {
        toast.error('Please fill all the Fields');
        return false;
    }

    return true;
}

export default useLogin