const output = document.getElementById('output-value');

let value = '';

function appendNumber(number) {
    if (value == '0') {
        value = number;
    } else if (value.length <= 16) {
        value += number;
    }

    output.innerHTML = value;
}

let numberButtons = document.getElementsByClassName('number');

for (let btn of numberButtons) {
    btn.addEventListener('click', function () {
        appendNumber(btn.innerHTML);
    });
}


document.getElementById('clear').addEventListener('click', function () {
    output.innerHTML = '';
    value = '';
});