const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; // easier as we'll be defining many schemas

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MONGO CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('OH NO MONGO ERROR!');
        console.log(err);
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const Product = mongoose.model('Product', productSchema);

// ONE-FEW
Product.insertMany([
    {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
    {name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer'},
    {name: 'Asparagus', price: 3.99, season: 'Spring'}
])


// ONE-MANY
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}] // refer to which model?
})

const Farm = mongoose.model('Farm', farmSchema);

const makeFarm = async() => {
    const farm = new Farm({name: 'Full Belly Farms', city: 'Guinda, CA'});
    const melon = await Product.findOne({name: 'Goddess Melon'});
    farm.products.push(melon);
    await farm.save();
}
//makeFarm();

const addProduct = async() => {
    const farm = await Farm.findOne({name: 'Full Belly Farms'});
    const watermelon = await Product.findOne({name: 'Sugar Baby Watermelon'});
    farm.products.push(watermelon);
    await farm.save();
}
//addProduct();

// populate farms with all products
Farm.findOne({name: 'Full Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm));



// ONE-BAJILLIONS
const userSchema = new Schema({
    username: String,
    age: Number
})
const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async() => {
    const user = new User({username: 'chickenfan99', age: 61});
    const tweet1 = new Tweet({text: 'I love silky chickens!', likes: 11});
    const tweet2 = new Tweet({text: 'bok bok bok my chickens are noisy', likes: 3});
    tweet1.user = user;
    tweet2.user = user;
    user.save();
    tweet1.save();
    tweet2.save();
}
//makeTweets(); 

const findTweet = async() => {
    const t = await Tweet.findOne({}).populate('user', 'username'); // only save username
    console.log(t)
}
//findTweet();





// MONGO RELATIONS with EXPRESS
const relFarmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: String,
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product' // refers to the Product model
        }
    ]
})

const relFarm = mongoose.model('relFarm', relFarmSchema);

const new_farm_and_product = async() => {
    const product = new Product({name: 'Sugar Mommy Melon', price: 8.0, season: 'Winter'});
    product.save();
    const farm = new relFarm({name: "Good Ol' Farm", city: 'LA', email: 'horny@gmail.com'});
    farm.products.push(product); // if not a list, can do "farm.product = product"
    farm.save()
}
//new_farm_and_product();

// what happens if you delete a 'relFarm'? let's all its products go away with it...
const delete_farm_and_product = async() => {
    const farm = await relFarm.findOne({});
    const product_id = farm.products[0];
    await Product.findByIdAndDelete(product_id);
    await relFarm.findOneAndDelete(farm);
}
//delete_farm_and_product();

module.exports = relFarm;



