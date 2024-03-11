import React from 'react'
import { Sidebar, Navbar } from '.';


const Layout = ({children}) => {
    return (
        <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row ">
            <div className="sm:flex hidden mr-10 relative md:basis-1/4">
                <Sidebar />
            </div>
            <div className="flex-1 max-sm:w-full md:basis-3/6 mx-auto sm:pr-5">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout