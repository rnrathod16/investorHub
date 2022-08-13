const express = require('express');
const route = express.Router();
const User = require('../models/userSchema');
const Investor = require("../models/investorSchema");
const bcrypt = require('bcryptjs');
const middleware = require('./middleware');

route.get('/', (req, res) => {
    res.send("router");
})

route.post('/signup', async(req, res) => {
    const { firstname, lastname, email, address, password } = req.body;

    try {
        if (!firstname || !lastname || !email || !address || !password) {
            return res.status(401).json({ message: "Enter All the fields" });
        }

        const result = await User.findOne({ email });

        if (result) {
            return res.status(401).json({ message: "Email already Exits" });
        }

        const inserted = new User({ firstname, lastname, email, address, password });

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


//------------------------------Investor

route.post('/investor/signup', async(req, res) => {
    const { firstname, lastname, email, address, password } = req.body;

    try {
        if (!firstname || !lastname || !email || !address || !password) {
            return res.status(401).json({ message: "Enter All the fields" });
        }

        const result = await Investor.findOne({ email });

        if (result) {
            return res.status(401).json({ message: "Email already Exits" });
        }

        const inserted = new Investor({ firstname, lastname, email, address, password });

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

route.post("/investor/signin", async(req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) {
            return res.status(401).json({ message: "Enter all the fields" });
        }

        const result = await Investor.findOne({ email });

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

module.exports = route;