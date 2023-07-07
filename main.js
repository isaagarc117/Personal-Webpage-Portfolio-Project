/*PERSONAL PORTFOLIO PROJECT - JAVASCRIPT*/ 

//Event targets 
const changesColor = document.getElementsByClassName("turquoise");

const buttonContainer = document.getElementsByClassName("button-container")[0];

const resetButton = document.getElementById("reset-button");

const disableButton = document.getElementById("disable-color-change-button");

//=======================================================================================

//Global Functions - Not directly associated to event listeners

// This random number function will create color codes for the randomColor variable
function colorValue() {
    return Math.floor(Math.random() * 256);
  };


//funciton that unhides the button once the color has changed 
function unhideButton(){
    buttonContainer.style.display = 'flex';
};


//function that resets the colors back to original and hides the reset button
function resetColor(){

    for(i=0;i<changesColorArray.length;i++){
        const originalColor = 'rgb(8, 185, 185)';
        changesColorArray[i].style.color = originalColor;
    }

    buttonContainer.style.display = 'none';

};

//=======================================================================================

//Event Functions - either require an element (iteration taking place) or an event argument

//This function assigns an event listener to a target
function assignEventsToTurquoiseArrayElements(element){

    element.addEventListener('mouseover', changeColor);
    
};

//This function deletes even listeners from a target
function deleteEventsFromTurquoiseArrayElements(element){
    element.removeEventListener('mouseover', changeColor);
}



//this function changes the color of the element to which the event is attached to
function changeColor(event){
    const originalColor = 'rgb(8, 185, 185)';
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.color = randomColor;

    if(originalColor !== randomColor){
        unhideButton();
    }
};

//function that disables the color change functionality
function disableColorChange(event){

    //disable the event listener on all turquoise array elements
    changesColorArray.forEach(deleteEventsFromTurquoiseArrayElements);

    resetColor();
};

//=======================================================================================

//Event Listeners


//Event Listeners associated with the class = 'turquoise' elements

//changesColor is an HTML collection, which will not work like an array, must convert the collection to an 
//array first.
var changesColorArray = [].slice.call(changesColor);

//Now we should be able to iterate through the converted array 
changesColorArray.forEach(assignEventsToTurquoiseArrayElements);


//Event Listeners associated with the reset button
resetButton.addEventListener('click', resetColor);


//Event Listeners associated with the disable button
disableButton.addEventListener('click', disableColorChange);