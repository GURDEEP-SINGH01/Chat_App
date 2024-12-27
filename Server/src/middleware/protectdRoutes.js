const jwt = require('jsonwebtoken');
const Users = require('../Model/Users');

exports.protectedRoutes = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized -No Token Provided" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({ error: "Unauthorized -Token Invalid" });
        }
        const user = await Users.findById(decode.userId).select("-password");
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}