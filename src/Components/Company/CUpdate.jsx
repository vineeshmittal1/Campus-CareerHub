import React, { useState } from "react";
import { CSidebar } from "./CSidebar";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import { CBanner } from "./CBanner";
import axios from 'axios'
// import { CForm } from "./CForm";
import { useNavigate } from "react-router-dom";

export function CUpdate() {

    const [companyName, setCompanyName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address, setAdress] = useState("");

    const navigate = useNavigate();

    const HandleUpdateProfile = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/company/updateprofile', {
            companyName, contactNumber, website, email, city, state, address
        })
            .then(res => {
                alert(res.data);
                navigate('/company/dashboard');
            })
            .catch(err => {
                console.log("Error is :", err);
            });

            console.log("chal rha hai"); 
    }


    return (
        <>
            <Navbar />
            <div className="flex mx-5 ">
                <CSidebar />
                <div>
                    <h1 className="mx-10 mt-5 text-2xl font-bold">Update Profile</h1>
                    <h1 className="mx-10 mt-3">In this section you can change your details</h1>
                    <CBanner />
                    <div className="w-full">
                        {/* <CForm/> */}
                        {/* <form onSubmit={HandleUpdateProfile}> */}
                            <div className="mx-10 ">
                                <div className="flex gap-11">
                                    <div className="w-full mt-5 ">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="companyName"
                                        >

                                            Company Name
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter your Company name"
                                            id="companyName"
                                            onChange={(e) => setCompanyName(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="w-full mt-5 ">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="contactNumber"
                                        >
                                            Contact Number
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter your contact number"
                                            id="contactNumber"
                                            onChange={(e) => setContactNumber(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="flex gap-11">
                                    <div className="w-full mt-5 ">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="website"
                                        >
                                            Website
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter your website"
                                            id="website"
                                            onChange={(e) => setWebsite(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="w-full mt-5 ">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter your email"
                                            id="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="flex gap-11">
                                    <div className="w-full mt-5 ">
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="city"
                                        >
                                            City
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter your city"
                                            id="city"
                                            onChange={(e) => setCity(e.target.value)}
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
                                            onChange={(e) => setState(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="flex gap-11">
                                    <div className="w-full mt-5">
                                        <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Address</label>
                                        <textarea id="textarea-label"
                                            onChange={(e) => setAdress(e.target.value)}
                                            className="py-3 px-4 block w-full border-2 border-black/30 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="2" placeholder="Enter your Address"></textarea>
                                    </div>
                                    <div className="w-full mt-5">
                                        <form className="w-full mt-5">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="photo"
                                            >
                                                Profile Photo
                                            </label>
                                            <label htmlFor="file-input" className="sr-only">Choose file</label>
                                            <input type="file" name="photo" id="photo" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4
                "/>
                                        </form>
                                    </div>
                                </div>
                                {/* <button type="button" className="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Update profile
                </button> */}
                            </div>
                            {/* </form> */}
                    </div>
                    <button onClick={HandleUpdateProfile} type="button" className="mt-5 mx-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Update profile
                    </button>
            </div>

        </div >
            <Footer />
        </>
    )
}