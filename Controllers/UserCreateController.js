const userSchema =require("../Modals/UserSchema");
const UserCreateController = async (req,res)=>{
  const User = new userSchema({
     FirstName:req.body.FirstName,
     LastName:req.body.LastName,
     Email:req.body.Email,
     Password:req.body.Password
  });
  await User.save();
  res.render("UserForm");
}

module.exports = UserCreateController;