let currentInput = "";
let previousInput = "";
let currentOperation = "";
let display = document.getElementById('result');

// clear function
const clearDisplay = function(){
    display.textContent = "";
    currentInput = "";
    previousInput = "";
    currentOperation = "";
}

// clearing the display result box
document.querySelector('#clear').addEventListener('click', clearDisplay);


// function to append the number button pressed
// the number is passed when the respective button (1,2,3,4,5....9) is pressed
const appendNumber = function(number){
    // appending the new digit entered
    currentInput += number;
    // a number(previous input) arithmetic operation(+,-.*,/) another number(current input)
    display.textContent = `${previousInput} ${currentOperation} ${currentInput}`;
    // console.log(`Previous Input => ${previousInput}`);
    // console.log(`Current Input ${currentInput}`);
    // console.log(`Current Operation => ${currentOperation}`);

}

// appending operations
const appendOperation = function(operation){
    if(currentInput === "") // current input needs to have a numeric value because arithmetic signs cannot be placed side by side(adjacent)
        return;
    if(previousInput !== ""){   // if current and previous inputs are not empty means there is also a operation between them so we can perform our calculation
        // if current and previous not empty imeediately perform calculation and return result so new number or symbol can be appended
        calculate();
    }
    // if we come down here
    // it means only one number appended and then we appended an operation 
    currentOperation = operation;
    previousInput = currentInput;
    // when operation is appened the current value needs to be emptied so that new value can be appened
    // if current value is emptied we won't be able to append operations(symbols) side by side
    // and if we are emptying the current value then first we need to copy the value of current to previous before emptying current
    currentInput = "";
    // first a number then a arithmetic symbol 
    // no number no arithmetic symbol will append
    display.textContent = `${previousInput} ${currentOperation}`;
    // console.log(`Previous Input => ${previousInput}`);
    // console.log(`CurrentInput => ${currentInput}`);
    // console.log(`Current Operation => ${currentOperation}`);

}

const calculate = function(){
    if(currentInput === "" || previousInput === "")
        return;
    let cal;
    // convertion required to perform calculation
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);
    switch(currentOperation){
        case '+':
            cal = prev + curr;
            break;
        case '-':
            cal = prev - curr;
            break;
        case '*':
            cal = prev * curr;
            break;
        case '/':
            if(curr === 0){
                alert(`Cannot be divided by 0`);
                clearDisplay();
                return;
            }
            cal = prev / curr;
            break;
        default:
            return;
    }
    // after calculation converted to string so that display of numbers and operations can be shown
    currentInput = cal.toString();
    currentOperation = "";
    previousInput = "";
    display.textContent = currentInput;
}







