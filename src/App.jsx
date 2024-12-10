
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header/Header.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Chat from './components/Chat/Chat.jsx'
import styled from 'styled-components';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase.js'
import Login from './components/Login/Login.jsx'

function App() {

  const [user, loading] = useAuthState(auth)


  return ( 
    <div className='app'>
     
      <BrowserRouter>
      {!user ?(<Login />):(
          <>
         <Header />
            <AppBody>
            <SideBar/>
          <Routes>
            <Route path='/' element={<Chat />}/>
            
           </Routes>
          
          </AppBody>
          
          </>
      )}
    
      </BrowserRouter>
      
    </div>
  )
}

export default App;


const AppBody = styled.div`
display: flex;
height: 100vh;

`
