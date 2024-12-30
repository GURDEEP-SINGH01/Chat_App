import { MessageContainer } from "../../component/messages/MessageContainer"
import { Sidebar } from "../../component/sidebar/Sidebar"
export const Home = () => {
    return (
        <div className="flex h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]  bg-orange-400 rounded-lg ">
            <Sidebar />
            <MessageContainer />
        </div>
    )
}
