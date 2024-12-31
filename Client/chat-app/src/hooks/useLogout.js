import { useState } from 'react'
import axios from 'axios';
import { useAuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        setLoading(true);
        await axios.post('/chatapp/signout')
            .then(() => {
                localStorage.removeItem('authUser');
                setAuthUser(null);
            })
            .catch((error) => toast.error(error.message))
            .finally(setLoading(false))
    }
    return { loading, logout }
}

export default useLogout