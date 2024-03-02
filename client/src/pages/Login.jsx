
import React from 'react'
import { Link } from 'react-router-dom'
import { supabase } from "../lib/helper/SupabaseClient";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate()

    const onEmailChange = (event) => {

        setEmail(event.target.value);
        console.log(Email)
    };

    const onPassChange = (event) => {
        setPassword(event.target.value);
        console.log(Password)
    };

    const HandleLogin = async () => {
        console.log(Email)
        console.log(Password)
        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: Email,
                password: Password
            });
            if (error) {
                throw error;
            }
            console.log('User signed up successfully:', data);
            navigate("/home")
        } catch (error) {
            console.error('Error signing up user:', error.message);
        }

    }

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image" />
            </div>
            <div className="md:w-1/3 max-w-sm">

                <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" 
                type="text" 
                placeholder="Email Address"
                value={Email}
                onChange={onEmailChange}
                required />

                <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" 
                type="password" 
                placeholder="Password"
                value={Password}
                onChange={onPassChange}
                required />


                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <Link className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" >Forgot Password?</Link>
                </div>

                <div className="text-center md:text-left">
                    
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                     type="submit"
                     onClick={HandleLogin}>
                    Login</button>
                </div>


                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Don't have an account? <Link to='/signup' className="text-red-600 hover:underline hover:underline-offset-4" >Register</Link>
                </div>
            </div>
        </section>
    );
}

export default Login