import React, { useState } from 'react';
import { BarChart, Wallet, Newspaper, Paperclip, Wrench } from 'lucide-react';
import { Navbar } from '../Navbar_home';
import { Footer } from '../Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export function SSidebar(props) {
  const location = useLocation();
  // const dat = location.state.email;
  // console.log(dat+"h");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
   const navigate=useNavigate();
  return (
    <>
      <div className="flex">
        {/* Sidebar Toggle Button */}
        <button
          className="p-2 text-gray-600 lg:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 w-64 bg-white border-r px-5 py-8 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col lg:overflow-y-auto`}
        >
          <a >
            <h2 className="text-lg font-bold mx-6">Welcome&nbsp;&nbsp;{props.userData}</h2>
          </a>
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6">
              <div className="space-y-9 mx-3">
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => navigate('/student/editprofile')}
                  //  href="/student/editprofile"
                >
                  <BarChart className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Edit Profile</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                 
                  onClick={() => navigate('/student/activedrives')}
                  //  href="/student/activedrives"

                >
                  <Wallet className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Active Drives</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => navigate('/student/myapplications')}
                  //  href="/student/myapplications"
                >
                  <Newspaper className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">My Applications</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                 
                  onClick={() => navigate('/student/settings')}
                  //  href="/student/settings"
                >
                  <Paperclip className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">Settings</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => navigate('/')}
                >
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium"
                 >
                    Logout</span>

                </a>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
