const express = require('express');
const router = express.Router();
//const userController = require('../controllers/userController');

router.get('/users',(req,res)=>{
    console.log("hello")
    res.send("hello code improve..")
    
})

// router.get('/list',userController)
// console.log("hello")
module.exports = router;