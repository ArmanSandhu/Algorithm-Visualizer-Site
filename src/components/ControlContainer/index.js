import React, { Component } from 'react';
import './ControlContainer.css';
import SliderInput from '../FormControls/SliderInput';
import SelectInput from '../FormControls/SelectInput';
import ClickButton from '../FormControls/ClickButton';

const ControlContainer = (props) => {

    return (
        <div className="ControlContainer">
            <div className="sliderContainer">
            <SliderInput id="slider" label="Array Size" minimum="4" maximum="320"
                         rangeValue={props.defaultSliderValue} handleSliderChange={props.handleSliderChange}/>
            </div>

            <div className="selectContainer">
                <SelectInput id="selectSorting" label="Choose your Sorting Method" 
                         sortingOptions={props.sortingOptions} handleSelectInputChange={props.handleSelectChange}/>
            </div>

            <div className="buttonContainer">
                <ClickButton handleClick={props.sortArray} label="Sort!"/>
                <ClickButton handleClick={props.resetArray} label="Reset!"/>
                <ClickButton handleClick={props.displayPseudoCode} label="Show Code!"/>
            </div> 
        </div>
    );
}

export default ControlContainer; 