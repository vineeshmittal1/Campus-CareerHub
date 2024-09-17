import React from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "../Navbar_home";
import { Activejobs } from "./Activejobs";
import { Footer } from "../Footer";
import { Cards } from "./Cards";
import axios from "axios";
import { useEffect,useState } from "react";
export function AdminDashboard(){
    const [drive,setDrives]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/company/currentdrives')
        .then(response=>setDrives(response.data))
        .catch(error=>console.error("Error fetching drives : ",error));
    },[])

    const [students,setStudents]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/student/getinfo')
        .then(response=>setStudents(response.data))
        .catch(error=>console.error("Error fetching drives : ",error));
    },[]);

    const [company,setCompany]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/company/getcompany')
        .then(response=>setCompany(response.data))
        .catch(error=>console.error("Error fetching drives : ",error));
    },[]);

    return(
        <>
            <Navbar/>
            <div className="flex mx-1">
                <Sidebar/>
                <div className="grid grid-cols-1 gap-x-10 gap-y-10 mx-4 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:mx-48 lg:gap-x-56">
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Companies</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">{company.length}</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Pending Companies Approval</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Registered Students</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">{students.length}</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Pending Student Confirmation</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Total Drive Post</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">{drive.length}</span>
                </div>
                </div>
                <div class="w-screen h-40 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-neutral-700 dark:text-neutral-700">Total Drive Applications</h5>
                <div class="flex items-baseline text-gray-900 dark:text-neutral-700">
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                </div>
                </div>
                
                </div>
            </div>
            <Footer/>
        </>
    )
}