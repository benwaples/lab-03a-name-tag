//all DOM elements being used

const pinkButt = document.querySelector('.pink')
const lightGreenButt = document.querySelector('.lightgreen')
const lightBlueButt = document.querySelector('.lightblue')

const hello = document.querySelector('.hello')
const myName = document.querySelector('.myName')
const bottom = document.querySelector('.bottom')
const name = document.querySelector('.name')
const counterElement = document.querySelector('.counter')
counterElement.textContent = 0;
let counter = 0;



const submitName = document.querySelector('.submitName')

// changing the color of the name tag background

function changeColor(color) {
    hello.style.backgroundColor = color;
    myName.style.backgroundColor = color;
    bottom.style.backgroundColor = color;
    counter += 1
    counterElement.textContent = counter
}

//event listeners for the buttons to change the background

pinkButt.addEventListener('click', () => {
    if (hello.style.backgroundColor !== 'pink') {
        changeColor('pink')
    }
})

lightGreenButt.addEventListener('click', () => {
    if (hello.style.backgroundColor !== 'lightgreen') {
        changeColor('lightgreen')
    }
})

lightBlueButt.addEventListener('click', () => {
    if (hello.style.backgroundColor !== 'lightblue') {
        changeColor('lightblue')
    }
})

//event listener for changing the name tag

submitName.addEventListener('click', () => {
    let yourName = document.querySelector('.yourName')
    let userName = yourName.value;
    if (name.textContent !== userName) {
        name.textContent = userName
        counter += 1
        counterElement.textContent = counter
    }
})




