import React from 'react'; 

function Explanation (props){
    console.log(props); 
    return (
        <div>
            <p>
                {props.explanation}
            </p>
        </div>
    ); 
}

export default Explanation; 