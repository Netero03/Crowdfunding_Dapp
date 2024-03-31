import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CampaignDetails, CreateCampaign, UpdateCampaign, Home, Profile, LandingPage, Registration, AdminDashboard, AdminApproval } from './pages';


const App = () => {
  return (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/registrationpage" element={<Registration />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/home" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/campaign-update/:id" element={<UpdateCampaign />} />
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/adminapproval" element={<AdminApproval/>}/>
        </Routes>
  )
}

export default App