// Question 1

const myFunctionExpression = function() {
    console.log("Lise");
}

// Question 2

const clickButton = document.querySelector(".btn");
clickButton.addEventListener("click", clickable);

function clickable(){
    console.log("I was clicked");
}

// Question 3

const inputName = document.querySelector("#firstName");
inputName.addEventListener("keydown", keyLogger)

function keyLogger(event){
    console.log(event.key);
}

// Question 4

const hoverOver = document.querySelector("button");
hoverOver.addEventListener("mouseover", addClass);

function addClass() {
    hoverOver.classList.add("hover");
}

// Question 5

const hoverOut = document.querySelector("[data-animal='dog']");
hoverOut.addEventListener("mouseout", removeClassList);

function removeClassList() {
    hoverOut.classList.remove("hover");
}


// Question 6

const list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", AnimalValue)
}

function logAnimalValue() {
  console.log(list[i].dataset.animal);
    }
}


// Question 7

const animal ="cow";

switch (animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break; 
    default:
        console.log("Harrumph");
}


// Question 8

const sheep = ["Malcom", "Anders", "Marie"]; 

sheep.forEach(function (sheepName) {
    console.log(sheepName);
});


// Question 9

function timer () {
    console.log("Hello");
    if (counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}
let counter = 0;
const intervalId = setInterval(timer, 500);


// Question 10

const container = document.querySelector(".container");

function textUpdate () {
    container.innerText = "Text Updated";
}

setTimeout (textUpdate, 2000);