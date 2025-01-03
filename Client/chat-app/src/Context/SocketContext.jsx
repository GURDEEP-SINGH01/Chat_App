import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const SocketContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState();
    const [onlineFriends, setOnlineFriends] = useState([]);
    const { authUser } = useAuthContext()

    useEffect(() => {
        if (authUser) {
            const socket = io('ec2-35-154-199-39.ap-south-1.compute.amazonaws.com:9000', {
                query: {
                    userId: authUser.data._id
                }
            })
            setSocket(socket);

            socket.on('onlineFriends', (users) => {
                setOnlineFriends(users)
            })
            return () => socket.close()
        } else {
            if (socket) {
                socket.close();
                setSocket(null)
            }
        }
    }, [authUser])
    return <SocketContext.Provider value={{ socket, onlineFriends }} > {children}</ SocketContext.Provider>
}

SocketContextProvider.propTypes = {
    children: PropTypes.node,
};