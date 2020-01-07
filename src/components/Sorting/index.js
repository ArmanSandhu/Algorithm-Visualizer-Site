import React, {Component} from 'react';
import ControlContainer from '../ControlContainer';

class Sorting extends Component {

    state = {
        defaultSliderValue: 8,
        sortingOptions: ["Selection Sort", "Merge Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"]
    }

    // Slider and Select Handlers

    handleSliderChange = (event) => {
        console.log(event.target.value);
    }

    handleSelectChange = (event) => {
        console.log(event.target.value);
    }

    // Button Handlers
    
    sortArray = (event) => {
        console.log("Sort Array");
    }

    resetArray = (event) => {
        console.log("Reset Array");
    }

    displayPseudoCode = (event) => {
        console.log("Show Algorithm")
    }

    render() {
        return (
            <div>
                <ControlContainer defaultSliderValue={this.state.defaultSliderValue} 
                                handleSliderChange={this.handleSliderChange}
                                handleSelectChange={this.handleSelectChange}
                                sortingOptions={this.state.sortingOptions} 
                                sortArray={this.sortArray} resetArray={this.resetArray} 
                                displayPseudoCode={this.displayPseudoCode}/>

            </div>
        );
    }
}

export default Sorting;