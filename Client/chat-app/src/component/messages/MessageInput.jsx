import useSendMessages from "../../hooks/useSendMessages";
import { useState } from "react"
import { BsSend } from "react-icons/bs"

export const MessageInput = () => {
    const [message, setMessage] = useState('');
    const { loading, sendMessage } = useSendMessages();
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage('')
    }

    return (
        <form className="px-4 pb-1 mt-0">
            <div className="w-full relative flex flex-col">
                <input
                    type="text"
                    className="w-full rounded-lg block p-1"
                    placeholder="Send a message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="absolute end-0 flex items-center pe-2 pt-2"
                    onClick={handleSendMessage}
                >
                    <BsSend />
                </button>
            </div>
        </form>

    )
}
