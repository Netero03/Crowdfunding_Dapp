import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar } from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

import UserLayout from '../components/UserLayout';
import Layout from '../components/Layout';

export const Blog = () => {

    return (
        <>
            <UserLayout>
                <div>
                    <h1 className="font-epilogue font-semibold text-[18px] text-black text-left">Blog</h1>

                    <div className="flex flex-wrap mt-[20px] gap-[26px]">
                        <header>
                            <h1>Revolutionizing Crowdfunding: Introducing ChainRise</h1>
                        </header>

                        <section>
                            <h2>Introduction</h2>
                            <p>Start with an engaging introduction that highlights the significance of crowdfunding in today's economy. Introduce your blockchain-based application and its purpose.</p>
                        </section>

                        <section>
                            <h2>Problem Statement</h2>
                            <p>Discuss the limitations and challenges faced by traditional crowdfunding platforms. Highlight the need for transparency, security, and efficiency in crowdfunding processes.</p>
                        </section>

                        <section>
                            <h2>Solution Overview</h2>
                            <p>Introduce your application as a solution to the challenges mentioned above. Explain how blockchain technology enables transparency, security, and decentralization in crowdfunding.</p>
                        </section>

                        <section>
                            <h2>Key Features</h2>
                            <ul>
                                <li>Smart Contracts: Automate and execute crowdfunding agreements securely.</li>
                                <li>Decentralized Governance: Enable community-driven decision-making.</li>
                                <li>Tokenization: Represent assets or investments digitally for easy transfer and tracking.</li>
                                <li>Transparency: Provide transparent records of transactions and fund allocation.</li>
                                <li>Global Accessibility: Allow users from anywhere in the world to participate in crowdfunding campaigns.</li>
                            </ul>
                        </section>

                        <footer>
                            <p>&copy; 2024 ChainRise. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </UserLayout>
        </>

    )
}
export const BlogForAll = () => {

    return (
        <>
            <Layout>
                <div>
                    <h1 className="font-epilogue font-semibold text-[18px] text-black text-left">Blog</h1>

                    <div className="flex flex-wrap mt-[20px] gap-[26px]">
                        <header>
                            <h1>Revolutionizing Crowdfunding: Introducing ChainRise</h1>
                        </header>

                        <section>
                            <h2>Introduction</h2>
                            <p>Start with an engaging introduction that highlights the significance of crowdfunding in today's economy. Introduce your blockchain-based application and its purpose.</p>
                        </section>

                        <section>
                            <h2>Problem Statement</h2>
                            <p>Discuss the limitations and challenges faced by traditional crowdfunding platforms. Highlight the need for transparency, security, and efficiency in crowdfunding processes.</p>
                        </section>

                        <section>
                            <h2>Solution Overview</h2>
                            <p>Introduce your application as a solution to the challenges mentioned above. Explain how blockchain technology enables transparency, security, and decentralization in crowdfunding.</p>
                        </section>

                        <section>
                            <h2>Key Features</h2>
                            <ul>
                                <li>Smart Contracts: Automate and execute crowdfunding agreements securely.</li>
                                <li>Decentralized Governance: Enable community-driven decision-making.</li>
                                <li>Tokenization: Represent assets or investments digitally for easy transfer and tracking.</li>
                                <li>Transparency: Provide transparent records of transactions and fund allocation.</li>
                                <li>Global Accessibility: Allow users from anywhere in the world to participate in crowdfunding campaigns.</li>
                            </ul>
                        </section>

                        <footer>
                            <p>&copy; 2024 ChainRise. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </Layout>
        </>

    )
}
