import React, {useState} from 'react';
import './Register.css'
import axios from "axios";


const Register =()=>{

    const [user, setUser] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    });

    const [reg, setReg] = useState(false);
    const [err, setErr] = useState(false);

    const onSub =() => {

        axios.post('https://reqres.in/api/register', user)
            .then(function (response) {
                console.log(response);
                if(response.status === 200) {
                    setReg(true)
                }else{
                    setErr(true)
                }

            })
            .catch(function (error) {
                console.log(error);
                setErr(true)
            });
    }

    return (
        <>
            <div className='auth'>
                <h2>Register</h2>

                {
                    reg?
                        <div className='reg_suc'>
                            <p>You have successfully logged in</p>
                            <a href='/signin'>Sign In</a>
                        </div>
                        :
                        <div className='form'>
                            {
                                err?<p style={{color:'red'}}>Username or Password Incorect</p> : ''
                            }
                            <label>Username</label>
                            <input type='text'  value={user.email} onChange={(e) => setUser({...user,email:e.target.value}) }/>
                            <label>Password</label>
                            <input type='password' value={user.password} onChange={(e) => setUser({...user,password:e.target.value}) }/>
                            <button onClick={onSub}>Sign In</button>
                        </div>
                }

            </div>
        </>
    )
}
export default Register
