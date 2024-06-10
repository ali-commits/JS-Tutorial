// let Ali_car = {
//     type: 'SUV',
//     model: 'X50',
//     year_m: 2019,
//     milage: 30000,
//     year_selling: 2019,
//     sold: null,
// };

// let Frank_car = {
//     type: 'sedan',
//     model: 'vios',
//     year_m: 2019,
//     milage: 30000,
//     year_selling: 2019,
// };

// Ali_car.milage = 40000;
// Ali_car.gear = 'Auto';

// console.log($('#text'));

let names = [{
    firstName: 'Ali',
    lastName: 'Alrabee',
    address: {
        city: 'KL',
        country: 'Malaysia',
        state: 'KL',
    },
    fullname: function () {
        return Ali.firstName + ' ' + Ali.lastName;
    },
},{
    firstName: 'Bob',
    lastName: 'Smith',
    address: {
        city: 'KL',
        country: 'Malaysia',
        state: 'KL',
    },
    fullname: function () {
        return Ali.firstName + ' ' + Ali.lastName;
    },
}];



console.log(names[1].firstName);
