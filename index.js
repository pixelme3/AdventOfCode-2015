// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// Advent of Code Day 1 Part 1

const button = document.getElementById('button');
button.addEventListener('click', getDirections);

function getDirections() {
  let startingFloor = 0;
  let directions = prompt("Santa's Directions: ");

  console.log(directions);
  followDirections(directions);
}

function followDirections(directions) {
  let i;
  let currentFloor = 0;
  // Part 2
    let allPositions = [];

  for(i = 0; i < directions.length; i++){
    //console.log(directions.charAt(i));
    if(directions.charAt(i) == '(') {
      currentFloor += 1;
     //console.log("Santa is on floor: " + currentFloor);
    } else if(directions.charAt(i) == ')'){
      currentFloor -= 1;
      //console.log("Santa is on floor: " + currentFloor);
    } else {
       console.log("Direction is not legible.");
    }
    
    // Part 2
      allPositions.push(currentFloor);
  }

  console.log("Santa is on floor: " + currentFloor);
  
  // Part 2
    console.log(allPositions);
    console.log("Santa entered the basement at position: " + (allPositions.findIndex(findBasement) + 1));
}

// Day 1 Part 2 Function

function findBasement(position) {
  return position == -1;
}

// End of Day 1