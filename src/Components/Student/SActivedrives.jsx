// SActivedrives.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import { SSidebar } from "./SSidebar";
import { useContext } from "react";
import NoteContext  from "../../context/noteContext";

export function SActivedrives() {
    const a=useContext(NoteContext);
    const dd=a.state.email;
    const [drives, setDrives] = useState([]);
    const navigate = useNavigate();
   const[info,setInfo]=useState([]);
   const [isvalue, setIsValue] = useState(false); 
    


   useEffect(() => {
    if(a.state.login===false)
    {
      alert("logged out");
      navigate('/login');
    }
},[a.state])

    useEffect(() => {
        axios.get('http://localhost:8000/company/currentdrives')
            .then(response => setDrives(response.data))
            .catch(error => console.error("Error fetching drives : ", error));

            axios.get('http://localhost:8000/student/getinfo?email='+dd+'')
            .then(response => setInfo(response.data))
            .catch(error => console.error("Error fetching drives : ", error));
          
    }, [dd]);    

    const handleApplyClick = (drive) => {
        a.s2.companyName=drive.companyName;
        a.s2.ctc=drive.ctc;
        a.s2.eligibilityCriteria=drive.eligibilityCriteria;
        a.s2.role=drive.role;
        a.s2.location=drive.location;
        a.s2.qualification=drive.qualification;
        console.log(a.s2);
        navigate("/student/viewjob", { state: { drive } });
    };
    return (
        <>
           
            <Navbar />
            <div className="flex mx-5">
                <SSidebar />
                <div>
                    <h1 className="mx-10 mt-8 text-2xl font-bold">Active Drives</h1>
                    {
                    drives.map((drive) => (

                         
                        <div key={drive.id} className="relative w-full mx-10 mr-7 mt-10 h-48 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex-row">
                            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img
                                    src="https://banner2.cleanpng.com/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg"
                                    alt="card-image"
                                    className="object-cover w-auto h-full"
                                />
                            </div>
                            <div className="p-4">
                                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                                    {drive.companyName}
                                </h6>
                                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Role-{drive.role} | Location-{drive.location} | Stipend-{drive.ctc}/month | Eligibility-{drive.eligibilityCriteria} CGPA
                                </h4>
                              { !((info || []).some(studentInfo => studentInfo.company.includes(drive.companyName))) && <button
                                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                    type="button"
                                    onClick={() => handleApplyClick(drive)}
                                  >
                                    Apply Now
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                                }
                                {
                                  ((info || []).some(studentInfo => studentInfo.company.includes(drive.companyName))) && <button
                                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                  type="button"
                                >
                                  Applied
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                  </svg>
                              </button>

                                }
                                
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
