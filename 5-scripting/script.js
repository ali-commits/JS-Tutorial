// function doSomthing1(name) {
//     console.log('hello ' + name);
// }

// const doSomthing2 = (name) => {
//     console.log('hello ' + name);
// };

// const doSomthing3 = function(name) {
//     console.log('hello ' + name);
// };

// doSomthing1('Ali');
// doSomthing2('Frank');
// doSomthing3('Lim')

// function printCalculation(num, fn) {
//     let results = fn(num);
//     console.log('the results are: ', results);
// }

// let bills = [10, 22, 33, 41, 51, 64];

// for (let bill of bills) {
//     printCalculation(bill,  (num) => {return num * 1.06; });
// }

$('#first, #third').text('html')

$('p').css('color','green')

$('#second').css('font-size','1.5rem')


$('#second').click(() => {
    $('#second').html('Clicked')
})

