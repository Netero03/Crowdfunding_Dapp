import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { CampaignDetails, CreateCampaign, UpdateCampaign , Home, Profile , LandingPage, Login, SignUp } from './pages';


const App = () => {
  return (

   



        <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/home" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/campaign-update/:id" element={<UpdateCampaign />} />
        </Routes>
  )
}

export default App