const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const SignupSchema=new mongoose.Schema({
    name:{
        type:"String"
    },
    email:{
        type:"String",
        unique: true,
    },
    password:{
        type:"String",
        minlength: 6,
    },
    type:{
        type:"String"
    }
})

SignupSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})

SignupSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

module.exports=mongoose.model("signup",SignupSchema)
