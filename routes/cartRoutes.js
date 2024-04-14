const express = require('express');
const productModel = require('../models/productModel');
const router = express.Router();

let cart = [];


router.get('/', (req, res) => {
    res.render("cart" , { cart})
});

router.get('/shippment', (req, res) => {
    res.render("shippment")
});



router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        const index = cart.findIndex(item => item.product.id.toString() === productId);

        if (index > -1) {
            cart[index].quantity += 1;  
        } else {
            cart.push({ product, quantity: 1 });  
        }

        console.log(cart);
       res.redirect("/cart")
    } catch (error) {
        console.error('Error accessing the product:', error);
        res.status(500).send({ message: 'Server error' });
    }
});


router.get('/delete/:productId', (req, res) => {
    const { productId } = req.params;
    console.log({productId})
    cart = cart.filter(item => item.product.id.toString() !== productId);
    res.redirect("/cart")
});





router.post('/checkout', (req, res) => {
    cart = [];
    res.status(200).send({ message: 'Checkout successful', cart });
});

module.exports = router;
