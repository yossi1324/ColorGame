//Vars:
var numOfSquares = 6; // start in hard mode
var colors = [];
var pickedColor;

//Selectors :
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".modeButtons");

init();

function init() {
    //mode buttons
    setupModeButtons();
    //squares apperance
    setupSquares();
    //reset !
    newGameSet(numOfSquares);
}



//setup Mode Buttons
function setupModeButtons(){
	for (var i = 0, length1 = modeButtons.length; i < length1; i++) {
	        modeButtons[i].addEventListener("click", function() {
	            modeButtons[0].classList.remove("selected");
	            modeButtons[1].classList.remove("selected");
	            this.classList.add("selected");
	            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
	            newGameSet(numOfSquares);
	        })
	    }
}
//squares set up
function setupSquares (){
	for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                message.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeAllColors(clickedColor);
            } else {
                this.style.backgroundColor = "rgb(37, 37, 52)"
                message.textContent = "Try Again!"
            }
        });
    }
}

//function that set new game
function newGameSet(num) {
    colors = generateRandomColors(numOfSquares);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    for (let i = 0, length1 = squares.length; i < length1; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colors";
    h1.style.background = "steelblue";
    message.textContent = "";
}

//when finding the correct color
function changeAllColors(color) {
    for (let i = 0, length1 = squares.length; i < length1; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

//picking random number (color number) from colors pallet
//returns random color 
function colorPicker() {
    return colors[Math.floor(Math.random() * colors.length)];
}

//num is how many colors you need in array
function generateRandomColors(num) {
    var arr = [];
    for (let i = 0, length1 = num; i < length1; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

//genrate one color only
function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
}

//new game clicked 
resetButton.addEventListener("click", function() {
    newGameSet(numOfSquares);
})

