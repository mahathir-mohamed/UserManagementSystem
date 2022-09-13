const mongoose = require('mongoose');
const User = require('../Modals/UserSchema');

const UserReadController = async (req,res)=>{
   User.find((err,docs)=>{
      if(err){
         console.log(err);
      }else{
         console.log(docs);
         res.render('UserList',{data:docs});
      }
   });
}


module.exports = UserReadController;