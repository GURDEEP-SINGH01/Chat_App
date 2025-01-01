import { useEffect } from 'react'
import useFriendsConversation from '../Store/useFriendsConversation';
import { useSocketContext } from '../Context/SocketContext'

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useFriendsConversation();
    console.log('here')
    useEffect(() => {
        socket?.on('newMessage', (newMessage) => {
            setMessages([...messages, newMessage])
        })
        return () => socket.off('newMessages')
    }, [socket, setMessages, messages])
}

export default useListenMessages