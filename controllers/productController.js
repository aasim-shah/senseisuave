const Product = require('../models/productModel');

const addProduct = async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    const { name, description, price } = req.body;
    try {
        const newProduct = new Product({ title : name, description, price,  imageUrl : `/uploads/${req.file.filename}` });
        await newProduct.save();
        res.redirect("/")
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductDetails = async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
       res.render("productDetails" , { product});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addProduct,
    getAllProducts,
    getProductDetails
};
