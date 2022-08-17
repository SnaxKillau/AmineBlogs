import Button from '@restart/ui/esm/Button'
import {React , useState} from 'react'
import { Container,Row ,Card,} from 'react-bootstrap'
import AddCard from './AddCard'
import { motion } from "framer-motion"



function AddContext() {
    const [mainTitle , setMainTitle] = useState("")
    
    const [text , setText] = useState("")
    const [display , setDisplay] = useState(false)
    const [addDisplay , setAdd] = useState(true)


    const next = () =>{
        setDisplay(true)
        setAdd(false)
    }
    



    return (
        <div>
        
        

            <img className = "sakura_video" src ="https://i.pinimg.com/originals/34/16/fc/3416fc4113b69a0bf1cc75a772c4b5c4.gif"></img>
            
           {
                display ||  
                <Container>
                <Row xs ={2}  md ={4} lg ={5}  className = "perentCard">
                
                 
                  <Card style={{ width: '20rem'}} className = 'context_input'>
                
                    <Card.Body>
                    
                    <h3 className = "context_header"> Main Title </h3>
                    <input className = "context_field" onChange = {(e) => {setMainTitle(e.target.value)}} placeholder = " Enter the Title of topic"></input>
                 
                    <h3 className = "context_header2 " > Content </h3>
                    <textarea className ="context_field1" onChange = {(e) => {setText(e.target.value)}} placeholder ="This is the long topic that people need to read and after we press next button it's just some the information of card to make people know what is the topic that we saw it at home page"></textarea>
                    <Button className = 'btn_next'>
                    <h3 className = "btn_text" onClick = {() => {next()}}>Next</h3>
                    </Button>
                  
                    </Card.Body>
                    </Card>
              
                
                </Row>
              
                </Container>
               
            }

           
           {
               addDisplay || <AddCard mainTitle = {mainTitle}  text = {text}></AddCard>
           }
            
            
        </div>
    )
}

export default AddContext
