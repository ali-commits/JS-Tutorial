// Homework 3: Do you love me? [2]

// Requirements
// there should be 2 stages to this homework

// Stage 1:
// 1- move 'NO' button to a random location on the screen when havering overit with the mouse or when clicking
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"
// 3- after certen number of times the 'NO' button should be positioned above the 'YES' button and we start stage 2

// Stage 2:
// 1- when hovering over the 'NO' button the button should go below the 'YES' button with 200 ms delay
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"

// Dont edit the .html or .css files

// ##########################################
// write your code here

$('#yes-button').click(function () {
    alert('I love you too!!');
});

const CHANCE = 0.3;
let stage = 1;

function changeloaction() {
    if (stage == 1) {
        let h = Math.floor(Math.random() * 80) + 10;
        let w = Math.floor(Math.random() * 80) + 10;

        $('#no-button').css('top', h + 'vh');
        $('#no-button').css('left', w + 'vw');

        if (Math.random() < CHANCE) {
            $('#no-button').css('top', '40vh');
            $('#no-button').css('left', '40vw');

            stage = 2;
        }
    } else {
        setTimeout(function () {
            $('#no-button').css('z-index', '-1');
        }, 200);
    }
}
$('#no-button').on('mouseover', changeloaction);

