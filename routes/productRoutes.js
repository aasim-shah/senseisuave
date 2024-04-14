const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, getProductDetails } = require('../controllers/productController');
const { upload } = require('../utils/multer');



router.get('/new', (req,res)=>{
    res.render("newProduct")
});
router.post('/', upload.single('image'), addProduct);
router.get('/', getAllProducts);
router.get('/:productId', getProductDetails);

module.exports = router;
