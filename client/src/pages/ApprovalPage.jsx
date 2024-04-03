import React, { useEffect, useState } from 'react';

import { supabase } from '../lib/helper/SupabaseClient';
import { Navigate, useNavigate } from 'react-router-dom';
const ApprovalPage = () => {

    const navigate = useNavigate()
    const [isApproved, setIsApproved] = useState(false); // Assume you have a state to track approval status
    const [email, setEmail] = useState('');

    const func = async () => {
//         const { data: { user } } = await supabase.auth.getUser()
//         console.log(user)
//         setEmail(user.email)
//         console.log(email)

//         let { data: ProjectRequest, error } = await supabase
//             .from('ProjectRequest')
//             .select("*")
//             .eq('email', email)
//         console.log(ProjectRequest)
//         const arr = ProjectRequest
//         console.log(arr[0].status)

//         const status = arr[0].status
//    if (status === 'Approved'){
// navigate('/home')
//    }

//         setIsApproved(true);
setTimeout(()=>{
    navigate('/home')
}, 20000)
    }
    func()
    useEffect(() => {

    }, []); // Run this effect only once on component mount

    useEffect(() => {
        // If user is approved, redirect them to a different route

    }, []); // Run this effect whenever isApproved or history changes

    return (
        <div>
            <h1>Approval Page</h1>
            <p>Waiting for admin approval...</p>
        </div>
    );
};

export default ApprovalPage;
