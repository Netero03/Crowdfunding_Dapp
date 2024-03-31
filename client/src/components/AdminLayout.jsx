import React from 'react'
import { Sidebar, Navbar } from '.';
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({children}) => {
    return (
        <div className="relative sm:-8 p-4 bg-gradient-to-b from-[#F1FADA] to-[#77ceb7]  min-h-screen flex flex-row ">
            <div className="sm:flex hidden mr-10 relative md:basis-1/4 ">
                <AdminSidebar />
            </div>
            <div className="flex-1 max-sm:w-full md:basis-3/6 mx-auto sm:pr-5">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout