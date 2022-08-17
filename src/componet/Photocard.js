

import React from 'react'
import { Card,Button} from 'react-bootstrap'

import Container from 'react-bootstrap/esm/Container'
import  Row  from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Photocard(prop) {
    return (
        <div
        >
            
           <Container>
          <Row xs ={2}  md ={4} lg ={5}  className = "perentCard">
          <Card style={{ width: '14rem'}} className = 'card'>
            <Card.Img variant="top" src={prop.url1} className ="bigpic"/>
            <Card.Body>
                <Card.Text className ="date">20-22</Card.Text>
                <Card.Title className ="title">{prop.title1} </Card.Title>
                <Card.Text className = "cardtext">
                {prop.text1}
                </Card.Text>
                <img src ={prop.url1} className ="smallpic"></img>
                <h3 className = 'smalltext'>username</h3>
                <Link to='/home' className = "goto_btn">
                    <i className="gg-readme"></i>
                </Link>
               
            </Card.Body>
            </Card>
            
            

            <Card style={{ width: '14rem'}} className = 'card'>
            <Card.Img variant="top" src={prop.url2} className ="bigpic"/>
            <Card.Body>
                <Card.Text className ="date">20-22</Card.Text>
                <Card.Title className ="title">{prop.title2} </Card.Title>
                <Card.Text className = "cardtext">
                {prop.text2}
                </Card.Text>
                <img src ={prop.url2} className ="smallpic"></img>
                <h3 className = 'smalltext'>username</h3>
                <Link to='/home' className = "goto_btn">
                    <i className="gg-readme"></i>
                </Link>
               
            </Card.Body>
            </Card>
            <Card style={{ width: '14rem'}} className = 'card'>
            <Card.Img variant="top" src={prop.url3} className ="bigpic"/>
            <Card.Body>
                <Card.Text className ="date">20-22</Card.Text>
                <Card.Title className ="title">{prop.title3} </Card.Title>
                <Card.Text className = "cardtext">
                {prop.text3}
                </Card.Text>
                <img src ={prop.url3} className ="smallpic"></img>
                <h3 className = 'smalltext'>username</h3>
                <Link to='/home' className = "goto_btn">
                    <i className="gg-readme"></i>
                </Link>
            </Card.Body>
            </Card>
            <Card style={{ width: '14rem'}} className = 'card'>
            <Card.Img variant="top" src={prop.url4} className ="bigpic"/>
            <Card.Body>
                <Card.Text className ="date">20-22</Card.Text>
                <Card.Title className ="title">{prop.title4} </Card.Title>
                <Card.Text className = "cardtext">
                {prop.text4}
                </Card.Text>
                <img src ={prop.url4} className ="smallpic"></img>
                <h3 className = 'smalltext'>username</h3>
                <Link to='/home' className = "goto_btn">
                    <i className="gg-readme"></i>
                </Link>
            </Card.Body>
            </Card>
            
            
                    
         
            </Row>
            </Container>
        </div>
           
            
            


            
         
    )
}

export default Photocard
