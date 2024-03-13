import React from 'react';
import { Route, Routes } from 'react-router-dom';

<<<<<<< HEAD
import { CampaignDetails, CreateCampaign, UpdateCampaign, Home, Profile, LandingPage, Registration } from './pages';
=======
import { CampaignDetails, CreateCampaign, UpdateCampaign , Home, Profile , LandingPage, Registration } from './pages';
>>>>>>> e0b3dc5e6ef6d8f7f4f915eb4f38cc6656669cc5


const App = () => {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/registrationpage" element={<Registration />} />

      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-campaign" element={<CreateCampaign />} />
      <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      <Route path="/campaign-update/:id" element={<UpdateCampaign />} />
    </Routes>
=======
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
        </Routes>
>>>>>>> e0b3dc5e6ef6d8f7f4f915eb4f38cc6656669cc5
  )
}

export default App