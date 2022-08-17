import React , {useState ,useEffect,useRef} from 'react'
import  Row  from 'react-bootstrap/Row'

import Container from 'react-bootstrap/esm/Container'
import  Col  from 'react-bootstrap/Col'
import  Card from 'react-bootstrap/Card'
import {collection, getDocs, updateDoc,doc,deleteDoc, addDoc} from 'firebase/firestore'
import  {db}  from './firebase'
import { async } from '@firebase/util'

import Test from './Header'
import Photocard from './Photocard'
import Button from 'react-bootstrap/Button'
import './Card.css'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { auth } from './firebase';
import { onAuthStateChanged, signOut} from 'firebase/auth';

import { motion } from "framer-motion"
import Landscape from './Landscape'










function Pic() {
  const [number,setNumber]  = useState(0)
  const [show ,setShow] = useState(false)
  const [hideUpload , setHide] = useState(true)
  const [hideAdd , setAdd] = useState(false)
  const text = useRef(null)
  const [info , setInfo] = useState([])
  const [sub , setSub] = useState("")
  const InformationCollection = collection(db,"blogs")
  const [Loading ,setLoading] = useState(true)
  const [user , setUser] = useState({})
  const [search , setSearch] = useState("")
  const [addCard , setAddCard] = useState(false)
  
  

        useEffect(() =>{
          onAuthStateChanged(auth , (currentUser) =>{
              setUser(currentUser)})
      }, [auth.currentUser])      

    useEffect(() =>{
      const Pull = async () =>{
        const data = await getDocs(InformationCollection)
        setInfo(data.docs.map((doc) => ({... doc.data() , id:doc.id})))
       
      }
      Pull()
    },[])
    useEffect(() =>{
       setShow(true)
       setAdd(false)
       

       
    }, [])
  
    const showUpload = () =>{
      setShow(false)
      setHide(false)
      setAdd(true)
    }
    

    
        
          const delect = async (id)=> {
    
            const userDoc = doc(db,"blogs",id)
          await deleteDoc(userDoc)
          window.location.reload(false)
          console.log("Hi")
         
        
      
        }
       
    
    

    return(
      <motion.div
       initial = {{x : -1000 , opacity : 0.2}}
       animate = {{x : 0 , opacity : 1}}
       transition = {{duration : 3}}
       
      >
        <Landscape></Landscape>
        <input className ="search" placeholder =" Search the title of topic you like" onChange = {(e) =>{setSearch(e.target.value)}}></input>
        <Container>
        <Row xs ="2"  md ="4" lg ="5"  className = "perentCard">
         
        
         
          {info.filter((e) =>{
              if(search == ""){
                  return e
              }
              else if(e.title.toLowerCase().includes(search.toLowerCase())){
                return e
              }
          })
          
          .map((e) =>{
            
            return(
              <Card style={{ width: '14rem'}} className = 'card' key ={e.id}>
              <Card.Img variant="top" src={e.url} className ="bigpic"/>
              <Card.Body>
                  <Card.Text className ="date">20-22</Card.Text>
                  <Card.Title className ="title">{e.title} </Card.Title>
                  <Card.Text className = "cardtext">
                  {e.article}
                  </Card.Text>
                  <Card.Text className = "cardtext">
                  {e.info}
                  </Card.Text>
                  <img src ={e.profile} className ="smallpic"></img>
                  <h3 className = 'smalltext'>{e.username}</h3>
                  <Link to ={e.id} className = "goto_btn">
                      <i className="gg-readme"></i>
                     
                  </Link>
                  <button className = "delect_btn" onClick = {() => {delect(e.id)}}>
                  <span className="material-symbols-outlined">
                  delete_forever
                  </span>
                  </button>
                  
              </Card.Body>
              </Card>
               
            )
            
          })
          
}
             <Card style={{ width: '14rem'}} className = 'card'>
            
            <Card.Body>
            
           
               <Link 
                 
                 to = "/addCard">
                 
               <Button className = 'btn'>
                 <h1>Add New</h1>
               </Button>
               </Link>
               
           </Card.Body>
           </Card>
          
           
           
        </Row>
        </Container>
        
        
     
       
      </motion.div>
      
    )
  


    
}
    


export default Pic

