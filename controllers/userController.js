const express = require("express");
const app = express();
const userModel = require('../model/userModel');

class userController{

    static login = (req,res,next) => {
        res.send({"message":"login successfully"})
    }

    static register= async (req,res,next)=>{
        let userDetails = req.body;
        let response = await userModel.insertMany([userDetails])
        // console.log(userDetails);
        res.send({"message":"registration successfully", response})
    }

    static userAllData= async (req,res,next)=>{
        let response = await userModel.find({})
        res.send({"message": "users all data",response}) 
    }

    static delete=(req,res,next)=>{
        res.send("user data deleted") 
    }

    static update=(req,res,next)=>{
        res.send("user data updated") 
    }

}

module.exports=userController