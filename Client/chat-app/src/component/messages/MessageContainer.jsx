import useFriendsConversation from "../../Store/useFriendsConversation";
import { MessageInput } from "./MessageInput"
import { Messages } from "./Messages"
import { BiMessageSquareDetail } from "react-icons/bi";
import { useAuthContext } from "../../Context/AuthContext";


const NoSelectedChat = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="text-center items-center flex flex-col">
                <p>Welcome👋 {authUser.data.newUser.username}</p>
                <p>Choose a Friend to Chat</p>
                <BiMessageSquareDetail />
            </div>
        </div>
    )
}

export const MessageContainer = () => {
    const noSelectedChat = true
    const { selectedFriends, setSelectedFriends } = useFriendsConversation();
    return (
        <div className=" flex flex-col sm:min-w-[200px] md:min-w-[400px] bg-orange-300 rounded-md">
            {!selectedFriends ? <NoSelectedChat /> :
                <>
                    <div className="px-2 bg-orange-400">
                        <span className="label-text font-semibold">{selectedFriends.username}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>}
        </div>
    )
}
