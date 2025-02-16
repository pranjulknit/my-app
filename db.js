import mongoose  from "mongoose";


mongoose.connect("mongodb://localhost:27017").then(()=>console.log("mongodb connected"))
.catch((e)=>{
    console.log(`error in mongodb connection`,e);
})


const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
});

export const user = mongoose.model('user',userSchema)

