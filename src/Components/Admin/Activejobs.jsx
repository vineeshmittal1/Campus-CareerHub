import React from "react";
import { AdminDashboard } from "./AdminDashboard";
import { Sidebar } from "./Sidebar";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function Activejobs() {
    const [drives, setDrives] = useState([]);
    const Navigate=useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/company/currentdrives')
            .then(response => setDrives(response.data))
            .catch(error => console.error("Error fetching drives : ", error));
    }, [])

    const HandleViewDrives = (drive)=>{
        Navigate('/admin/viewactivedrives',{ state: { drive } })
    }

    const handleDelete=(driveId)=>{
        axios.delete(`http://localhost:8000/company/deletedrive/${driveId}`)
        .then(response=>{
            console.log(response.data);
            setDrives(drives.filter(drive=>drive._id!==driveId));
        })
        .catch(error=>console.error("Error deleting company: ",error));
    }

    return (
        <>
            <Navbar />
            <div className="flex mx-1">
                <Sidebar />
                <div class="flex flex-col w-svw mt-10 mx-20">
                    <div class="-m-1.5 overflow-x-auto">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                            <div class="border rounded-lg overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date Created</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">View</th>
                                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Delete</th>
                                        </tr>
                                    </thead>
                                    {drives.map((drive) => (
                                        <tbody class="divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{drive.companyName}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">27-10-2023</td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                                    <button onClick={()=>HandleViewDrives(drive)} type="button" class=" inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">View</button>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button onClick={()=>handleDelete(drive._id)} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}