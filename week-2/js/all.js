/*
     Request 1
     Click to change the Welcome message
*/
const bannerMessage_hover = document.querySelector('.banner');
const bannerMessage = document.querySelector('h1');
bannerMessage_hover.addEventListener('click', () => {
    bannerMessage.textContent = 'Have a Good Time!';
});


/*
     Request 2
     Click to Show/Close Menu
*/
const ham = document.querySelector('.main-nav-ham');
const menu = document.querySelector('.menu');
ham.addEventListener('click', () => {
    menu.style.right = '0';
});

const clear = document.querySelector('.menu-clear');
clear.addEventListener('click', () => {
    menu.style.right = '-50%';
});


/*
     Request 3
     Click to Show More Content BoxesClose Menu
*/


const btn = document.querySelector('.btn');
const display = document.querySelectorAll('.display-container');
// console.log(display.style.display);
console.log(display);
btn.addEventListener('click', () => {
    if (display[0].style.display === 'none') {
        display[0].style.display = 'block';
    } else {
        display[0].style.display = 'none';
    }
});