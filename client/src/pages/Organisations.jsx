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

const Organisations = function organisationsTable() {

    const [orgs, setOrg] = useState([]);
    const [approval, setApproval] = useState('');

    const handleStatus = async (status, id, email) => {

        if (status === "Pending") {
            const { data, error } = await supabase
                .from('Organizations')
                .update({ status: 'Approved' })
                .eq('id', id)
                .select()

            if (error) console.log(error);
            else {
                setOrg(prevOrgs => prevOrgs.map(org => org.id === id ? { ...org, status: 'Approved' } : org));
                
                try{let { data, error } = await supabase.auth.admin.inviteUserByEmail(email);}
                catch (error) {console.log(error);}
            }


        }

    }

    useEffect(() => {

        async function fetchOrgData() {
            try {
                let { data: Organizations, error } = await supabase
                    .from('Organizations')
                    .select('*')

                if (error) console.log(error);

                else {
                    console.log(Organizations)
                    setOrg(Organizations)

                }
            } catch (error) {
                console.log(error)
            }
        }

        // Call the fetchProductData function when the component mounts
        fetchOrgData();
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GSTIN</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NGO Number</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered Address</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Objectives</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>


                            </tr>
                        </thead>

                        <tbody>
                            {/* Table rows will be dynamically populated here */}
                            {orgs.map(org => (
                                <tr key={org.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {org.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {org.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {org.gstin}
                                    </td>
                                    <td className="px-6 py-4">
                                        {org.ngoNumber}
                                    </td>
                                    <td className="px-6 py-4">
                                        {org.registered_address}
                                    </td>
                                    <td className="px-6 py-4">
                                        {org.mission}
                                    </td>
                                    <td className="px-6 py-4 text-right text-gray-900">
                                        <Box display={"flex"} gap={"30px"}>
                                            <Button
                                                onClick={() => handleStatus(org.status, org.id, org.email)}
                                                value="Submit"
                                                className="sign-btn"
                                                style={{
                                                    background:  '#265073',
                                                    color: 'white', // Text color is explicitly set to white
                                                    marginBottom: "10px",
                                                }}
                                                disabled={org.status === "Approved"}
                                            >
                                                {org.status}
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

export default Organisations