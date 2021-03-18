const div = document.getElementById('name');
const button = document.getElementById('button');
const input = document.getElementById('input');

console.log(input);

button.addEventListener('click', () => {

const userTyped = input.value;

div.textContent = userTyped;

});


