import axios from 'axios';
import useFriendsConversation from '../Store/useFriendsConversation';
import toast from 'react-hot-toast';
import { useState } from 'react';

const useSendMessages = () => {
    const [loading, setLoading] = useState(true);
    const { messages, setMessages, selectedFriends } = useFriendsConversation()

    const sendMessage = async (message) => {
        setLoading(true);
        await axios.post('/chatapp/sendMessage', {
            receiverId: selectedFriends._id,
            content: message
        }).then((data) => setMessages([...messages, data.data]))
            .catch((error) => toast.error(error.message))
            .finally(setLoading(false))
    }
    return { loading, sendMessage }
}

export default useSendMessages