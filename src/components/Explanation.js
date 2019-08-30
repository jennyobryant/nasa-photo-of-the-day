import React from 'react'; 
import "./Explanation.scss"; 

function Explanation (props){
    console.log(props); 
    return (
        <div className ="words">
            <p>
                {props.explanation}
            </p>
        </div>
    ); 
}

export default Explanation; 