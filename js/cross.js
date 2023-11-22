document.querySelectorAll(".cross_inner");
const buttons = document.getElementsByTagName("button");

let cross_array = new Array();
let crosses = new Array();
let circles = new Array();
let cells = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

const buttonPressed = (event) => {
  let id = event.target.id;
  cross_array.push(id); //Add id to array
  let element = document.getElementById(id).lastElementChild; // Get last child of clicked element

  const filteredArr = cross_array.filter(function(val) {
	  return ! (val === ""); //If cell clicked more thaan one time it return '' in array
  });

  if (element.classList.contains("circle") || element.classList.contains("cross")) {
   return false;  //If cell already have clicked and taked class it will cause cross and circle in one cell
  } 

  if (Number.isInteger(filteredArr.length / 2)) { //After each click we change cross to circle or circle to cross
    element.classList.add("circle");
    circles.push(id);
  } else {
    element.classList.add("cross");
    crosses.push(id);
  }
  console.log(filteredArr);
};

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
};

function arrayRemove(arr, value) { 

	return arr.filter(function (geeks) { 
		return geeks != value; 
	}); 

} 

for (let num of cross_array) {
  if (cells.includes(num)) {
    arrayRemove(cross_array, num);
  }
};
