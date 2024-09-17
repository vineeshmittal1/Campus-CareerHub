import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import Connectus  from "./Components/Connectus"
import { Sidebar } from "./Components/Admin/Sidebar";
import { AdminDashboard } from "./Components/Admin/AdminDashboard";
import { Activejobs } from "./Components/Admin/Activejobs";
import { Studentprofile } from "./Components/Admin/Studentprofile";
import { Companies } from "./Components/Admin/Companies";
import { CSidebar } from "./Components/Company/CSidebar";
import { CDashboard } from "./Components/Company/CDashboard";
import { SSidebar } from "./Components/Student/SSidebar";
import { SEditprofile } from "./Components/Student/SEditprofile";
import { SForms } from "./Components/Student/SForms";
import { SSettings } from "./Components/Student/SSettings";
import { SActivedrives } from "./Components/Student/SActivedrives";
import { SApply } from "./Components/Student/SApply";
import { SMyapplications } from "./Components/Student/SMyapplications";
import { CSettings } from "./Components/Company/CSettings";
import { CCurrentdrives } from "./Components/Company/CCurrentdrives";
import { CUpdate } from "./Components/Company/CUpdate";
import { CForm } from "./Components/Company/CForm";
import { CPostdrives } from "./Components/Company/CPostdrives";
import { CResumedatabase } from "./Components/Company/CResumedatabase";
import { CDriveapplication } from "./Components/Company/CDriveapplication";
import { Adminactivedrive } from "./Components/Admin/Adminactivedrive";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Cdetails } from "./Components/Company/Cdetails";
import NoteState from "./context/noteState";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "/register",
    element:<Register/>,
  },
  {
    path: "/contactus",
    element:<Connectus/>,
  },
  {
    path: "/admin",
    element:<Sidebar/>
  },
  {
    path: "/admin/dashboard",
    element:<AdminDashboard/>
  },
  {
    path: "/admin/activedrives",
    element:<Activejobs/>
  },
  {
    path: "/admin/viewactivedrives",
    element : <Adminactivedrive/>
  },
  {
    path: "/admin/studentprofile",
    element:<Studentprofile/>
  },
  {
    path: "/admin/companies",
    element:<Companies/>
  },
  {
    path: "/company",
    element:<CSidebar/>
  },
  {
    path: '/company/dashboard',
    element:<CDashboard/>
  },
  {
    path: "/student",
    element: <SSidebar/>
  },
  {
    path: "/student/editprofile",
    element: <SEditprofile/>
  },
  {
    path: "/forms",
    element: <SForms/>
  },
  {
    path: "/student/settings",
    element: <SSettings/>
  },
  {
    path: "/student/activedrives",
    element: <SActivedrives/>
  },
  {
    path: "/student/viewjob",
    element: <SApply/>
  },
  {
    path: "/student/myapplications",
    element: <SMyapplications/>
  },
  {
    path: "/company/settings",
    element: <CSettings/>
  },
  {
    path: "/company/currentdrives",
    element: <CCurrentdrives/>
  },
  {
    path: "/company/updateprofile",
    element: <CUpdate/>
  },
  {
    path: "/company/forms",
    element: <CForm/>
  },
  {
    path: "/company/postdrive",
    element: <CPostdrives/>
  },
  {
    path: "/company/resumedatabase",
    element: <CResumedatabase/>
  },
  {
    path: "/company/driveapplications",
    element: <CDriveapplication/>
  },
  {
    path: "/company/showdetails",
    element: <Cdetails/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <NoteState>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </NoteState>
)
