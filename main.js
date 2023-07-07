//Event targets
const changesColor = document.getElementsByClassName("turquoise");

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
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.color = randomColor;
};

//=======================================================================================

//Event Listeners

//changesColor is an HTML collection, which will not work like an array, must convert the collection to an 
//array first.
var changesColorArray = [].slice.call(changesColor);

//Now we should be able to iterate through the converted array 
changesColorArray.forEach(assignEventsToTurquoiseArrayElements);