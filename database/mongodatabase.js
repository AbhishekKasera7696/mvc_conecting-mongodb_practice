const mongoose=require("mongoose")

class Connection{
    constructor()
    {
        this.mongodbConnection()
    }


    mongodbConnection(){

        //it containe only url
        mongoose.connect("mongodb://localhost:27017/myDataBase")

        mongoose.connection.once('open',()=>{
            console.log("database connected succsessfuly");
        })

        mongoose.connection.on('on',()=>{
            console.log("connection issues");
        })
        

    }
}

module.exports=Connection