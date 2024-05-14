// Homework 1 (web development with JavaScript)

// Requirments
// 1- move 'NO' button to a random location on the screen when havering overit with the mouse or when clicking
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"

// Dont edit the .html or .css files

// ##########################################
// write your code here

document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no-button');
    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('click', moveButton);

    function moveButton() {
        const x = Math.random() * (window.innerWidth - this.clientWidth);
        const y = Math.random() * (window.innerHeight - this.clientHeight);
        this.style.position = 'absolute';
        this.style.left = `${x}px`;
        this.style.top = `${y}px`;
    }

    const yesButton = document.getElementById('yes-button');
    yesButton.addEventListener('click', function() {
        alert('I love you too!!');
    });
});
