import React from 'react';
import './SliderInput.css';

const SliderInput = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="range" className="custom-range"
                   id={props.id} min={props.minimum} max={props.maximum} 
                   defaultValue={props.rangeValue} onChange={props.handleSliderChange}/>
        </div>
    );
}

export default SliderInput;