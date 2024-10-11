const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

router.post('/', async(req, res)=>{
    try {
        const user = await Admin.findOne({ adminEmail: req.body.adminEmail });
        if(user){
            return res.status(409).send({
                message: "Email is already exist"
            });
        }        

        const hasPassword = await bcrypt.hash(req.body.adminPassword, 10);
        console.log(req.body);
        
        await new Admin({
            ...req.body,
            adminPassword: hasPassword
        }).save();

        res.status(201).send({
            message: "User created successfully"
        });
    } 
    catch (error) 
    {        console.log(error);
    
        res.status(500).send({
            message: "Internal Server Error"
        });
    }
});

// get by email
router.get('/email/:useremail', async(req, res)=>{
    try {
        const user = await Admin.findOne({ adminEmail: req.params.useremail }); 
        console.log(user);
         
        res.json(user);
    } 
    catch (err) {
        res.status(500).json({ message: 'Error fetching user by email' });
    }
});

module.exports = router;

