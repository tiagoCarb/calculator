const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const multiply = function (numOne, numTwo) {
  return numOne * numTwo;
};

const divide = function (numOne, numTwo) {
  return numOne / numTwo;
};

let numOne, numTwo;

const operator = function (numOne, operator, numTwo) {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);
        case "-":
           return subtract(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
    }
}