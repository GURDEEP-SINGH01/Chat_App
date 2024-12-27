const User = require('../Model/Users');

exports.getFriends = async (req, res) => {
    try {
        const { sender } = req.body
        const user = await User.findOne({ _id: sender });
        const friendsList = await Promise.all(
            user.friends.map((friend) => User.findOne({ _id: friend }))
        );
        res.status(200).json(friendsList);
    } catch (error) {
        console.log("Err", error)
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.addFriends = async (req, res) => {
    try {
        const { sender, receiver } = req.body;
        const senderId = await User.findOne({ _id: sender });
        const receiverId = await User.findOne({ _id: receiver });

        if (!senderId || !receiverId) {
            res.status(404).json({ message: "User not Found" });
        }
        console.log(senderId);
        if (!senderId.friends.includes(receiver)) {
            senderId.friends.push(receiver);
            await senderId.save();
            console.log(senderId);
        }

        if (!receiverId.friends.includes(sender)) {
            receiverId.friends.push(sender);
            await receiverId.save();
            console.log(receiverId);
        }

        res.json({ message: "Friend added" });
    } catch (error) {
        console.log("Err", error)
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
