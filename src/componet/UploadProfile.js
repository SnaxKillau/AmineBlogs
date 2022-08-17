import {React , useState, useEffect, useContext , useMemo} from 'react'
import { Container, Row , Card} from 'react-bootstrap';
import './Card.css'
import { auth } from './firebase';
import Button from 'react-bootstrap/Button';
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import {v4} from 'uuid'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './firebase'
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';


function UploadProfile() {
    const [userName , setUsername] = useState("")
    const [url , setUrl] = useState()
    const [ImageUpload , setImageUpload] = useState("")
    const [user , setUser] = useState({})
    const [photo , setPhoto] = useState("")
    const [wait , setWait] = useState("Please waited!")
    const [comfirm,setComfirm] = useState(true)
    


    
    useEffect(() =>{
        onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)})
    }, [auth.currentUser])
      
    

  
   useEffect(() => {
       if(user?.photoURL){
            setPhoto(user.photoURL)
       }

   },[user])



    useEffect(() =>{
        const uploadfile = () =>{
            const name = url.name + v4()
            const storageRef = ref(storage,`Userprofile/${url.name + v4()}`)
            const uploadTask = uploadBytesResumable(storageRef, url);
    
                    uploadTask.on('state_changed', 
                    (snapshot) => {
                    if(url == null) return
    
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    
                    
                    switch (snapshot.state) {
                    case 'paused':
                    console.log('Upload is paused');
                    alert('Upload is paused');
                    break;
                    case 'running':
                    console.log('Upload is running');
                    break;
                    }
                    }, 
                    (error) => {
                    console.log(error)
                    alert("error")
                    },
                    () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setImageUpload(downloadURL)
                    console.log(downloadURL)
                    alert("Image upload succcesfully . Please press comfirm")
                    setComfirm(false)
                    });
                    }
                    );}
                    if(url != null){
                    uploadfile()
                    }

    
                    
    
                    },[url])

                   

                    const update = async() =>{
                        
                                await updateProfile(user, {displayName: userName , photoURL: ImageUpload}).then(
                                    console.log("Finish"))
                                    alert("Successfully create new account")
                                    window.location.reload(false)
                                    }
                                   
                    
                    
    return (
        <div className = "login_page">
             <Container>
                <Row xs ={2}  md ={4} lg ={5}  className = "perentCard">
                
                 
                  <Card style={{ width: '20rem'}} className = 'context_input'>
                
                    <Card.Body>
                     
                         <h4 className = "signin_header">Profile </h4>
                       
                        `<h3 className = "context_header1"> Username:</h3>
                        <input className = "context_field" onChange = {(e) => {setUsername(e.target.value)}}></input>
                        <h3 className = "context_header1"> Photo:</h3>
                        <input  type = "file" onChange = {(e) =>{setUrl(e.target.files[0])}}></input>
                        {
                            comfirm ||  <Button className = 'btn_signin' onClick = {() => {update()}}>
                             <Link to ='/' className ="Link">
                             <h3 className = "btn_text">Comfirm</h3>
                             </Link>
                            </Button>
                        }
                   
                  
                    </Card.Body>
                    </Card>
              
                
                </Row>
              
                </Container>
        </div>
    )
}

export default UploadProfile
