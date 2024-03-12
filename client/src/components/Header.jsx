import React from 'react'
import { supabase } from '../lib/helper/SupabaseClient'
import CustomButton from './CustomButton'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

  const Login = async() => {

    navigate('/registrationpage')
  }


  return (
    <div>
        <div className='navbar flex flex-row justify-between p-5 m-5'>
        <h1>Chain Rise</h1>
        <div className='login-signupGroup flex flex-row'>
           <CustomButton
           title ="Login"
           handleClick = {Login} 
           styles= "bg-[#8c6dfd]"
           />
            <button className='m-3 p-1 border' >SignUp</button>
        </div>
        </div>
    </div>
  )
}

export default Header