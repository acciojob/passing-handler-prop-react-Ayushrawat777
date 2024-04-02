import React from 'react';
import './Selection.css';

const Selection = (props) => {   
    const { applyColor } = props;
     function changeColor(e){
        e.target.style.backgroundColor = applyColor.background;
    }
    
    return (
        <div className='fix-box' onClick={changeColor}> 
            <h2>Selection</h2>       
        </div>
    )
}

export default Selection;
