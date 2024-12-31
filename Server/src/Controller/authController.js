const User = require('../Model/Users');
const bcrypt = require('bcryptjs');
const { generateTokenAndSetCookie } = require('../utils/generateToken');

exports.signUp = async (req, res) => {
    try {
        const { email, username, password, confirmPassword } = req.body;

        if (password != confirmPassword) {
            return res.send(400).json({ error: "Passwords don't match" })
        }

        //HASH Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = new User({
            email,
            username,
            password: hashPassword,
            confirmPassword,
        });

        if (user) {
            generateTokenAndSetCookie(user._id, res);
            const newUser = await user.save();
            res.status(201).send({ message: 'created', newUser });
        }

    } catch (err) {
        console.log('error', err);
        res.status(400).send({ error: err.message })
    }
}

exports.signIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        const isCorrectPassword = await bcrypt.compare(password, user?.password || "");
        if (!user || !isCorrectPassword) {
            return res.status(400).json({ success: false, message: 'Invalid username or password' });
        }
        generateTokenAndSetCookie(user._id, res);
        res.json({
            _id: user._id,
            username: user.username,
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};
exports.signOut = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out succesfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
}