import useFriendsConversation from "../../Store/useFriendsConversation";
import { useAuthContext } from "../../Context/AuthContext"
import useGetFriends from "../../hooks/useGetFriends";

export const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedFriends } = useFriendsConversation();
    const fromMe = message.senderId === authUser.data._id;
    const chatAlign = fromMe ? 'chat-end' : 'chat-start';


    return (
        <div className={`chat ${chatAlign}`} >
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">{message.content}</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div >
    )
}
