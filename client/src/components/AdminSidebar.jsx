import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun, Crowdfund, ChainRiseLogo } from '../assets';
import { adminNavlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`${isActive && isActive === name /*&& 'bg-[#2c2f32]'*/} ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {/* <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}> */}
    <span className="inline-flex justify-center items-center">
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <div>
          <img src={imgUrl} alt="fund_logo" className='inline-flex ml-3' />
          <span className="ml-5 text-sm tracking-wide truncate">{name}</span>
        </div>
      )}
    </span>
  </div>
)

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('Home');
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh] ">
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 ">
        <div className="fixed flex flex-col top-0 left-0 w-21 bg-gradient-to-t from-[#2D9596] to-[#77ceb7] h-full border-r ">
          <div className="flex items-center justify-center h-14 border-b mt-10">
            <Link to="/home">
              <Icon styles={"w-12 md:w-64 pt-8"} imgUrl={ChainRiseLogo} />
            </Link>
            
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow mt-10">
            <ul className="flex flex-col py-4 space-y-1">
              {adminNavlinks.map((link, index) => (
                <li key={index}>
                  <Icon
                    key={link.id}
                    {...link}
                    isActive={isActive}
                    name={link.name}
                    styles={"relative flex flex-row items-center h-11 focus:outline-none transition duration-500 hover:bg-[#9AD0C2] text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"}
                    handleClick={() => {
                      if (!link.disabled) {
                        setIsActive(link.name);
                        navigate(link.link);
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}



export default AdminSidebar