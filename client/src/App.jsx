import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CampaignDetails, CreateCampaign, UpdateCampaign, Home, Profile, LandingPage, Registration, AdminDashboard, AdminApproval, UserHome, Blog, UserProfile, HelpCentre } from './pages';


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
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/adminapproval" element={<AdminApproval />} />
      <Route path="/userhome" element={<UserHome/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/helpcentre" element={<HelpCentre />} />
    </Routes>
  )
}

export default App