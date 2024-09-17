const { Router } = require('express');
const router = Router();
const companyProfile = require("../models/companyprofile");
const companyDrive=require("../models/companyDrive");
const SignupModel = require("../models/signup");

router.post('/updateprofile', async (req, res) => {
    const { companyName, contactNumber, website, email, city, state, address } = req.body;

    try {
        const existingCompany = await companyProfile.findOne({ companyName });

        if (existingCompany) {
            // Company exists, update the details
            existingCompany.contactNumber = contactNumber;
            existingCompany.website = website;
            existingCompany.email = email;
            existingCompany.city = city;
            existingCompany.state = state;
            existingCompany.address = address;

            await existingCompany.save();
            res.json("Profile Updated");
        } else {
            // Company does not exist, create a new profile
            await companyProfile.create({
                companyName,
                contactNumber,
                website,
                email,
                city,
                state,
                address,
            });
            res.json("Profile Created");
        }
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

router.post('/postdrive',async(req,res)=>{
    const {companyName,ctc,eligibilityCriteria,role,location,qualification}=req.body;
    try{
        const existingDrive = await companyDrive.findOne({companyName,role});
        if(existingDrive){
            res.json("Drive in company already exist");
        }
        else{
            await companyDrive.create({
                companyName,
                ctc,
                eligibilityCriteria,
                role,
                location,
                qualification,
            });
            res.json("Drive Created");
        }
    }
    catch(err){
        res.status(400).json("Error: " + err);
    }
})


router.get('/getcompany',async(req,res)=>{
    

})


router.get('/currentdrives',async(req,res)=>{
    try{
        const drives=await companyDrive.find();
        res.json(drives);
    }
    catch(err){
        res.status(400).json("Error : ",err);
    }
})


router.get('/getcompany',async(req,res)=>{
    try{
        const companies=await companyProfile.find();
        res.json(companies);
    }
    catch(err){
        res.status(400).json("Error : ",err);
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const companyId=req.params.id;
        await companyProfile.findByIdAndDelete(companyId);
        res.json({message : 'company deleted succesfully '});
    }
    catch(err){
        res.status(400).json({message:'Error :'+ err});
    }
})

router.delete('/deletedrive/:id',async(req,res)=>{
    try{
        const driveId=req.params.id;
        await companyDrive.findByIdAndDelete(driveId);
        res.json({message : 'company deleted succesfully '});
    }
    catch(err){
        res.status(400).json({message:'Error :'+ err});
    }
})

module.exports = router;
