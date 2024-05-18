const outputDisplay = document.getElementById('output-value');
const historyDisplay = document.getElementById('history-value');
const numberButtons = document.getElementsByClassName('number');
const operatorButtons = document.getElementsByClassName('operator');

let value = '';
let history = '';
let operator = '';

function appendNumber(number) {
    if (value == '0') {
        value = number;
    } else if (value.length <= 16) {
        value += number;
    }

    outputDisplay.innerHTML = value;
}

for (let btn of numberButtons) {
    btn.addEventListener('click', function () {
        appendNumber(btn.innerHTML);
    });
}

document.getElementById('clear').addEventListener('click', function () {
    outputDisplay.innerHTML = '';
    value = '';
});

document.getElementById('backspace').addEventListener('click', function () {
    value = value.slice(0, -1);
    outputDisplay.innerHTML = value;
});

function calculate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '×':
            return (num1 * num2).toString();
        case '÷':
            return (num1 / num2).toString();
        case '%':
            return (num1 % num2).toString();
        default:
            return 'Error';
    }
}

function operatorClick(op) {
    if (value == '') return;
    else if (history == '') {
        history = value;
    } else {
        history = calculate(history, value, operator);
    }
    value = '';
    operator = op;
    outputDisplay.innerHTML = '';
    historyDisplay.innerHTML = history;
}

for (let btn of operatorButtons) {
    btn.addEventListener('click', function () {
        operatorClick(btn.innerHTML);
    });
}

document.getElementById('=').addEventListener('click', function () {
    if (history == '' || value == '') return;
    value = calculate(history, value, operator);
    history = '';
    operator = '';
    outputDisplay.innerHTML = value;
    historyDisplay.innerHTML = '';
});
