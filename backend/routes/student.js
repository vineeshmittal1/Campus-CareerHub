const express = require("express");
const router = express.Router();
const studentModel = require("../models/studentinfo");
const SignupModel = require("../models/signup");
const cors=require("cors");
router.use(express.json()); 
router.use(cors()); 
const bcrypt = require('bcryptjs');
const secret="im@yu$#";
const jwt =require("jsonwebtoken");

const sendTokenResponse=(user,statusCode,res)=>{
    const token= jwt.sign({id:user._id,role:user.role},secret,{
        // expiresIN: 30,
    });

    const options={
        expires: new Date(Date.now()+30*24*60*60*1000),
        httpOnly: true,
        // secure: process.env.NODE_ENV
    }
    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        token,
        user
    })
}

router.post('/register', async(req, res) => {
    const { email, name, password, role } = req.body;

    // SignupModel.findOne({ email: email })
    //     .then(user => {
    //         if (user) {
    //             console.log("User already exists");
    //             return res.json("User already exists");
    //         } else {
    //             SignupModel.create({
    //                 name: name,
    //                 email: email,
    //                 password: password,
    //                 type: role
    //             })
    //                 .then(() => res.json("User added"))
    //                 .catch((err) => res.status(400).json("Error: " + err));
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         res.status(500).json("Internal server error");
    //     });
    try {
        const user = await SignupModel.create({
            name: name,
            email: email,
            password: password,
            type: role
        });
    
        res.status(200).json({ success: true, message:"Registered" });      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, error: err.message });
      }
});

router.post('/login', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const user = await SignupModel.findOne({email}).select('+password');
        console.log(user);
    
        if (!user) {
          return res.status(400).json({ success: false, error: 'User not found  ' });
        }
    
        const isMatch = await bcrypt.compare(password,user.password);
    
        if (!isMatch) {
          return res.status(400).json({ success: false, error: 'Invalid credentials' });
        }
    
        sendTokenResponse(user, 200, res);
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
});

router.get('/logout', (req, res) => {
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      data: {},
    });
  });

router.post('/studentinfo', async (req, res) => {
    try {
        const { email, firstname, lastname, phonenumber, password, quali, Stream, city, state, hsc, ssc, ug, Address, skills } = req.body;

        const existingStudent = await studentModel.findOne({ email });

        if (existingStudent) {
            if (firstname != "") existingStudent.firstname = firstname;
            if (lastname != "") existingStudent.lastname = lastname;
            if (phonenumber != "") existingStudent.phonenumber = phonenumber;
            if (password != "") existingStudent.password = password;
            if (quali != "") existingStudent.quali = quali;
            if (Stream != "") existingStudent.Stream = Stream;
            if (city != "") existingStudent.city = city;
            if (state != "") existingStudent.state = state;
            if (hsc != "") existingStudent.hsc = hsc;
            if (ssc != "") existingStudent.ssc = ssc;
            if (ug != "") existingStudent.ug = ug;
            if (Address != "") existingStudent.Address = Address;
            if (skills != "") existingStudent.skills = existingStudent.skills + skills;

            await existingStudent.save();
            return res.json("User information updated successfully");
        } else {
            await studentModel.create({
                firstname: firstname,
                lastname: lastname,
                email: email,
                phonenumber: phonenumber,
                password: password,
                quali: quali,
                Stream: Stream,
                city: city,
                state: state,
                hsc: hsc,
                ssc: ssc,
                ug: ug,
                Address: Address,
                skills: skills
            });
            res.json("User added successfully");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json("Error: " + err.message);
    }
});

router.get('/getinfo',async(req,res)=>{
  try
  {
    const email=req.query.email;
    console.log(email);
    const students=await studentModel.find({email : email});
    console.log(students);
    res.json(students);
  }
  catch(err){
    res.status(400).json("Error : "+err);
  }
})

router.get('/getallstudent',async(req,res)=>{
    try
    {
    //   const email=req.query.email;
    //   console.log(email);
      const students=await studentModel.find();
    //   console.log(students);
      res.json(students);
    }
    catch(err){
      res.status(400).json("Error : "+err);
    }
  })

router.post('/appliedcompany',async(req,res)=>{
 try{
    const email=req.body.email;
    console.log(email);
    const stu=await studentModel.findOne({email:email});
    if(stu){
        stu.company.push(req.body.companyName);
        await stu.save();
        res.json(stu.company);
 }
 else
 {
    res.json("User not found");
 }
}
catch(err){ 
    res.status(400).json("Error : "+err);
}
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        await studentModel.findByIdAndDelete(studentId);
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error: ' + err });
    }
});

module.exports = router;
