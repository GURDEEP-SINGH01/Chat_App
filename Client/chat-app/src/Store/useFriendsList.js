import { create } from "zustand";

const useFriendsList = create((set) => ({
    friends: [],
    setFriends: (friends) => set({ friends }),
}))

export default useFriendsList;