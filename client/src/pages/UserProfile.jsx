import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'
import UserLayout from '../components/UserLayout';
import { supabase } from '../lib/helper/SupabaseClient';

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);


  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }



  useEffect( () => {

   

    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <UserLayout>

      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </UserLayout>
  )
}

export default UserProfile