const express = require('express');
const { signup, login } = require('../controllers/userControler');
const router = express.Router();

router.get('/signup', (req,res) =>{
    res.render("signup")
});
router.get('/login', (req,res) =>{
    res.render("login")
});
router.post('/signup', signup);
router.post('/login', login);


module.exports = router;
