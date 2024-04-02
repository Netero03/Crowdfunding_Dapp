import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar } from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

import UserLayout from '../components/UserLayout';

const Blog = () => {

    return (
        <>
            <UserLayout>
                <div>
                    <h1 className="font-epilogue font-semibold text-[18px] text-black text-left">Blog</h1>

                    <div className="flex flex-wrap mt-[20px] gap-[26px]">
                        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                            ChainRise is a Blockchain based Crowdfunding/CrowdSourcing platform.
                        </p>
                    </div>
                </div>
            </UserLayout>
        </>

    )
}

export default Blog