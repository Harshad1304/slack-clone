import { Button } from '@mui/material';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({channelId,channelName}) {
    const [input, setInput] = useState("")
    const [user] = useAuthState(auth)
    const sendMessage =(e)=>{
        e.preventDefault();
        if(!channelId){
            return false;
        }
        
        const messageCollectionRef = collection(doc(db, "rooms", channelId), "messages");
       addDoc(messageCollectionRef,{
            message:input,
            timeStamp:serverTimestamp(),
            user:user?.displayName,
            userImage:user?.photoURL,
        });
        setInput("")
    }
  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder={`Message # ${channelName || "Channel"}`}
 />
            <Button hidden onClick={sendMessage} type='submit'>Send</Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;

> form{
    position: relative;
    display: flex;
    justify-content: center;
}

>form >input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}

>form >button{
    display: none !important;
}
`