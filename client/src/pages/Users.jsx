import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar } from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import { supabase } from "../lib/helper/SupabaseClient";

import AdminLayout from '../components/AdminLayout';



const Users = function UsersTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        async function fetchUsersData() {
            try {
                let { data: Users, error } = await supabase
                    .from('Users')
                    .select('*')

                if (error) console.log(error);
                else{
                console.log(Users)
                setUsers(Users)
                }
            } catch (error) {
                console.log(error)
            }
        }

        // Call the fetchProductData function when the component mounts
        fetchUsersData();
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creation Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Table rows will be dynamically populated here */}
                            {users.map(user => (
                                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.Full_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.creation_time}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.contact}
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

export default Users