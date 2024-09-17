import React from "react";
import axios from "axios";
export function SForms() {
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState(""); 
    const [email, setEmail] = React.useState("");
    const [phonenumber, setPhonenumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [quali,setQuali]=React.useState("");
    const [Stream,setStream]=React.useState("");
    const [city,setCity]=React.useState("");
    const [state,setState]=React.useState("");
    const [hsc,setHsc]=React.useState("");
    const [ssc,setSsc]=React.useState("");
    const [ug,setUg]=React.useState("");
    const [Address,setAddress]=React.useState("");
    const [skills,setSkills]=React.useState("");
    const[data,setData]=React.useState("");
    const OnSubmitt = (e) => {
        e.preventDefault();
        console.log(firstname, lastname, email, phonenumber, password, quali,Stream,city,state,hsc,ssc,ug,Address,skills);
        axios
            .post("http://localhost:8000/studentinfo", {
                firstname,
                lastname,
                email,
                phonenumber,
                password,
                quali,
                Stream,
                city,
                state,
                hsc,
                ssc,
                ug,
                Address,
                skills
            })
            .then((res) => {
                   setData("Profile Updated");
                   alert("profile updated");
                   Navigate("/student");
                console.log(res.data);
            })
    }
    return (
        <>
            <div className="mx-10">
                <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                        >
                            First Name
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your first name"
                            id="fname"
                             onChange={(e) => setFirstname(e.target.value)}
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="Lname"
                           
                        >
                            Last Name
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Last name"
                            id="Lname"
                            onChange={(e) => setLastname(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="number"
                        
                        >
                            Contact Number
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Contact number"
                            id="name"
                            onChange={(e) => setPhonenumber(e.target.value)}
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
                            htmlFor="qualification"
                        >
                            Highest Qualification
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Highest Qualification"
                            id="qualification"
                            onChange = {(e) => setQuali(e.target.value)}
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="stream"
                        >
                            Stream
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Stream"
                            id="stream"
                            onChange = {(e) => setStream(e.target.value)}
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
                            onChange = {(e) => setCity(e.target.value)}
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
                            onChange = {(e) => setState(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="hsc"
                        >
                            HSC
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your high school marks"
                            id="hsc"
                            onChange = {(e) => setHsc(e.target.value)}
                        ></input>
                    </div>
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="ssc"
                        >
                            SSC
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Intermediate marks"
                            id="ssc"
                            onChange = {(e) => setSsc(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className="flex gap-11">
                    <div className="w-full mt-5 ">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="ssc"
                        >
                            UG Grade
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your UG Grade"
                            id="gsc"
                            onChange = {(e) => setUg(e.target.value)}
                        ></input>
                    </div><form class="w-full mt-5">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <label for="file-input" class="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4
                "/>
                    </form>
                </div>

                <div className="flex gap-11">
                    
                    <div class="w-full mt-5">
                        <label for="textarea-label" class="block text-sm font-medium mb-2">Address</label>
                        <textarea id="textarea-label" class="py-3 px-4 block w-full border-2 border-black/30 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="2" placeholder="Enter your Address"
                        onChange = {(e) => setAddress(e.target.value)}>
                        
                        </textarea>
                    </div>

                    <div class="w-full mt-5">
                        <label for="textarea-label" class="block text-sm font-medium mb-2">Skills</label>
                        <textarea id="textarea-label" class="py-3 px-4 block w-full border-2 border-black/30 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="2" placeholder="Enter your Skills"
                        onChange = {(e) => setSkills(e.target.value)}>
                        {/* onChange ={(e)=>setSkills(e.target.value)} */}
                        </textarea>
                      
                    </div>
                       
               
                </div>
                  <button type="button" class="mt-5 mx-30 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={OnSubmitt}>
                    Update profile
                    </button>
                    {data && <p style={{ marginTop: '10px' }}><strong>{data}</strong></p>}
            </div>
        </>
    )
}