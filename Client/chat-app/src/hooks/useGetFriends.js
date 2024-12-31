import { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const useGetFriends = (friends, setFriends) => {
    const [loading, setLoading] = useState(false);
    const { authUser } = useAuthContext();

    useEffect(() => {
        const getFriends = async () => {
            if (!authUser) {
                console.error('Sender ID is undefined');
                return;
            }
            setLoading(true);
            try {
                const friendsList = await axios.post('/chatapp/getFriends', { senderId: authUser.data._id });

                if (friendsList) { setFriends(friendsList.data); }
            } catch (err) { toast.error('Cant retrive Friends', err) }
            finally { setLoading(false); }
        }
        getFriends()
    }, [])
    return { loading, friends }
}

export default useGetFriends