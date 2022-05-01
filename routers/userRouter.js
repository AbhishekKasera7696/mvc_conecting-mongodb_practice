const router = require("express").Router();
const userController=require("../controllers/userController.js")


 router.post("/login",userController.login)
 router.post("/register",userController.register)
 router.get("/userAllData",userController.userAllData)
 router.put("/userAllData/:id",userController.update)
 router.delete("/userAllData/:id",userController.delete)
 


module.exports=router