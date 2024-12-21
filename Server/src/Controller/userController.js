const User = require('../Model/Users');

exports.signUp = async (req, res) => {
    try {
        const user = new User({
            email: req.body.email, username: req.body.name, password: req.body.password, friends: []
        });
        const newUser = await user.save();
        res.status(201).send({ message: 'created', newUser });
    } catch (err) {
        console.log('error', err);
        res.status(400).send({ message: err.message })
    }
}

exports.signIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ success: true, message: 'Sign-in successful', body: user });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getFriends = async (req, res) => {
    try {
        const { getConnectedFriends } = req.params
        const friendsList = []
        const user = await User.findOne({ _id: getConnectedFriends });
        for (const friend of user.friends) {
            const userFriend = await User.findOne({ _id: friend });
            friendsList.push(userFriend);
        }
        res.status(200).json(friendsList);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
