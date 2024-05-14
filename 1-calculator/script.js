let output = document.getElementById('output-value');

let value = '';

document.getElementById('1').addEventListener('click', function () {
    value += '1';
    output.innerHTML = value;
});

document.getElementById('2').addEventListener('click', function () {
    value += '2';
    output.innerHTML = value;
});

document.getElementById('clear').addEventListener('click', function () {
    output.innerHTML = '';
});

document.getElementById('=').addEventListener('click', function () {
    document.getElementById('output').style.backgroundColor = 'red';
    
});

document.getElementById('backspace').addEventListener('click', function () {
    value = value.slice(0, -1);
    output.innerHTML = value;
});
