import React from "react";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import { CSidebar } from "./CSidebar";
export function CDriveapplication() {
    return (
        <>
            
            <Navbar/>
            <div className="flex mx-5">
                <CSidebar/>
                <div class="flex flex-col w-full h-36 bg-white border shadow-sm rounded-xl">
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-gray-800">
                            Ayush Krishna
                        </h3>
                        <p class="mt-2 text-gray-500">
                            Btech | Skills
                        </p>
                        <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none" href="/company/showdetails">
                            Details
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}