import logo from './logo.svg';
import './App.css';
import Main from "./pages/main/Main";
import React, {useState} from "react";
import {Route, Switch} from "react-router";
import {Header,UserContext} from "./components";
import SignIn from "./pages/signin/SignIn";
import Register from "./pages/register/Register";
import User from "./pages/user/User";



function App() {
    const [loggedIn, setLoggedIn] = useState(false)
  return (

    <div className="App">
        <UserContext.Provider value={{
            loggedIn,
            setLoggedIn
        }}>

            <Header/>
            <Switch>
                <Route path='/main'>
                    <Main/>
                </Route>
                <Route path='/signin'>
                    <SignIn/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
                <Route path='/user'>
                    <User/>
                </Route>
                <Route path='/'>
                    <Main/>
                </Route>
            </Switch>
        </UserContext.Provider>
    </div>
  );
}

export default App;
