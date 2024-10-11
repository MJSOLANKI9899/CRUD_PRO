const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        
        const user = await Admin.findOne({ adminEmail: req.body.adminEmail });
        
        if (!user) {
            return res.status(401).send({
                message: "Invalid Email Or Password"
            });
        }

        const validPassword = await bcrypt.compare(req.body.adminPassword, user.adminPassword);
        if (!validPassword) {
            return res.status(401).send({
                message: "Invalid Password"
            });
        }

        const generateAuthToken = async (user) => {
            const token = jwt.sign({ _id: user._id }, process.env.JWTKEY);
            return token;
        };

        const token = await generateAuthToken(user);

        res.status(200).send({
            data: token,
            message: "Logged in successfully"
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).send({
            message: "Internal Server Error"
        });
    }
});

module.exports = router;

