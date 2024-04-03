import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar } from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import { supabase } from '../lib/helper/SupabaseClient';
import {
    Box,
    Button,
    Snackbar,
    Typography,
} from "@mui/material";

import AdminLayout from '../components/AdminLayout';

const UserReq = function UserReqTable() {

    const [requests, setRequests] = useState([]);
    const [approval, setApproval] = useState('');

    const handleStatus = async (status, id, email) => {
     
        if(status === 'Pending'){
        const { data, error } = await supabase
            .from('ProjectRequest')
            .update({ status: 'Approved' })
            .eq('id', id)
            .select()
       
        if (error) console.log(error.message);
        else {
            setRequests(prevreq => prevreq.map(request => request.id === id ? { ...request, status: 'Approved' } : request));

            try {
                let { data, error } = await supabase.auth.signInWithOtp({
                  email: email
                })
                 }
            catch (error1) { console.log(error); }
        }


    }

}

useEffect(() => {

    async function fetchRequests() {
        try {

            let { data: ProjectRequest, error } = await supabase
                .from('ProjectRequest')
                .select('*')


            if (error) console.log(error);

            else {
                console.log(ProjectRequest)
                setRequests(ProjectRequest)

            }
        } catch (error) {
            console.log(error)
        }
    }

    // Call the fetchProductData function when the component mounts
    fetchRequests();
    return () => {
        // Any clean-up code if needed
    };
}, []);

return (
    <>
        <AdminLayout>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Detail</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proof link</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Mission</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>


                        </tr>
                    </thead>

                    <tbody>
                        {/* Table rows will be dynamically populated here */}
                        {requests.map(request => (
                            <tr key={request.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {request.id}{request.name}
                                </td>
                                <td className="px-6 py-4">
                                    {request.email}
                                </td>
                                <td className="px-6 py-4">
                                    {request.projectDetails}
                                </td>
                                <td className="px-6 py-4">
                                    {request.link}
                                </td>
                                <td className="px-6 py-4">
                                    {request.mission}
                                </td>
                                <td className="px-6 py-4 text-right text-gray-900">
                                    <Box display={"flex"} gap={"30px"}>
                                        <Button
                                            onClick={() => handleStatus(request.status, request.id, request.email)}
                                            value="Submit"
                                            className="sign-btn"
                                            style={{
                                                background: '#265073',
                                                color: 'white', // Text color is explicitly set to white
                                                marginBottom: "10px",
                                            }}
                                            disabled={request.status === "Approved"}
                                        >
                                            {request.status}
                                        </Button>
                                    </Box>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </AdminLayout>
    </>

)
}

export default UserReq