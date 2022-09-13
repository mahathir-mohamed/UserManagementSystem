const userSchema = require('../Modals/UserSchema');

const UserDeleteController = (req,res)=>{
   userSchema.findByIdAndDelete(req.params.id).then(async docs=>{
      if(!docs){
         res.status(404);
      }else{
         console.log(docs);
         res.redirect('/all-Users');
      }
   }).catch(error=>{
      console.log(error);
   })
}

module.exports = UserDeleteController;