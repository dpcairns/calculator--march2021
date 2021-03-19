// IMPORT MODULES under QUnit.test here:
import { add, subtract, multiply, divide } from '../utils.js';

QUnit.test('it should return 7 if I pass it 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're QUnit.testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(add(3, 4), 7);
});

QUnit.test('it should return -3 if I pass it -10 and 7', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = -3;
    
    //Act 
    // Call the function you're QUnit.testing and set the result to a const
    const actual = add(-10, 7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


QUnit.test('subtract should return 5 if I pass it 10 and 5', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're QUnit.testing and set the result to a const
    const actual = subtract(10, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


QUnit.test('multiply should return 8 if I pass it 4 and 2', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = 8;
    
    //Act 
    // Call the function you're QUnit.testing and set the result to a const
    const actual = multiply(4, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


QUnit.test('divide should return 4 if I pass it 16 and 4', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're QUnit.testing and set the result to a const
    const actual = divide(16, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});