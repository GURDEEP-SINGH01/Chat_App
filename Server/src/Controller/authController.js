const User = require('../Model/Users');
const bcrypt = require('bcryptjs');
exports.signUp = async (req, res) => {
    try {
        const { email, username, password, confirmPassword } = req.body;

        if (password != confirmPassword) {
            res.send(400), json({ error: "Passwords don't match" })
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