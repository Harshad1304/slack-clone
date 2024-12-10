
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header/Header.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Chat from './components/Chat/Chat.jsx'
import styled from 'styled-components';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase.js'
import Login from './components/Login/Login.jsx'
import { BarLoader } from "react-spinners";
function App() {

  const [user, loading] = useAuthState(auth)
  

  if(loading){
    return <AppLoading>
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt="" />
      
      <BarLoader width={400} />
    </AppLoading>
  }

  return ( 
    <div className='app'>
     
      <BrowserRouter>
      
      {!user ?(<Login />):(
          <>
         <Header />
            <AppBody>
            <SideBar/>
          <Routes>
            <Route path='/' element={<Chat/>}/>
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

const AppLoading = styled.div`
  display: flex;
  text-align: center;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  >img{
    height: 200px;
    margin-bottom: 20px;
  }
`
