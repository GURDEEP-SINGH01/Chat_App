import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import { Message } from "./Message"
import MessageSkeleton from "./skeleton/MessageSkeleton";

export const Messages = () => {
    const { loading, messages } = useGetMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }, [messages])

    return (
        <div className="px-1 flex-1 overflow-auto no-scrollbar">
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}><Message message={message} /></div>
                ))
            }
            {loading && [...Array(3)].map((_, id) => <MessageSkeleton key={id} />)}
            {!loading &&
                messages.length == 0 &&
                <p>Send a Message to Start Conversation</p>
            }
        </div>
    )
}
