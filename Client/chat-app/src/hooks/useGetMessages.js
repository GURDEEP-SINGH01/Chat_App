import useFriendsConversation from '../Store/useFriendsConversation';
import axios from 'axios';
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(true);
    const { selectedFriends, messages, setMessages } = useFriendsConversation();
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            await axios.post('chatapp/getMessage', {
                receiverId: selectedFriends._id
            }).then((data) => setMessages([...data.data]))
                .catch(error => toast.error(error.message))
                .finally(setLoading(false));
        }
        if (selectedFriends?._id) getMessages();
    }, [selectedFriends?._id, setMessages])
    return { messages, loading }
}

export default useGetMessages