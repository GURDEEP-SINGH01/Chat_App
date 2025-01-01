const Conversation = require('../Model/Conversation');
const Messages = require('../Model/Messages');
const { getReceiverSocketId, io } = require('../socket/socket');

exports.sendMessages = async (req, res) => {
    try {
        const { receiverId, content, media = null } = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Messages({
            senderId,
            receiverId,
            content,
            media
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        //socket io func

        //Promise all runs both function asynchonusly
        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId)
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        res.status(201).json(newMessage);
    } catch (err) {
        console.log("Error occured", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getMessages = async (req, res) => {
    try {
        const { receiverId } = req.body;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate('messages')
        res.send(conversation.messages);
    } catch (err) {
        console.log("Err:-", err);
        res.send({ error: "Error getting Message" });
    }
}


