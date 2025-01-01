import useFriendsConversation from "../../Store/useFriendsConversation"
import toast from "react-hot-toast"

export const Friend = ({ friend }) => {
    const { selectedFriends, setSelectedFriends } = useFriendsConversation()
    const isSelectedConverstion = friend._id === selectedFriends?._id
    return (
        <>
            <div className={`flex items-center hover:bg-orange-300 gap-2 p-2 py-1 
             ${isSelectedConverstion ? "bg-orange-300" : ""}`}
                onClick={() => { setSelectedFriends(friend); }}
            >
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>


                <div className="flex flex-col flex-1">
                    <div className="flex gap-2 justify-between">
                        <p className=" text-black">{friend?.username}</p>
                        <span className="text-md">😊</span>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-0 px-3" />
        </>

    )
}
