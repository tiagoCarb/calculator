const add = function (numOne, numTwo) {
    return +numOne + +numTwo;
};

const subtract = function (numOne, numTwo) {
    return +numOne - +numTwo;
};

const multiply = function (numOne, numTwo) {
    return +numOne * +numTwo;
};

const divide = function (numOne, numTwo) {
    if (+numTwo === 0) {
        return "ERROR!";
    }
    return +numOne / +numTwo;
};

let numOne = "",
    numTwo = "",
    operator = [],
    lastOperator = "";

const operate = function (numOne, operator, numTwo) {
    switch (operator) {
        case "+":
            return Math.round(add(numOne, numTwo) * 100) / 100;
        case "-":
            return Math.round(subtract(numOne, numTwo) * 100) / 100;
        case "*":
            return Math.round(multiply(numOne, numTwo) * 100) / 100;
        case "/":
            return Math.round(divide(numOne, numTwo) * 100) / 100;
    }
}

const display = document.querySelector(".display");



const num = document.querySelectorAll(".num")
num.forEach(num => {
    num.addEventListener("click", () => {

        if (lastOperator !== "") {
            numTwo += num.textContent;
        } else {
            if (display.textContent == `${result}`) {
                numOne = "";
                numOne += num.textContent;
            } else {
                numOne += num.textContent;
            }
        }
    })
});

const op = document.querySelectorAll(".operator")
op.forEach(op => {
    op.addEventListener("click", () => {
        if (numOne === "") {
            return;
        }
        operator.push(op.textContent)
        lastOperator = operator[operator.length - 1]
        let penultimate = operator[operator.length - 2]
        if (numTwo != "" && numTwo != ".") {
            result = operate(numOne, penultimate, numTwo);
            numOne = `${result}`,
                numTwo = "";
        }
    })
})



const buttons = document.querySelectorAll("button")

const point = document.querySelector(".point")
point.addEventListener("click", () => {
    if (operator[0] === undefined) {
        if (numOne.indexOf(".") === -1) {
            numOne += ".";
        }
    } else {
        if (numTwo.indexOf(".") === -1) {
            numTwo += ".";
        }
    }
})

const ac = document.querySelector(".ac")
ac.addEventListener("click", () => {
    numOne = "";
    numTwo = "";
    operator = [];
    lastOperator = "";
    display.textContent = "";
})

const del = document.querySelector(".del")
del.addEventListener("click", () => {
    if (operator[0] === undefined) {
        numOne = numOne.slice(0, -1);
    } else if (operator[0] != undefined) {
        if (numTwo === "") {
            operator = [],
                lastOperator = "";
        } else {
            numTwo = numTwo.slice(0, -1);
        }
    }
})

const sign = document.querySelector(".sign")
sign.addEventListener("click", () => {
    if (operator[0] === undefined && numOne != "" && numOne != ".") {
        numOne = (-(+(numOne)));
        numOne = `${numOne}`;
    } else if (operator[0] != undefined && numTwo != "" && numTwo != ".") {
        numTwo = (-(+(numTwo)));
        numTwo = `${numTwo}`;
    }
})

let result;
const equal = document.querySelector(".equal")

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        if (operator[0] === undefined) {
            numOne += `${key}`
            display.textContent = `${numOne} `
        } else {
            numTwo += `${key}`
            display.textContent += ` ${numTwo}`
        }
    }
    switch (key) {
        case "+":
            if (numOne === "") {
                break;
            }
            operator.push(key)
            lastOperator = operator[operator.length - 1]
            penultimate = operator[operator.length - 2]
            if (numTwo != "" && numTwo != ".") {
                result = operate(numOne, penultimate, numTwo);
                numOne = `${result}`,
                    numTwo = "";
                display.textContent = `${numOne} ${lastOperator}`
            } else {
                display.textContent += `${lastOperator}`
            }
            break;
        case "-":
            if (numOne === "") {
                break;
            }
            operator.push(key)
            lastOperator = operator[operator.length - 1]
            penultimate = operator[operator.length - 2]
            if (numTwo != "" && numTwo != ".") {
                result = operate(numOne, penultimate, numTwo);
                numOne = `${result}`,
                    numTwo = "";
                display.textContent = `${numOne} ${lastOperator}`
            } else {
                display.textContent += `${lastOperator}`
            }
            break;
        case "*":
            if (numOne === "") {
                break;
            }
            operator.push(key)
            lastOperator = operator[operator.length - 1]
            penultimate = operator[operator.length - 2]
            if (numTwo != "" && numTwo != ".") {
                result = operate(numOne, penultimate, numTwo);
                numOne = `${result}`,
                    numTwo = "";
                display.textContent = `${numOne} ${lastOperator}`
            } else {
                display.textContent += `${lastOperator}`
            }
            break;
        case "/":
            if (numOne === "") {
                break;
            }
            operator.push(key)
            lastOperator = operator[operator.length - 1]
            penultimate = operator[operator.length - 2]
            if (numTwo != "" && numTwo != ".") {
                result = operate(numOne, penultimate, numTwo);
                numOne = `${result}`,
                    numTwo = "";
                display.textContent = `${numOne} ${lastOperator}`
            } else {
                display.textContent += `${lastOperator}`
            }
            break;
    }
    if (key === "Enter" || key === "=") {
        if (numOne != "" && numTwo != "" && numOne != "." && numTwo != ".") {
            result = operate(numOne, lastOperator, numTwo);
            display.textContent = `${result} `;
            numOne = `${result}`,
                numTwo = "",
                lastOperator = "",
                operator = [];
        }
    }
    else if (key === "c" || key === "C") {
        numOne = "";
        numTwo = "";
        operator = [];
        lastOperator = "";
        display.textContent = "";
    }
    else if (key === "Backspace") {
        if (operator[0] === undefined) {
            numOne = numOne.slice(0, -1);
            display.textContent = `${numOne} ${lastOperator} ${numTwo}`;
        } else if (operator[0] != undefined) {
            if (numTwo === "") {
                operator = [],
                lastOperator = "";
                display.textContent = `${numOne} ${lastOperator} ${numTwo}`;
            } else {
                numTwo = numTwo.slice(0, -1);
                display.textContent = `${numOne} ${lastOperator} ${numTwo}`;
            }
        }
    }

})

buttons.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        if (e.target.className === "equal" && numOne != "" && numTwo != "" && numOne != "." && numTwo != ".") {
            result = operate(numOne, lastOperator, numTwo);
            display.textContent = `${result}`;
            numOne = `${result}`,
                numTwo = "",
                lastOperator = "",
                operator = [];
        } else {
            display.textContent = `${numOne} ${lastOperator} ${numTwo}`;
        }
    })
})

