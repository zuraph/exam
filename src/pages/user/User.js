import React, {useContext, useState} from 'react';
import './User.css'
import axios from "axios";
import {Redirect} from "react-router";
import {UserContext} from "../../components";


const Register =()=>{
    const {setLoggedIn,loggedIn} = useContext(UserContext);

    const redirect =()=>{
        return  !loggedIn && <Redirect to='/main'/>
    }

    return (
        <>
            {
                redirect()
            }
            <div className='user'>
                user page
            </div>
        </>
    )
}
export default Register
