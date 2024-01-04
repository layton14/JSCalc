
let display = document.getElementById("calcDisplay");
const operationsArr = ["C", "+/-", "%", "/", "x", "*", "-", "+", "=", "."];

function addCalcButtonEvent() {
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", (event) => {
            updateDisplay(event.target);
        })
    });
}

function updateDisplay(val) {
    const currentDisplay = display.innerText;
    if (validInput(val) == true) {
        switch(val.innerText) {
            case "C":
                display.innerText = "0";
                break;
            case "=":
                if (operationsArr.includes(currentDisplay.slice(-1)) == true) {
                    display.innerText = currentDisplay.slice(0, -1);
                } else {
                    display.innerText = eval(currentDisplay);
                }
                break;
            case "+/-":
                if (currentDisplay.charAt(0) === "-") {
                    display.innerText = currentDisplay.substring(1);
                } else {
                    display.innerText = "-" + currentDisplay;
                }
                break;
            case "x":
                display.innerText += "*";
                break;
            default:
                if (currentDisplay === "0") {
                    display.innerText = val.innerText;
                } else {
                    display.innerText += val.innerText;
                }
                break;
        }
    }
}

function validInput(val) {

    const currentCharIsOp = val.className == "operation";
    const lastCharIsOp = operationsArr.includes(display.innerText.slice(-1));
    const decimalInDisplay = display.innerText.includes(".");

    if (val.innerText == "C") {
        return true;
    } else if (display.innerText.length > 11) {
        return false;
    } else if(currentCharIsOp == true && lastCharIsOp == true) {
        return false;
    } else if (decimalInDisplay == true && val.innerText == ".") {
        return false;
    } else {
        return true;
    }
}

addCalcButtonEvent();