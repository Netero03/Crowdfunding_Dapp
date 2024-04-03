import React from 'react'
import { Link } from 'react-router-dom'

const Confirm = () => {
    return (
        <div>
            <h1> Verification Complete .. </h1>
            <h5> ACcess Granted , login using credentials</h5>
            <Link to='/' ><h6>Exit this page</h6></Link>
        </div>
    )
}

export default Confirm