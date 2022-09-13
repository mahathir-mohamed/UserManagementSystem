const express = require('express');
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    FirstName:{
        type:String,
    },
    LastName:{
        type:String,
    },
    Email:{
        type:String,
        unique:true,
    },
    Password:{
        type:String,
    }
})

const userSchema = new mongoose.model('Users',UserSchema);
module.exports = userSchema;