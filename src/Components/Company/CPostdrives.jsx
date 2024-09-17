import React, { useState } from "react";
import { CSidebar } from "./CSidebar";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import { CBanner } from "./CBanner";
import { CForm } from "./CForm";
import axios from "axios";
export function CPostdrives(){
    const [companyName,setCompanyName]=useState("");
    const [ctc,setCtc]=useState("");
    const [eligibilityCriteria,setEligibilityCriteria]=useState("");
    const [role,setRole]=useState("");
    const [location,setLocation]=useState("");
    const [qualification,setQualification]=useState("");

    const HandlePostDrive = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:8000/company/postdrive',{
            companyName,ctc,eligibilityCriteria,role,location,qualification
        })
        .then(res=>{alert(res.data)})
        .catch(err=>{console.log("Error is : ",err)});
    }

    return (
        <>
            <Navbar/>
            <div className="flex mx-5 ">
                <CSidebar/>
                <div >
                    <h1 className="mx-10 mt-5 text-2xl font-bold">Post Drive</h1>
                    <h1 className="mx-10 mt-3">In this section you can change your details</h1>
                    <CBanner/>
                    <div className="mx-11">
                    <div className="w-full">
                    <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="cname"
                        >
                            Company Name
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Company name"
                            id="fname"
                            onChange={(e)=>setCompanyName(e.target.value)}
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="ctc"
                        >
                            CTC
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your offered CTC"
                            id="ctc"
                            onChange={(e)=>setCtc(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="eligibility"
                        >
                            Eligibility Criteria
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Eligibility"
                            id="eligibility"
                            onChange={(e)=>setEligibilityCriteria(e.target.value)}
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="role"
                        >
                            Role
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your offered role"
                            id="role"
                            onChange={(e)=>setRole(e.target.value)}
                        ></input>
                    </div>
                </div>
                {/* <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="city"
                        >
                            Qualification
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your qualification required"
                            id="city"
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="state"
                        >
                            State
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your State"
                            id="state"
                        ></input>
                    </div> */}
                {/* </div> */}
                <div className="flex gap-11">
                    <div className="w-full mt-5">
                        <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Location</label>
                        <textarea 
                        onChange={(e)=>setLocation(e.target.value)}
                        id="textarea-label" className="py-3 px-4 block w-full border-2 border-black/30 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="2" placeholder="Enter the Locations where role is offered"></textarea>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="city"
                        >
                            Qualification
                        </label>
                        <input
                            onChange={(e)=>setQualification(e.target.value)}
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your qualification required"
                            id="city"
                        ></input>
                    </div>
                </div>
                    </div>
                    <button type="button" 
                    onClick={HandlePostDrive}
                    className="mt-5 mx-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Create Drive
                    </button>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}