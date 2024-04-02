import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar } from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

import UserLayout from '../components/UserLayout';

const HelpCentre = () => {

    return (
        <>
            <UserLayout>
                <div>
                    <h1 className="font-epilogue font-semibold text-[18px] text-black text-left">Help Centre</h1>

                    <div className="flex flex-wrap mt-[20px] gap-[26px]">
                        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[black]">
                            ChainRise is a Blockchain based Crowdfunding/CrowdSourcing platform.
                        </p>
                        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[black]">
                            Contact for query or collab on - xyz12345@gmail.com
                        </p>
                        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[black]">
                            FAQ - How to Create/start Campaign? 
                            Answer - To create/start a Campaign, login through your Organisation/Company email/details in Login page.
                        </p>    
                    </div>
                </div>
            </UserLayout>
        </>

    )
}

export default HelpCentre