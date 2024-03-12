import React from 'react'
import { supabase } from '../lib/helper/SupabaseClient'
import CustomButton from './CustomButton'
import { useLocation, useNavigate } from 'react-router-dom'

import { ChainRiseLogo } from '../assets'

const Header = () => {

    const navigate = useNavigate()

  const Login = async() => {

    navigate('/login')
  }


  return (
    <div className='min-h-screen bg-gradient-to-b from-[#9ad0c2] to-[#a9cfc5]'>
        <div className='navbar flex flex-row justify-between p-5 '>
        <div className="flex items-center justify-center h-14 border-b mt-5">
            
              <img  src={ChainRiseLogo} alt='Logo' className='w-40 h-40'/>
            
          </div>
        <div className='login-signupGroup flex flex-row mt-2 '>
           <CustomButton
           title ="Login"
           handleClick = {Login} 
           styles= "bg-[#8c6dfd] w-40 h-12"
           />
          <button className=' border w-40 h-12 ml-2 rounded-md'  >SignUp</button>
        </div>
        </div>
        
        <p className='flex justify-center items-center text-5xl pt-32 anton-regular text-[#265073]'>Elevating Dreams, Empowering Change</p>

    </div>
  )
}

export default Header