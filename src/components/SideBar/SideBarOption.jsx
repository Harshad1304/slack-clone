import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../features/appSlice';



function SideBarOption({Icon,title,addChannelOption,id}) {
    const dispatch = useDispatch();
    const addChannel =()=>{
        const channelName = prompt('Please Enter a channel name');

        if(channelName){
            addDoc(collection(db,'rooms'),{
                name:channelName
            })
        }
    }

    const selectChannel =()=>{
         if(id){
            dispatch(enterRoom({
                roomId:id,
            }))
        
         }
    }
  return (
    <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
    >
        {Icon && <Icon fontSize="small"/>}
        {Icon ? (
            <h3>{title}</h3>
        ):(
            <SidebarOptionChannel>
                <span>#</span>{title}
            </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
  )
}

export default SideBarOption

const SidebarOptionContainer = styled.div`
display: flex;
font-size: 15px;
align-items: center;
padding-left: 5px;
cursor: pointer;
gap: 10px;
padding: 10px;

:hover{
    opacity: 0.9;
    background-color: #340e36 ;
}

> h3 {
    font-weight: 500;
}

>h3 > span {
    padding: 15px;
}
`


const SidebarOptionChannel = styled.h3`
 padding: 2px 0;
 font-weight: 300;
    
`