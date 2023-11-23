document.querySelectorAll(".cross_inner");
const buttons = document.getElementsByTagName("button");

let cross_array = new Array();
let crosses = new Array();
let circles = new Array();
let clicked = new Array();
let cells = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

const buttonPressed = (event) => {
  let id = event.target.id;

  cross_array.push(id); //Add id to array

  const filteredArr = cross_array.filter(function (val) {
    return !(val === ""); //If cell clicked more thaan one time it return '' in array
  });

  let element = document.getElementById(id).lastElementChild; // Get last child of clicked element

  if (
    element.classList.contains("circle") ||
    element.classList.contains("cross")
  ) {
    return false; //If cell already have clicked and taked class it will cause cross and circle in one cell
  }

  if (Number.isInteger(filteredArr.length / 2)) {
    //After each click we change cross to circle or circle to cross

    for (let num of filteredArr) {
      let clicked_cell = cells.find(function (e) {
        return e == num;
      });
      let index = cells.indexOf(clicked_cell);
      if (index != -1) {
        cells.splice(index, 1);
      }
    }

    let circle_id = getRandomItem(cells);
    let circle_random = document.getElementById(circle_id).lastElementChild;
    circle_random.classList.add("circle");
    circles.push(circle_id);
  } else {
    element.classList.add("cross");
    crosses.push(id);
  }
  console.log(cells);
  console.log(circles);
};

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

function arrayRemove(arr, value) {
  return arr.filter(function (geeks) {
    return geeks != value;
  });
}

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}
