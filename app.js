require('dotenv').config();
const express = require('express');
const cors = require('cors');   
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const Product =  require("./models/productModel")
const cookieParser = require('cookie-parser');

require('./utils/db')
const app = express();
const morgan = require("morgan")
app.set('view engine', 'ejs');

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use("/", express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(cookieParser());




app.use('/', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);




app.get("/" ,  async (req,res) =>{
    const products = await Product.find({});
    res.render("homepage" ,{ products})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
