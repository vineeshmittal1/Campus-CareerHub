const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const companyroute = require("./routes/companyroutes");
const studentroute = require("./routes/student");
const mongoose = require('mongoose');
const {protect, authorize}=require('./middleware/auth');
const cookieParser = require('cookie-parser');
// const dotenv = require('dotenv');

mongoose.connect('mongodb://127.0.0.1:27017/placement').then((e)=>console.log("Mongodb connected"));

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
// app.use(cors())
const corsOptions = {
    origin: '*', // Your frontend URL
    credentials: true, // Allow credentials (cookies)
  };
  app.use(cors(corsOptions));;
app.use(cookieParser());
 
const PORT= process.env.PORT || 8000;

// app.get("/f", (req, res) => {
//     console.log("hello");
// })
app.use('/student', studentroute);
app.use('/company', companyroute);

app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`));
