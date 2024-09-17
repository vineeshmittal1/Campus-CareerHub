import React, { useEffect,useState } from "react";
// import { CDriveCards } from "./CDriveCards";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import { response } from "express";
export function Adminactivedrive() {

    // const [drives,setDrives]=useState([]);

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/company/currentdrives')
    //     .then(response=>setDrives(response.data))
    //     .catch(error=>console.error("Error fetching drives : ",error));
    // },[]);

    const location = useLocation();
    const drive = location.state?.drive; 
    if (!drive) {
        return <div>No drive information available.</div>; // Handle case when drive is not available
    }
    return (
        <>
        
            <Navbar />

            <div className="flex mx-1">
                <Sidebar />
                <div>
                    <h1 className="mx-10 mt-8 text-2xl font-bold">Active Drives</h1>
                    {/* <CDriveCards/> */}
                    {/* {drives.map((drive)=>( */}
                        <div className="relative w-full mx-10 mr-7 mt-10 h-48 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex-row">
                            <div
                                className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img
                                    src="https://banner2.cleanpng.com/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg"
                                    alt="card-image" className="object-cover w-auto h-full" />
                            </div>
                            <div className="p-4">
                                <h6
                                    className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                                    {drive.companyName}
                                </h6>
                                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Role-{drive.role} | Location-{drive.location} | Stipend-{drive.ctc}/month | Eligibility-{drive.eligibilityCriteria} CGPA
                                </h4>
                            </div>
                        </div>
                    {/* ))} */}
                </div>
            </div>
            <Footer />
        </>
    )
}