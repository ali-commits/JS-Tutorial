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
