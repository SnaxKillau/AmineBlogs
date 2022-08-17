import logo from './logo.svg';
import './App.css';
import Test from './componet/Header';
import Pic from './componet/Pic';
import React, {useEffect} from 'react'
import Photocard from './componet/Photocard';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

import AddCard from './componet/AddCard';

import Info from './componet/Info';
import { collection } from 'firebase/firestore';


import { useState } from 'react'
import {db} from './componet/firebase'
import {getDocs} from 'firebase/firestore'
import AddContext from './componet/AddContext';
import LoginPage from './componet/LoginPage';
import Loading from './componet/Loading';
import Signup from './componet/Signup';
import UploadProfile from './componet/UploadProfile';
import Profile from './componet/Profile';
import News from './componet/News';
import Landscape from './componet/Landscape';
import Footer from './componet/Footer';











function App() {
  const InformationCollection = collection(db,'blogs')
  const [info , setInfo] = useState([])
  useEffect(() =>{
    const Pull = async () =>{
      const data = await getDocs(InformationCollection)
      setInfo(data.docs.map((doc) => ({... doc.data() , id:doc.id})))
     
    }
    Pull()
  },[])
  
  return (
    <div>
      <Test></Test>
      <Router>
        <Routes>
          <Route exact path ='/' element={<Pic/>}></Route>
          <Route exact path ='/addCard' element={<AddContext></AddContext>}></Route>
          <Route exact path ='/SignIn' element={<LoginPage></LoginPage>}></Route>
          <Route exact path ='/SignUp' element={<Signup></Signup>}></Route>
          <Route exact path ='/Profile' element={<Profile></Profile>}></Route>
          <Route exact path ='/News' element={<News></News>}></Route>
          <Route exact path ='/AboutMe' element={<Footer></Footer>}></Route>
          

          {
            info.map((e) =>{
              return(
                <Route exact path = {e.id} element = {<Info title = {e.title} img = {e.profile} username = {e.username} info = {e.text}></Info>} key = {e.id}></Route>
              )
            })
          }
        </Routes>
      </Router>
     
      
      
     
      
   
      
      
     
  
       

     
      
     
      
     
    </div>
  )
}

export default App

