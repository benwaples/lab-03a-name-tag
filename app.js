//all DOM elements being used

const pinkButt = document.querySelector('.pink')
const lightGreenButt = document.querySelector('.lightgreen')
const lightBlueButt = document.querySelector('.lightblue')

const hello = document.querySelector('.hello')
const myName = document.querySelector('.myName')
const bottom = document.querySelector('.bottom')
const name = document.querySelector('.name')

const submitName = document.querySelector('.submitName')

// changing the color of the name tag background

function changeColor(color) {
    hello.style.backgroundColor = color;
    myName.style.backgroundColor = color;
    bottom.style.backgroundColor = color;
}

//event listeners for the buttons to change the background

pinkButt.addEventListener('click', () => {
    changeColor('pink')
})

lightGreenButt.addEventListener('click', () => {
    changeColor('lightgreen')
})

lightBlueButt.addEventListener('click', () => {
    changeColor('lightblue')
})

//event listener for changing the name tag

submitName.addEventListener('click', () => {
    let yourName = document.querySelector('.yourName')
    let userName = yourName.value;
    name.textContent = userName
})


