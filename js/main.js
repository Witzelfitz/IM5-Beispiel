console.log('main.js');

// get the element blub from DOM
const blub = document.getElementById('blub');

// add event listener to blub
blub.addEventListener('click', function() {
    console.log('blub was clicked');
} );

// everytime the button is clicked add a new child to the body with the current date
const button = document.getElementById('btn');  // Corrected the id here
const body = document.querySelector('body');
button.addEventListener('click', function() {
    const newElement = document.createElement('div');
    const currentDate = new Date();  // Get the current date
    newElement.innerHTML = `new element - ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;  // Add the current date to the element's content
    body.appendChild(newElement);
} );
