const operationVariable = [];

const display = document.querySelector("#display");

const numberContainer = document.querySelector("#number-container");
numberContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  display.textContent = e.target.id;
  if (operationVariable.length === 3) {
    operationVariable.length = 0;
  }
  operationVariable.push(+e.target.id);
  console.log(operationVariable);
});

const operatorContainer = document.querySelector("#operator-container");
operatorContainer.addEventListener("click", (e) => {
  if (e.target.id === "clear") {
    operationVariable.length = 0;
    display.textContent = "";
  } else if (e.target.id === "equal") {
    operationVariable[0] = operate(
      operationVariable[0],
      operationVariable[2],
      operationVariable[1],
    );
    display.textContent = operationVariable[0];
  } else {
    if (operationVariable.length === 2) {
      operationVariable.length = 1;
    }
    operationVariable.push(e.target.textContent);
  }
  console.log(operationVariable);
});

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b === 0 ? "ERROR" : a / b;
}
