import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar } from '../components';
import { DisplayCampaignsforUsers } from '../components';
import { useStateContext } from '../context'
import UserLayout from '../components/UserLayout';

const UserHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <UserLayout>

        <DisplayCampaignsforUsers
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />

      </UserLayout>

    </>

  )
}

export default UserHome