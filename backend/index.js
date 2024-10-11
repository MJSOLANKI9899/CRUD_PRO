const express = require('express');
const cors = require('cors');
const { connectMongodb } = require('./db');
require('dotenv').config();

const productRoute = require('./routes/product');
const adminRoute = require('./routes/admin');
const adminAuthRoute = require('./routes/adminAuth');

connectMongodb("mongodb+srv://23010101257:Mitesh#9899@mjsolanki18.pao0d.mongodb.net/CRUD_PROJECT")
.then(()=> { console.log("MONGODB IS CONNECTED") })
.catch((error)=> {console.log("Your Error => " , error) });

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoute);
app.use('/admin', adminRoute);
app.use('/admin/adminauth', adminAuthRoute);

app.listen(process.env.PORT , (req , res)=>{
    console.log(`server started at @ ${process.env.PORT}`);
});