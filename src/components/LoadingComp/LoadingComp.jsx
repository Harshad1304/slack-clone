import React from 'react'
import styled from 'styled-components'
import { BarLoader } from 'react-spinners';

function LoadingComp() {
  return (
    <ContentContainer>
    <ChatLoadingContainer>
        <h4>Messages are loading please wait </h4>
        <BarLoader width={400} />
    </ChatLoadingContainer>
    </ContentContainer>
  )
}

export default LoadingComp
const ContentContainer = styled.div`
    flex: 1; /* Ensure this container takes the available space left by the sidebar */
    position: relative; /* Necessary for the absolute positioning of loading component */
`;

const ChatLoadingContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>h4{
    font-size:25px;
    margin-bottom:20px;
}
transform: translate(-50%,-50%);
`