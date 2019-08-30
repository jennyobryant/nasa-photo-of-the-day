import React from 'react'; 

function Picture(props){
    console.log(props); 
    return (
        <div>
            <h2>{props.title}</h2>
            <img src = {props.url}/>
        </div>
    ); 
}

export default Picture; 