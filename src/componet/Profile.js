import {React,useState,useEffect} from 'react'
import { Container,Row ,Card,} from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { auth } from './firebase';
import { onAuthStateChanged, signOut} from 'firebase/auth';
import { Link } from 'react-router-dom';

function Profile() {
    const [user , setUser] = useState({})




    // sign out
    const signout = async()=>{
        await signOut(auth)
        window.location.reload(false)
    }

          
    useEffect(() =>{
        onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)})
    }, [auth.currentUser])
    return (
        
       
        <div>
             <img className = "sakura_video" src ="https://i.pinimg.com/originals/34/16/fc/3416fc4113b69a0bf1cc75a772c4b5c4.gif"></img>
        <Container>
        <Row xs ={2}  md ={4} lg ={5}  className = "perentCard">
        
            <Card style={{ width: '20rem'}} className = 'card_input'>
        
        <Card.Body>
            <img className = "profile_picture" src ={user?.photoURL}></img>
               
               <h3 className = "context_header3"> Username :</h3>
               <h3 className = "context_header4"> {user?.displayName}</h3>
               <h3 className = "context_header3"> Email :</h3>
               <h3 className = "context_header4"> {user?.email}</h3>
            
       
            <Button className = 'btn_upload'onClick = {() => {signout()}} >
             <Link to = "/" className  ="Link">
             <h3 className = "btn_text">Log Out</h3>
             </Link>
            </Button>
           
        </Card.Body>
        </Card>
        
        </Row>
      
        </Container>
    </div>
       
    )
}

export default Profile

