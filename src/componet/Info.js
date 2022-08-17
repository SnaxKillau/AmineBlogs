import React from 'react'
import './Card.css'

function Info(prop) {
    return (
        <div>
           <img src ="https://wallpaperaccess.com/full/1188135.jpg" className ="img"></img>
       
            <img className = "info_profile" src ={prop.img}></img>  
            <h5 className ="username"> {prop.username}</h5>
            <div className ="line"></div>
            

            <div className = "text_info">
                <h4>{prop.title}</h4>
                <p>{prop.info}</p>

            </div>
            
           
        </div>
    )
}

export default Info
