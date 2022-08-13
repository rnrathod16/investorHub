const jwt = require('jsonwebtoken');
const User = require("../models/userSchema");

const middleware = async(req, res, next) => {

    try {

        const token = req.cookies.jwtoken;
        const verifyToken = await jwt.verify(token, process.env.SECRET_KEY);

        const result = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!result) {
            throw new Error("Token Not Verified");
        }

        req.rootUser = result;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid Token not verify" });
    }

}

module.exports = middleware;