const express = require('express');
const route = express.Router();
const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const middleware = require('./middleware');

route.get('/', (req, res) => {
    res.send("router");
})

route.post('/signup', async(req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(401).json({ message: "Enter All the fields" });
        }

        const result = await User.findOne({ email });

        if (result) {
            return res.status(401).json({ message: "Email already Exits" });
        }

        const inserted = new User({ name, email, password });

        const data = await inserted.save();

        if (data) {
            return res.status(201).json({ message: "User Inserted" });
        } else {
            throw new Error();
        }

    } catch (error) {
        console.log(error);
    }
})

route.post("/signin", async(req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) {
            return res.status(401).json({ message: "Enter all the fields" });
        }

        const result = await User.findOne({ email });

        if (!result) {

            return res.status(401).json({ message: "Invalid Crendentials" });

        } else {
            const verifyPass = await bcrypt.compare(password, result.password);

            if (verifyPass) {
                const token = await result.generateAuthToken();

                res.cookie('jwtoken', token, {
                    expires: new Date(Date.now() + 29582000),
                    httpOnly: true
                })

                return res.status(201).json({ message: "Signin Success" });
            } else {
                return res.status(401).json({ message: "Invalid Crendentials" });
            }
        }
    } catch (error) {
        console.log(error);
    }
})

route.get("/about", middleware, (req, res) => {
    res.status(201).json(req.rootUser);
})

route.get("/logout", (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(201).json({ message: "User Logged Out" });
})

module.exports = route;