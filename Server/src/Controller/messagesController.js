const Messages = require('../Model/Messages')

exports.sendMessages = async (req, res) => {
    try {
        const { sender, receiver, content, media = null } = req.body;
        const newMessage = new Messages({
            sender,
            receiver,
            content,
            media
        })
        const messageData = await newMessage.save();
        res.send({ status: "Message added Successfully:", message: messageData });
    } catch (err) {
        console.log("Error occured", err);
        res.send({ status: "Error sending Message" });
    }
}

exports.getMessages = async (req, res) => {
    try {
        const { sender, receiver } = req.body;
        const getMessages = await Messages.find({
            $or: [
                { sender: sender, receiver: receiver },
                { sender: receiver, receiver: sender },
            ]
        }).sort({ timestamp: 1 });
        const allMessages = getMessages.map((id) => id.content);
        res.send({ Messages: allMessages });
    } catch (err) {
        console.log("Err:-", err);
        res.send({ status: "Error getting Message" });
    }
}


