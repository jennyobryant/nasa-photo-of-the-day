import React from 'react'; 
import "./Picture.scss"; 

function Picture(props){
    console.log(props); 
    return (
        <div className ="picture">
            <h2>{props.title}</h2>
            <img src = {props.url}/>
        </div>
    ); 
}

export default Picture; 