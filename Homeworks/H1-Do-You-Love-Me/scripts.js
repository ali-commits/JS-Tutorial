// Homework 1 (web development with JavaScript)

// Requirments
// 1- move 'NO' button to a random location on the screen when havering overit with the mouse or when clicking
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"

// Dont edit the .html or .css files

// ##########################################
// write your code here

const noButton = document.getElementById('no-button');

function changelocation() {
    let h = Math.floor(Math.random() * 80) + 10;
    let w = Math.floor(Math.random() * 80) + 10;

    noButton.style.top = h + 'vh';
    noButton.style.left = w + 'vw';
}

noButton.addEventListener('mouseover', changelocation);

document.getElementById('yes-button').addEventListener('click', function () {
    alert('I love you too!!');
});
