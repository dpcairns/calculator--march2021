// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    // - What happens when they click the button?
    // - We need to get the values from the inputs
    //     - How? `inputElement.value`
    const value1 = addInput1.valueAsNumber;
    const value2 = addInput2.valueAsNumber;

    //     - Validate: `console.log()` the input values
    console.log(value1, value2);

    // - We add these numbers together
    //     - How? `const sum = Number(inputElement.value) + Number(otherInputElement.value)`
    const sum = value1 + value2;
    //     - Validate: `console.log()` the sum

    console.log(sum);
    // - Inject the sum into the div so the user can see it
    //     - How? `myDiv.textContent = sum`
    addAnswer.textContent = sum;
    //     - Validate: Go look at the site and do the stuff

});