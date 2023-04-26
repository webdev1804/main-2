// Get references to the buttons and blocks
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const block1 = document.getElementById('block-1');
const block2 = document.getElementById('block-2');
const block3 = document.getElementById('block-3');


// Hide both blocks initially
block1.style.display = 'none';
block2.style.display = 'none';
block3.style.display = 'none';


// Add event listeners to the buttons
button1.addEventListener('click', function() {
  block1.style.display = 'block';
  block2.style.display = 'none';
  block3.style.display = 'none';
});

button2.addEventListener('click', function() {
  block1.style.display = 'none';
  block2.style.display = 'block';
  block3.style.display = 'none';
});
button3.addEventListener('click', function() {
    block1.style.display = 'none';
    block2.style.display = 'none';
    block3.style.display = 'block';
});
