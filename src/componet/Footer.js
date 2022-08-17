import React from 'react'
import { Container,Row ,Card,} from 'react-bootstrap'

function Footer() {
    return (
        <div>
             <img className = "sakura_video" src ="https://i.pinimg.com/originals/34/16/fc/3416fc4113b69a0bf1cc75a772c4b5c4.gif"></img>
           <Container>
            <Row xs ={2}  md ={4} lg ={5}  className = "perentCard">
            
                <Card style={{ width: '20rem'}} className = 'card_input'>
            
            <Card.Body>
                
            <h3 className = "inputtextheader" style ={{textAlign:"center"}}> About me</h3>
                <h3 className = "inputtextheader"> Professor:</h3>
                <h3 className = "inputtextheader"> Chhim Bunchun</h3>
                <h3 className = "inputtextheader"> My Name:</h3>
               
                <h3 className = "inputtextheader">Pho Phopversna</h3>
                
                <h3 className = "inputtextheader">Job:</h3>
                <h3 className = "inputtextheader">Student of Rupp year2 of ITE</h3>
                
                
               
            </Card.Body>
            </Card>
            
            </Row>
          
            </Container>

           
          
        </div>
    )
}

export default Footer
