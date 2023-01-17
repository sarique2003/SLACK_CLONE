import React, { useState } from 'react'
import './Login.css'
import {Button} from "@material-ui/core";
//import 'firebase/compat/provider';
//import 'firebase/compat/auth';
import {auth,provider} from "./firebase"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
   const[state,dispatch] = useStateValue()

    const SignIn =() =>{
         auth
          .signInWithPopup(provider)
          .then((result) =>{
            console.log(result);
            dispatch({
               type: actionTypes.SET_USER,
               user:result.user,
            })
          })
          .catch((error) =>{
            alert(error.message)
          })
    }

  return (
  <div className="login">
        <div className="login_container">
            <img 
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp"
            alt =""
            />
            <h1>Sign in to Slack</h1>
             <p>Srq.slack.com</p>
             <Button onClick={SignIn}>Sign In With Google</Button>
        </div>
    </div>
    );
}

export default Login