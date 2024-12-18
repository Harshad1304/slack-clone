import React from 'react'
import styled from 'styled-components';
import { Avatar, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function Header() {
    const [user] = useAuthState(auth);
   
  return (
    <HeaderContainer>
        {/* Header left */}
        <HeaderLeft>
            <HeaderAvatar
            src={user?.photoURL}
            alt={user?.displayName}
            />
           
            <AccessTimeIcon />
        </HeaderLeft>

        {/* Header Search */}
        
        <HeaderSearch>
            <SearchIcon />
            <input type="text" placeholder='Search Slack' />
        </HeaderSearch>

        {/* Header Right */}

        <HeaderRight>
            <Button onClick={()=>auth.signOut()}>Logout</Button>
            <HelpIcon />
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;


const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 18px 0;
background-color: var(--slack-color);
color: white;
`
const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;


> .MuiSvgIcon-root{
margin-left: auto;
margin-right: 30px;
}
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity:0.6;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    >input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    
    >button{
        margin-left:100px;
        text-transform: inherit !important;
        background-color: white;
        color: black;
        width: 100px;
        height: 30px;
    }
    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right: 20px;
    }
`