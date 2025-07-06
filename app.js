const operationVariable = [];

const display = document.querySelector("#display");

const numberContainer = document.querySelector("#number-container");
numberContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }

  if (!isNaN(operationVariable.slice(-1))) {
    operationVariable.pop();
  }

  operationVariable.push(+e.target.id);
  display.textContent = operationVariable.slice(-1);
});

const operatorContainer = document.querySelector("#operator-container");
operatorContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }

  if (e.target.id === "clear") {
    operationVariable.length = 0;
    display.textContent = "";
    return;
  }

  if (e.target.id === "equal") {
    operationVariable[0] = operate(
      operationVariable[0],
      operationVariable[2],
      operationVariable[1],
    );
    display.textContent = operationVariable[0];
    operationVariable.length = operationVariable[0] === "ERROR" ? 0 : 1;
    return;
  }

  if (operationVariable.length === 0) {
    return;
  }

  if (isNaN(operationVariable.slice(-1))) {
    operationVariable.pop();
    operationVariable.push(e.target.textContent);
    return;
  }

  if (operationVariable.length === 3) {
    operationVariable[0] = operate(
      operationVariable[0],
      operationVariable[2],
      operationVariable[1],
    );
    operationVariable.length = operationVariable[0] === "ERROR" ? 0 : 1;
    display.textContent = operationVariable[0];
    operationVariable.push(e.target.textContent);
    return;
  }

  operationVariable.push(e.target.textContent);
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
