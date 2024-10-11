const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});    
    res.json(products);
  } 
  catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// get product by id
router.get('/productdetails/:id' , async(req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });  
    res.json(product);
  } 
  catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
})

router.get('/addtocart/:ID' , async(req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });  
    res.json(product);
  } 
  catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
})

// search categoty
router.get('/searchproduct/:text' , async (req, res)=>{
  try {  
    const products = await Product.find({
      productName : {  $regex : req.params.text  }
    });
    res.json(products);
  } 
  catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// add product
router.post('/add/product', async(req, res)=>{
  try {  
    await new Product({
      ...req.body,
    }).save();
    res.send("produt added")
  } 
  catch (error) {
    res.status(500).json({ message: 'product not add' });
  }
});
    
// update product
router.patch('/editproduct/:editID' , async (req, res)=>{
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.editID }, // Query to find the product by ID
      { $set: req.body },         // Update the product with the data from the request body
      // { new: true }               // Return the updated document
    );
    res.json(updateProduct);
    console.log(updateProduct);
    
  } 
  catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// delete product
router.delete('/deleteproduct/:deleteID' , async (req, res)=>{
  try {  
    const deleteProduct = await Product.deleteOne({ _id: req.params.deleteID });
    console.log(deleteProduct);
    
    res.send("product deleted" ,deleteProduct);
  } 
  catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
}); 

module.exports = router;


