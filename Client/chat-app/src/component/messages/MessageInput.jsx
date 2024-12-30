import { BsSend } from "react-icons/bs"

export const MessageInput = () => {
    return (
        <form className="px-4 pb-1 mt-0">
            <div className="w-full relative flex flex-col">
                <input
                    type="text"
                    className="w-full rounded-lg block p-1"
                    placeholder="Send a message"
                />
                <button type="submit" className="absolute end-0 flex items-center pe-2 pt-2">
                    <BsSend />
                </button>
            </div>
        </form>

    )
}
