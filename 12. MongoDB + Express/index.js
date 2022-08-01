/*
npm init -y
npm i express ejs mongoose connect-mongo
nodemon setup.js
*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/farmStand';

const Product = require('./models/product');

mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR"));
db.once("open", () => {
    console.log("DATABASE CONNECTED");
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); // so that req.body isn't undefined
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
    // 1st check if there's a query string
    const {category} = req.query;
    if (category){
        const products = await Product.find({category})
        res.render('products/index', {products, category})
    }else{
        // if no query string, set category to 'All'
        const products = await Product.find({});
        res.render('products/index', {products, category: 'All'});
    }
})

const categories = ['fruit', 'vegetable', 'dairy'];
app.get('/products/new', async(req, res) => {
    res.render('products/new', {categories});
})

app.post('/products', async(req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', {product});
})

app.get('/products/:id/edit', async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    console.log('HELLO '+product.category);
    res.render('products/edit', {product, categories});
})

app.put('/products/:id', async(req, res) => {
    console.log(req.body);
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async(req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})