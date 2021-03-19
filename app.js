// import functions and grab DOM elements
import { divide } from './utils.js';
import { handleAddClick, handleMultiplyClick, handleSubtractClick } from './handlers.js';
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');

// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);
subtractButton.addEventListener('click', handleSubtractClick);


const multiplyButton = document.getElementById('multiply-button');

multiplyButton.addEventListener('click', handleMultiplyClick);

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');


divideButton.addEventListener('click', () => {
    const value1 = Number(divideInput1.value);
    const value2 = Number(divideInput2.value);
    const quotient = divide(value1, value2);

    divideAnswer.textContent = quotient;
});