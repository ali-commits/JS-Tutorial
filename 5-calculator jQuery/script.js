// const outputDisplay = document.getElementById('output-value');
// const historyDisplay = document.getElementById('history-value');
// const numberButtons = document.getElementsByClassName('number');
// const operatorButtons = document.getElementsByClassName('operator');
// const clearButton = document.getElementById('clear');
// const backspaceButton = document.getElementById('backspace');
// const equalsButton = document.getElementById('=');

let currentValue = '';
let previousValue = '';
let currentOperator = '';

function appendNumber(number) {
    if (currentValue === '0') {
        currentValue = number;
    } else if (currentValue.length <= 16) {
        currentValue += number;
    }
    $('#output-value').text(currentValue);
}

// for (let btn of numberButtons) {
//     btn.addEventListener('click', () => {
//         appendNumber(btn.innerHTML);
//     });
// }

$('.number').click(function () {
    appendNumber($(this).text());
});

// clearButton.addEventListener('click', () => {
//     outputDisplay.innerHTML = '';
//     currentValue = '';
//     previousValue = '';
//     currentOperator = '';
//     historyDisplay.innerHTML = '';
// });

$('#clear').click(() => {
    $('#output-value').text('');
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    $('#history-value').text('');
});

// backspaceButton.addEventListener('click', function () {
//     currentValue = currentValue.slice(0, -1);
//     outputDisplay.innerHTML = currentValue;
// });

$('#backspace').click(function () {
    currentValue = currentValue.slice(0, -1);
    $('#output-value').text(currentValue);
});

function calculate(number1, number2, operator) {
    if (operator == '+') {
        return number1 + number2;
    }
    if (operator == '-') {
        return number1 - number2;
    }
    if (operator == '×') {
        return number1 * number2;
    }
    if (operator == '÷') {
        return number1 / number2;
    }
}

// for (let btn of operatorButtons) {
//     btn.addEventListener('click', function () {
//         if (previousValue == '') {
//             previousValue = currentValue;
//             currentValue = '0';
//             outputDisplay.innerHTML = currentValue;
//             historyDisplay.innerHTML = previousValue;
//         } else {
//             previousValue = calculate(
//                 Number(previousValue),
//                 Number(currentValue),
//                 currentOperator
//             );
//             currentValue = '';
//             outputDisplay.innerHTML = currentValue;
//             historyDisplay.innerHTML = previousValue;
//         }

//         currentOperator = btn.innerHTML;
//     });
// }

$('.operator').click(function () {
    if (previousValue == '') {
        previousValue = currentValue;
        currentValue = '0';
        $('#output-value').text(currentValue);
        $('#history-value').text(previousValue);
    } else {
        previousValue = calculate(
            Number(previousValue),
            Number(currentValue),
            currentOperator
        );
        currentValue = '';
        $('#output-value').text(currentValue);
        $('#history-value').text(previousValue);
    }

    currentOperator = $(this).text();
});

$('#\\=').click(function () {
    if (previousValue && currentValue && currentOperator) {
        currentValue = calculate(
            Number(previousValue),
            Number(currentValue),
            currentOperator
        );
        previousValue = '';
        $('#output-value').html(currentValue);
        $('#history-value').html(previousValue);
    }
});
