import {React , useState, useEffect, useContext} from 'react'
import { Container, Row , Card} from 'react-bootstrap';
import './Card.css'
import { auth } from './firebase';
import Button from 'react-bootstrap/Button';
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import {v4} from 'uuid'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './firebase'
import { updateProfile } from 'firebase/auth';
import UploadProfile from './UploadProfile';
import { onAuthStateChanged} from 'firebase/auth';



function Signup(props) {
   
    const [email , setEmail] = useState("")
   
    const [password , setPassword] = useState("")
    const [singup , setSignup] = useState(false)
    const [profile ,setProfile] = useState(true)
    const [user , setUser] = useState({})

    const [ImageUpload , setImageUpload] = useState("")
   

   

   const register = async () =>{
    try {
       
            const user = await createUserWithEmailAndPassword(auth, email,password).then(alert("Successfully" , alert("After upload image. Please wait for alert finish"))).catch((e)=>{
                alert(`error! ${e}`)
            })
        

        console.log("Finish")
        setSignup(true)
        setProfile(false)
       
    
    }
    catch(e){
        console.log(e)
    }

}





    
   

    return (
        <div className = "login_page">
             <Container>
                <Row xs ="2"  md ="4" lg ="5"  className = "perentCard">
                
                 
                 {
                     singup ||  <Card style={{ width: '20rem'}} className = 'context_input'>
                
                     <Card.Body>
                      
                        
                           <h4 className = "signin_header">Sign up </h4>
                            <h3 className = "context_header"> Email:</h3>
                            <input className = "context_field" type = "email" onChange = {(e) => {setEmail(e.target.value)}}></input>
                            <h3 className = "context_header1"> Password:</h3>
                            <input className = "context_field" onChange = {(e) => {setPassword(e.target.value)}} type ="password"></input>
                            
                            <Button className = 'btn_signin' onClick = {() => {register()}}>
                            <h3 className = "btn_text">Sign up</h3>
                            </Button>   
                             
                   
                     </Card.Body>
                     </Card>
                 }
              
                
                </Row>
              
                </Container>
                {
                    profile || <UploadProfile></UploadProfile>
                }
        </div>

        
    )
}

export default Signup
