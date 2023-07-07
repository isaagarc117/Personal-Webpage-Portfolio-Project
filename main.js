//Event targets
const changesColor = document.getElementsByClassName("turquoise");

const resetButton = document.getElementsByClassName("button")[0];

//=======================================================================================

//Event Functions

//This function assigns an event listener to a target
function assignEventsToTurquoiseArrayElements(element){

    element.addEventListener('mouseover', changeColor);
    
};

// This random number function will create color codes for the randomColor variable
function colorValue() {
    return Math.floor(Math.random() * 256);
  };

//this function changes the color of the element to which the event is attached to
function changeColor(event){
    const originalColor = 'rgb(8, 185, 185)';
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.color = randomColor;

    if(originalColor !== randomColor){
        unhideButton();
    }
};


//funciton that unhides the button once the color has changed 
function unhideButton(){
    resetButton.style.display = 'flex';
};


//function that resets the colors back to original and hides the reset button
function resetColor(event){

    for(i=0;i<changesColorArray.length;i++){
        const originalColor = 'rgb(8, 185, 185)';
        changesColorArray[i].style.color = originalColor;
    }

    event.target.style.display = 'none';

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