//const userModel =require('../models/userModel');

const getUserList= async (req,res)=>{
    try {
      const emp =  await Employee.find();
        res.send(emp); 
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getUserList}