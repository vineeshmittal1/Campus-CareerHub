import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../Navbar_home";
import { Footer } from "../Footer";
import { Sidebar } from "./Sidebar";

export function Studentprofile() {
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:8000/student/getallstudent')
            .then(response => setStudents(response.data))
            .catch(error => console.error("Error fetching students: ", error));
    }, []);

    const handleDelete = (studentId) => {
        axios.delete(`http://localhost:8000/student/delete/${studentId}`)
            .then(response => {
                console.log(response.data);
                setStudents(students.filter(student => student._id !== studentId));
            })
            .catch(error => console.error("Error deleting student: ", error));
    }

    return (
        <>
            <Navbar />
            <div className="flex mx-1">
                <Sidebar />
                <div className="w-screen py-2 overflow-x-auto sm:-mx-6 mt-8 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Candidate</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm break-words leading-4 text-blue-500 tracking-wider">Highest Qualification</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">City</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">State</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Resume</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {students.map(student => (
                                    <tr key={student._id}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-800">{student.firstname} {student.lastname}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="text-sm leading-5 text-blue-900">{student.quali}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{student.city}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{student.state}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">Link</td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <button onClick={() => handleDelete(student._id)} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Delete</button>
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
    );
}
