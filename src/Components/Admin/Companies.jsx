import React from "react";
import { AdminDashboard } from "./AdminDashboard";
import { Sidebar } from "./Sidebar";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import { Pagination } from "../Pagination";
import axios from "axios";
import { useEffect,useState } from "react";
import { Section } from "lucide-react";
function handlePageChange(event, newPage) {
    event.preventDefault();
    // Add your logic to change the page here
    console.log(`Changing to page ${newPage}`);
}



export function Companies() {
    const currentPage = 1;

    const [companies,setCompany]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/company/getcompany')
        .then(response=>setCompany(response.data))
        .catch(error=>console.log("error ",error));
    },[]);  

    const handleDelete=(companyId)=>{
        axios.delete(`http://localhost:8000/company/delete/${companyId}`)
        .then(response=>{
            console.log(response.data);
            setCompany(companies.filter(company=>company._id!==companyId));
        })
        .catch(error=>console.error("Error deleting company: ",error));
    }

    return (
        <>
            <Navbar />
            <div className="flex mx-1">
                <Sidebar />
                <div class="w-screen py-2 overflow-x-auto sm:-mx-6 mt-8  sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                    <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                        <table class="min-w-full">
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Company</th>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm break-words leading-4 text-blue-500 tracking-wider">Email</th>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">City</th>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">State</th>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Contact Number</th>
                                    <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {companies.map((company)=>(
                                    <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div class="flex items-center">
                                                <div>
                                                    <div class="text-sm leading-5 text-gray-800">{company.companyName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div class="text-sm leading-5 text-blue-900">{company.email}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{company.city}</td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{company.state}</td>
                                        
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{company.contactNumber}</td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <button onClick={()=>handleDelete(company._id)} class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
