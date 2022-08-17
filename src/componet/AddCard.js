import React ,{useEffect, useState,useMemo, memo}from 'react'
import Button from '@restart/ui/esm/Button'
import { addDoc } from '@firebase/firestore'
import { db } from './firebase'
import { collection } from '@firebase/firestore'
import "./Card.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './firebase'
import { Container,Row ,Card,} from 'react-bootstrap'
import {v4} from 'uuid'
import { auth } from './firebase';
import { onAuthStateChanged, signOut} from 'firebase/auth';




function AddCard(prop) {
    const [title, setTitle] = useState("")
    const [article , setArticle] = useState("")
    const [url , setUrl] = useState()
    const [info , setInfo] = useState("")
    const [ImageUpload , setImageUpload] = useState("")
    const InformationCollection = collection(db,"blogs")
    const [numLink , setNumLink] = useState(0)
    const [percentage , setPercentage] = useState()
    const [user , setUser] = useState({})




      useEffect(() =>{
        onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)})
    }, [auth.currentUser])
  
      

    const add = async () => {
        try{
          await addDoc(InformationCollection, {
            title : title,
            article : article,
            info : info,
            url: ImageUpload,
            mainTitle : prop.mainTitle,
           
            text : prop.text,
            username : user.displayName,
            profile: user.photoURL,
          }
          )
        }
        catch(e){
          alert("Please login before posting")
        }
       
        
      }
      useEffect(() =>{
            const uploadfile = () =>{
                const name = url.name + v4()
                const storageRef = ref(storage,`Image/${url.name + v4()}`)
                const uploadTask = uploadBytesResumable(storageRef, url);

    uploadTask.on('state_changed', 
    (snapshot) => {
    if(url == null) return
   
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPercentage(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
        console.log(error)
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setImageUpload(downloadURL)
        console.log(downloadURL)
        alert("Photo upload finish")
    });
  }
);}
      if(url != null){
          uploadfile()
      }
     
      
          
       
  },[url])

    

    
         
     

    return (
        <div>
            
            <Container>
            <Row xs ={2}  md ={4} lg ={5}  className = "perentCard">
            
                <Card style={{ width: '20rem'}} className = 'card_input'>
            
            <Card.Body>
                
                
                <h3 className = "inputtextheader"> Url:</h3>
                <input type ='file' className = "input" onChange = {(e) => {setUrl(e.target.files[0])}}></input>
                <h3 className = "inputtextheader">title:</h3>
                <input type ='text' placeholder = "Enter the title  of card" className = 'inputfield' onChange ={(e)=>{setTitle(e.target.value)}}></input>
                <h3 className = "inputtextheader">article:</h3>
                <input type = 'text' placeholder = "Enter the article od card" className = 'inputfield' onChange ={(e)=>{setArticle(e.target.value)}}></input>
                <h3 className = "inputtextheader">Imformation:</h3>
                <textarea className = "inputfield" onChange = {(e) => {setInfo(e.target.value)}}></textarea>
                <Button className = 'btn_upload' onClick = {() => {add()}}>
                <h3 className = "btn_text">Upload</h3>
                </Button>
               
            </Card.Body>
            </Card>
            
            </Row>
          
            </Container>
        </div>
    )
}

export default AddCard
