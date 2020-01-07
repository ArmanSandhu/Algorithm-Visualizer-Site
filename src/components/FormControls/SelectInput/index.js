import React from 'react';
import './SelectInput.css';

const SelectInput = (props) => {
    // const selectOptions = Object.keys(props.sortingOptions).map((option, key) => 
    //     <option value={props.sortingOptions[key]}>{props.sortingOptions[key]}</option>    
    // )

    //console.log(props.sortingOptions);

    const selectOptions = Object.keys(props.sortingOptions).map(key => 
        <option key={key} value={props.sortingOptions[key]}>{props.sortingOptions[key]}</option>
    );

    return (
        <div className="SelectInput">
            <label htmlFor={props.id}>{props.label}</label>
            <select className="custom-select" onChange={props.handleSelectInputChange}>
                {selectOptions}
            </select>
        </div>
    );
}

export default SelectInput;