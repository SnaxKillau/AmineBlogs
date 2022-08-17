import {React , useEffect,useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase';
import { onAuthStateChanged} from 'firebase/auth';

function Test() {
  const [user , setUser] = useState({})
  const [photo , setPhoto] = useState("")
  const [Signin , setSingin] = useState("text")


        useEffect(() => {
          if(user?.photoURL){
              setPhoto(user.photoURL)
          }
          
          

      },[user])
        useEffect(() =>{
            if(user?.displayName){
                setSingin("close")
            }
        } , [user])
        
              
      useEffect(() =>{
        onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)})
    }, [auth.currentUser])
    return (
        <div>
       <Navbar  expand="lg"  className= "Header">
  <Container>
    <Navbar.Brand href="#home" className = 'text'>Anime Blogs</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className = "text">Home</Nav.Link>
        <Nav.Link href="/News" className = "text">News</Nav.Link>
        <Nav.Link href="/SignIn" className = {Signin}>Sign In</Nav.Link>
        <Nav.Link href="/SignUp" className = {Signin}>Sign Up</Nav.Link>
        <Nav.Link href="/AboutMe" className = "text">About Me</Nav.Link>
         
        <Nav.Link href="/Profile" className = "text">
        <img src ={photo} className = "pic_profile"></img>
        </Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Test
