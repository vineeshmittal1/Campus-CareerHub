// SApply.js
import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import NoteContext from "../../context/noteContext";

export function SApply() {
    const a= useContext(NoteContext);
   
    
    const drive = a.s2; 
    console.log(drive);
    const dd=a.state.email;
    const [student, setStudent] = useState();
    const [elig, setElig] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {

        axios.get('http://localhost:8000/student/getinfo?email='+dd+'' )
            .then(res => setStudent(res.data))
            .catch(err => console.log("Error fetching student: ", err));
    }, [drive]);
    useEffect(() => {
        if(a.state.login===false)
        {
          alert("logged out");
          navigate('/login');
        }
    },[a.state])
    
    console.log(student);
    const HandleEligibilityCheck = () => {
        console.log("Student UG:", student[0].ug);
        console.log("Student Qualification:", student[0].quali);
        console.log("Drive Eligibility Criteria:", drive.eligibilityCriteria);
        console.log("Drive Qualification:", drive.qualification);
        if (student[0].ug >= drive.eligibilityCriteria && student[0].quali === drive.qualification) {
            alert("You are eligible for the role");
            setElig(1);
        } else {
            alert("You are not eligible for the drive");
        }
    };

    const HandleApplyNow = () => {
        if (elig === 1) {
            alert("Applied for the drive");
              axios.post('http://localhost:8000/student/appliedcompany', {
                email: dd,
                companyName: drive.companyName,
              })
              .then(res => console.log(res.data))
              .catch(err => console.log("Error fetching student: ", err));
            navigate("/student/activedrives");
        } else {
            alert("Sorry, you are not eligible for the drive");
        }
    };

    if (!drive) {
        return <div>No drive information available.</div>; 
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-5 mb-5">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div className="p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 mb-4 text-gray-900">
                            <path fillRule="evenodd"
                                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                clipRule="evenodd"></path>
                            <path
                                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
                            </path>
                        </svg>
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {drive.companyName}
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Role: {drive.role} <br />
                            Location: {drive.location} <br />
                            Stipend: {drive.ctc}/month <br />
                            Eligibility: {drive.eligibilityCriteria} CGPA <br />
                            Qualification: {drive.qualification}
                        </p>
                    </div>
                    <div className="flex">
                        <div className="p-6 pt-0">
                            <a  className="inline-block">
                                <button onClick={HandleEligibilityCheck}
                                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                    type="button">
                                    Check Eligibility
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                        stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                        <div className="p-6 pt-0">
                            <a className="inline-block">
                                <button onClick={HandleApplyNow}
                                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                    type="button">
                                    Apply Now
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                        stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
