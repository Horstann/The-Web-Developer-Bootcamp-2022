const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('OH NO ERROR!');
        console.log(err);
    })

// this is another way of constructing a schema - to include more info
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // ie. when creating new product, 'name' must be there 
        maxlength: 20 // maxlength of 'name'
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive!']
    },
    onSale: {
        type: Boolean,
        default: false // if not stated, will auto set to falses
    },
    categories: { // a list of strings
        type: [String],
        default: ['cycling']
    },
    qty: { // nested objects
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'] // can only be 1 of them
    }
})

// 1. You can also create INSTANCE methods for your model
// 'this' refers to an instance of the model ie. 1 product
productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}
productSchema.methods.addCategory = function(newCat){
    this.category.push(newCat);
    return this.save();
}
// a function
const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    await foundProduct.toggleOnSale();
    await foundProduct.addCategory('Outdoors');
}
// 2. STATIC method
// 'this' refers to the model itself ie. all products
productSchema.statics.fireSale = function(){
    this.updateMany({}, {onSale: true, price: 0})
}



const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Mountain Bike', price: 599, categories: ['Cycling', 'Safety', 13], qty: {online: 0, inStore: 0}, size: 'M'}) // if u include additional fields, it'll be ignored
bike.save()
    .then(data => {
        console.log("IT WORKED!")
        console.log(data)
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err.errors.name) // narrow down to the error's name
    })

// 'new: true' means show the updated object
// 'runValidators: true' means to check for validation errors
Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 10.99}, {new: true, runValidators: true}) 
    .then(data => {
        console.log("IT WORKED!")
        console.log(data)
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err.errors.name) // narrow down to the error's name
    })


    Product.fireSale().then(res => console.log(res));



