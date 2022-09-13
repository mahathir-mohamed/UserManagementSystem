const userSchema = require('../Modals/UserSchema');

const UserEditController = async (req,res)=>{
   userSchema.findOne({_id:req.params.id},(err,docs)=>{
      if(err){
         console.log(err);
      }else{
         res.render('EditUserForm',{data:docs})
      }
   })
}

module.exports = UserEditController;