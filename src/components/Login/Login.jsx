import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'

function Login() {
    const signIn = ()=>{
        signInWithPopup(auth, provider).catch(error=>alert(error))
    }
  return ( 
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="" />
            <h1>Sign In to the Slack-Clone</h1>
            <p>-By Harsha Bhoir</p>
            <Button onClick={signIn}>Sign in with Google</Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    >img{
        
        object-fit: contain;
        height: 200px;
        margin-bottom: 40px;
    }

    >button{
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
    }
`