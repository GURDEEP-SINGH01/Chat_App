const User = require('../Model/Users');

exports.getFriends = async (req, res) => {
    try {
        const { senderId } = req.body
        const user = await User.findOne({ _id: senderId });
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
        const { senderId, receiverId } = req.body;
        const sender = await User.findOne({ _id: senderId });
        const receiver = await User.findOne({ _id: receiverId });

        if (!sender || !receiver) {
            res.status(404).json({ message: "User not Found" });
        }
        if (!sender.friends.includes(receiverId)) {
            sender.friends.push(receiverId);
            await sender.save();
            console.log(sender);
        }

        if (!receiver.friends.includes(senderId)) {
            receiver.friends.push(senderId);
            await receiver.save();
            console.log(receiverId);
        }

        res.json({ message: "Friend added" });
    } catch (error) {
        console.log("Err", error)
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
