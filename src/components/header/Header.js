import React, {useContext} from 'react';
import './Header.css'
import {UserContext} from '../index';
import {Link, NavLink} from "react-router-dom";

export const Header =()=>{
    const {loggedIn,setLoggedIn} = useContext(UserContext);

    const logOut=()=>{
        setLoggedIn(false);
    }

    return (
        <>
            <nav>
                <div className='menu'>
                    <ul>
                        <li><NavLink to='/'>LOGO</NavLink></li>
                        <li><NavLink to='/main'>main</NavLink></li>

                    </ul>
                    {
                        loggedIn?
                            <ul>
                                <li><NavLink to='/user'>Hello Zura</NavLink></li>
                                <li><NavLink to='#' onClick={logOut}>Log Out</NavLink></li>
                            </ul>
                            :
                            <ul>
                                <li><NavLink to='/signin'>Sign In</NavLink></li>
                                <li><NavLink to='/register'>Register</NavLink></li>
                            </ul>
                    }

                </div>
            </nav>
        </>
    )
}
