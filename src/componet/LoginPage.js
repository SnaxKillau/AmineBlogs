import {React,useState} from 'react'
import {auth} from './firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row , Card} from 'react-bootstrap';
import './Card.css'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const login = async () =>{
        
        try{
            await signInWithEmailAndPassword(auth,Email,Password)
            alert("Login successfully ! Please press ok")
            window.location.reload(false)
        }
        catch(e){
                alert(e)
        }   
    }
    
    return (
        <div className = "login_page">
         <Container>
                <Row xs ={2}  md ={4} lg ={5}  className = "perentCard">
                
                 
                  <Card style={{ width: '20rem'}} className = 'context_input'>
                
                    <Card.Body>
                    <h4 className = "signin_header">Sign in </h4>
                    <h3 className = "context_header" > Email:</h3>
                    <input className = "context_field" onChange = {(e) => {setEmail(e.target.value)}}></input>
                    <h3 className = "context_header1"> Password:</h3>
                    <input className = "context_field" onChange = {(e) => {setPassword(e.target.value)}}></input>
                    
                   
                    <Button className = 'btn_signin' onClick = {() => {login()}}>
                    <Link className = 'Link' to = "/">
                    <h3 className = "btn_text">Sign in</h3>
                    </Link>
                    </Button>
                  
                    </Card.Body>
                    </Card>
              
                
                </Row>
              
                </Container>
        </div>
    )
}

export default LoginPage
