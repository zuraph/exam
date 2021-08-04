import React, {useState, useContext} from 'react';
import './SignIn.css'
import axios from "axios";
import {UserContext} from "../../components/index";
import {Redirect} from "react-router";


const SignIn =()=>{

    const [user, setUser] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    });

    const {setLoggedIn,loggedIn} = useContext(UserContext);

    const onSub =() => {

        axios.post('https://reqres.in/api/login', user)
            .then(function (response) {
                console.log(response);
                setLoggedIn(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const redirect =()=>{
       return  loggedIn && <Redirect to='/user'/>
    }

    return (
        <>
            {
                redirect()
            }
            <div className='auth'>
                <h2>Sign In</h2>

                <div className='form'>
                    <label>Username</label>
                    <input type='text'  value={user.email} onChange={(e) => setUser({...user,email:e.target.value}) }/>
                    <label>Password</label>
                    <input type='password' value={user.password} onChange={(e) => setUser({...user,password:e.target.value}) }/>
                    <button onClick={onSub}>Sign In</button>
                </div>
            </div>
        </>
    )
}
export default SignIn
