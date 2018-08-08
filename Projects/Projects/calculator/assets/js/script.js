const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculatorKeys");

const key = i.target
const action = key.dataset.action

keys.addEventListener("click", i => {
    if(i.target.matches("button")){
        console.log("YEA");
    }
})

if (!action) {
console.log('number key!')
}

if (
action === 'add' ||
action === 'subtract' ||
action === 'multiply' ||
action === 'divide'
) {
console.log('operator key!')
}

if (action === 'decimal') {
console.log('decimal key!')
}

if (action === 'clear') {
console.log('clear key!')
}

if (action === 'calculate') {
console.log('equal key!')
}