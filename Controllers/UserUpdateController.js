const userSchema = require('../Modals/UserSchema');

const UserUpdateController = (req,res)=>{
    userSchema.findByIdAndUpdate(req.params,{
      FirstName:req.body.FirstName,
      LastName:req.body.LastName,
      Email:req.body.Email,
      Password:req.body.Password
    }).then((docs)=>{
        res.redirect('/all-Users');
         console.log(docs);
    }).catch(err => {
       res.status(500).send(err.message);
    })
}

module.exports = UserUpdateController;