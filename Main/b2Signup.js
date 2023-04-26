
const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const usernameError = document.getElementById('username-error');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit',function(event)
{
    event.preventDefault();
      if (usernameError.innerText == '' && emailError.innerText == '' && passwordError.innerText == '') {
        // Validation passed, submit the form and redirect the user to another page
        form.submit();
        window.location.href = ' a4Home.html';
      }
})
username.addEventListener('blur', function() {
  if (!validateUsername(username.value)) {
    usernameError.innerText = 'Username must contain only letters, numbers, or underscores.';
  } else {
    usernameError.innerText = '';
  }
});

function validateUsername(username) {
  const regex = /^\w+$/;
  return regex.test(username);
}

email.addEventListener('blur', function() 
{
  if (!validateEmail(email.value)) {
    emailError.innerText = 'Please enter a valid email address it should contain @.';
  } else {
    emailError.innerText = '';
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


password.addEventListener('blur', function() {
  if (!validatePassword(password.value)) {
    passwordError.innerText = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
  } else {
    passwordError.innerText = '';
  }
});

function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  return regex.test(password);
}







var auth = firebase.auth();
//var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log('User created successfully');
            // Redirect the user to the next page
            window.location.href = '4Home.html';
        })
        .catch(function(error) {
            console.log('Error creating user:', error);
        });
});

