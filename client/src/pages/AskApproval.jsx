import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar, CustomButton } from '../components';

import UserLayout from '../components/UserLayout';

const AskApproval = () => {

    return (
        <>
            <UserLayout>
                <div>
                    <h1 className="font-epilogue font-semibold text-[18px] text-black text-left">Ask for Approval</h1>

                    <div className="flex flex-wrap mt-[20px] gap-[26px]">
                        <header>
                            <h1>Need Funds? Make your own program/project/campaign </h1>
                        </header>

                        <section>
                            <h2>Fill the form given below</h2>
                            <p>Fill the Details of your project/campaign to get approved. If approved you can Create, Collect funds, Withdraw Funds, Edit project/Campaign details and many other features.</p>
                        </section>

                        <div className="flex mx-4">
                            <CustomButton
                                btnType="button"
                                title={'Request for Approval'}
                                styles={'bg-[#1dc071]'}
                                handleClick={navigate('requestform')}
                            />
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>

    )
}

export default AskApproval