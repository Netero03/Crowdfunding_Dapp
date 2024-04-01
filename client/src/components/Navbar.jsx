import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, profile } from '../assets';
import { navlinks } from '../constants';
import { ConnectWallet, lightTheme } from '@thirdweb-dev/react';
import { supabase } from '../lib/helper/SupabaseClient';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  const currentUser = supabase.auth.user();

  if (currentUser) {
    // Fetch the display name from user metadata
    const Name = currentUser.user_metadata.display_name;

    // Use the display name as needed
    console.log('User display name:', Name);
  } else {
    console.error('No user logged in.');
  }

  const btnTheme = lightTheme({
    fontFamily: "Inter, sans-serif",
    colors: {
      accentButtonBg: "#9AD0C2",
      primaryButtonBg: "#9AD0C2",
      secondaryButtonHoverBg: "#57a792",
      primaryButtonText: "#ffffff",
      connectedButtonBg: '#9AD0C2',
      connectedButtonBgHover: '#57a792'
    },

  });

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#9AD0C2] rounded-[100px]">
        <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-black bg-transparent outline-none" />

        <div className="w-[72px] h-full rounded-[20px] bg-[#265073] flex justify-center items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-md hover:shadow-[#2D9596]/80">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
      
          <ConnectWallet 
            modalSize="compact"
            theme={btnTheme}
            className='transition duration-300 ease-in-out hover:shadow-md hover:shadow-[#2D9596]/30'
            >
          </ConnectWallet>
          <CustomButton 
            btnType="button"
            title="Create a campaign"
            styles="bg-[#265073] "
            handleClick={() => navigate('/create-campaign')}
          />

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#9AD0C2] flex justify-center items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-md hover:shadow-[#2D9596]/80" >
            <img src={profile} alt="user" className="w-[60%] h-[60%] object-contain" />
            <h4>{Name}</h4>
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                />
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? 'Create aaa campaign' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if (address) navigate('create-campaign')
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar