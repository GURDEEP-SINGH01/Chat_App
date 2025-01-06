import { useAuthContext } from '../Context/AuthContext';
import useFriendsList from '../Store/useFriendsList';
import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';

const useSearchFriends = () => {
    const [loading, setLoading] = useState(false);
    const { friends, setFriends } = useFriendsList();
    const { authUser } = useAuthContext();
    const searchFriends = async (friend) => {
        if (!friend) {
            toast.error('Please enter a User')
            return
        }
        try {
            setLoading(true);
            const searchedFriend = await axios.post('/chatapp/searchFriends', {
                searchId: friend
            })
            if (searchedFriend) {
                addFriend(searchedFriend.data)
            }
        } catch (err) {
            toast.error(err);
        } finally {
            setLoading(false);
        }

    }
    const addFriend = async (friend) => {
        try {
            const addFriend = await axios.post('/chatapp/addFriends', {
                senderId: authUser.data,
                receiverId: friend._id
            })
            if (addFriend.data.message != 'Friend exist') {
                setFriends([...friends, friend])
            } else {
                toast('Already a friend', { style: { color: 'black', fontFamily: 'monospace' } })
            }
        } catch (err) {
            toast.error(err);
        }
    }
    return { loading, searchFriends }
}

export default useSearchFriends