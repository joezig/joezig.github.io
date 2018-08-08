var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    modeButtonListeners();
    setupSquares();
    reset();
}

function modeButtonListeners() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numSquares = 3;
            } else if(this.textContent === "Hard") {
                numSquares = 6;
            } else {
                numSquares = 9;
            }
            // this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
    // add listeners to squares
        squares[i].addEventListener("click", function() {
            // grab color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare to pickedColor variable
            if(clickedColor === pickedColor) {
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

resetButton.addEventListener("click", function() {
    reset();
})

function changeColors(color) {
    // loop through each square
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColor() {
    // pick red value from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick green value from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick blue value from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
    // make array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function reset() {
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick new color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    // turn stripe color back to white
    h1.style.backgroundColor = "steelblue";
    // change colors of squares
    for(var i = 0; i < squares.length; i++)
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
};