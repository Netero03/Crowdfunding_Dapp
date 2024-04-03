import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CampaignDetails, CreateCampaign, UpdateCampaign, Home, Profile, LandingPage, Registration, AdminDashboard, Users , ApprovalForm, Organisations, UserHome, Blog, UserProfile, HelpCentre, CampaignDetailsforUsers, RequestForm, BlogForAll, UserRequests, Confirm, ApprovalPage, AskforApproval } from './pages';

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<LandingPage />} />
      
          <Route path="/registrationpage" element={<Registration />} />
          <Route path="/approvalform" element={<ApprovalForm />} />
          <Route path="/requestform" element={<RequestForm />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/approvalpage" element={<ApprovalPage />} />


        
          <Route path="/home" element={<Home />} /> 
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/home/create-campaign" element={<CreateCampaign />} />
          <Route path="/home/blogforall" element={<BlogForAll />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/campaign-update/:id" element={<UpdateCampaign />} />

          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/admindashboard/users" element={<Users/>}/>
          <Route path="/admindashboard/organisations" element={<Organisations/>}/>
          <Route path="/admindashboard/user-requests" element={<UserRequests/>}/>
          
          <Route path="/userhome" element={<UserHome/>} />
          <Route path="/userhome/campaign-details-users/:id" element={<CampaignDetailsforUsers/>} />
          <Route path="/userhome/blog" element={<Blog />} />
          <Route path="/userhome/userprofile" element={<UserProfile />} />
          <Route path="/userhome/helpcentre" element={<HelpCentre />} />
          <Route path="/askforapproval" element={<AskforApproval />} />
          
        </Routes>
  )
}

export default App