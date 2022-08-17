import {React ,useEffect} from 'react'
import { collection } from 'firebase/firestore';
import { useState } from 'react'
import {db} from './firebase'
import {getDocs} from 'firebase/firestore'
import { Container,Row ,Card,Col, Button} from 'react-bootstrap'
import { motion } from 'framer-motion';


function News() {
    const InformationCollection = collection(db,'News')
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
           <h3><b className ="For_text" style ={{marginLeft:"30px"}}>News</b></h3>
            {
               
              info.map((e) =>{
                return(
                      <motion.div 
                      initial = {{x : -1000 , opacity : 0.2}}
                      animate = {{x : 0 , opacity : 1}}
                      transition = {{duration : 3}}
                      key ={e.id}>

                
                  <Container>
                    <Row xxl = {12} xl = {12} lg ={12} md ={12} sm ={12}>
                    <Card>
                      <Card.Header className ="For_text">{e.information}</Card.Header>
                      <Card.Body >
                        <img src = {e.img} className ="news_img"></img>
                        <Card.Title ><b className ="For_text"> {e.title}</b></Card.Title>
                        <Card.Text className ="For_text">
                          {e.content}
                        </Card.Text>
                        <Button variant="primary">
                          <a href={e.link} target="_blank" rel="noreferrer" className ="News_link">
                              View offical Web
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
          

                    </Row>
                  </Container>
                      </motion.div>
                )
              })
            }
            
        </div>
    )
}

export default News
