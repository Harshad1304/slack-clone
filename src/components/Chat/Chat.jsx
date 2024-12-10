import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from '../ChatInput/ChatInput.jsx'
import {  useSelector } from 'react-redux';
import {   selectRoomId } from '../../features/appSlice.js';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import {  collection, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase.js';
import Message from '../Message/Message.jsx';
import LoadingComp from '../LoadingComp/LoadingComp.jsx';
function Chat() {

    const chatRef = useRef(null)
    const {roomId} = useSelector(selectRoomId);

    // console.log(roomId)
    const [roomDetails] = useDocument(
        roomId &&  doc(db, 'rooms', roomId)

    )
    

    const messagesQuery = roomId && query(
        collection(db, "rooms", roomId, "messages"), // Ensure the path matches Firestore
        orderBy("timeStamp", "asc") // or "desc"
    );
    
    
    const [roomMessages,isLoading] = useCollection(messagesQuery);
    
    

    useEffect(()=>{
       
        // Scoll Bottom on pageload
        chatRef?.current?.scrollIntoView({
            behavior:"smooth",
        });
    },[roomId,isLoading,roomMessages])


        // Loading indicator 
        if(isLoading){
            return(
                <LoadingComp />
            )
        }
  return (
    <ChatContainer>
        {roomDetails && roomMessages &&(
            <>
           
            <Header>
                
                    <HeaderLeft>
                        <h4><strong>#Room-{roomDetails?.data().name}</strong>
                       
                        </h4>
                        <StarPurple500Icon/>
                        
                    </HeaderLeft>
                    <HeaderRight>
                      <p><InfoOutlinedIcon/>Details</p>
                    </HeaderRight>
            </Header>
            
            <ChatMessages>
            
                    {/* list out the messages */}
                    {roomMessages?.docs.map((doc)=>{
                        const {message,timeStamp,user,userImage} =doc.data();
                          const formattedTimestamp = timeStamp ? timeStamp.toDate().toLocaleString() : 'No timestamp';
                        
                        return(
                            <Message 
                            key={doc.id}
                            message={message}
                            timestamp={formattedTimestamp}
                            user={user}
                            userImage={userImage}
                            />
                        )
                    })}
                    <ChatBottom  ref={chatRef}/>
            </ChatMessages>
    
            <ChatInput  channelName={roomDetails?.data().name}
                        channelId={roomId}
            />
            </>
        )}
    </ChatContainer>
  )
}

export default Chat

const ChatLoading = styled.div`
    height: 100vh;
    background-color: black;
`

const ChatBottom = styled.div`
    padding-bottom: 200px;
`

const ChatContainer = styled.div`
color: black;
flex: 0.7;
flex-grow:1;
overflow-y: scroll;
margin-top: 90px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightblue;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    >h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

  > .MuiSvgIcon-root{
        margin-left:20px;
        font-size:19px;
    }
`
const HeaderRight = styled.div`
    >p{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > .MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size: 15px;
    }
`


const ChatMessages = styled.div`
    
`