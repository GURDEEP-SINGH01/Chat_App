import { create } from "zustand";

const useFriendsConversation = create((set) => ({
    selectedFriends: null,
    setSelectedFriends: (selectedFriends) => set({ selectedFriends }),
    messages: [],
    setMessages: (messages) => set({ messages })
}))

export default useFriendsConversation;