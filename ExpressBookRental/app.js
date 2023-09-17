let showPassword = document.getElementById('showPassword');
let inputPassword = document.getElementById('inputPassword');
let inputEmail = document.getElementById('inputEmail'); // Changed from inputUsername to inputEmail
let loginButton = document.getElementById('loginButton');


showPassword.onclick = function() {
    if(inputPassword.type == 'password'){
        inputPassword.type = 'text';
        showPassword.classList.add('show');
    } else {
        inputPassword.type = 'password';
        showPassword.classList.remove('show');
    }
}

loginButton.onclick = function() {
    let email = inputEmail.value; // Changed from username to email
    let password = inputPassword.value;

    // Check credentials from our simple storage
    if(users[email] === password) {  // Changed from username to email
        window.location.href = "homepage.html";
    } else {
        alert("Incorrect email or password.");  // Changed from username to email
    }
}

let registerNow = document.getElementById('registerNow');
let registerModal = document.getElementById('registerModal');
let close = document.getElementsByClassName("close")[0];
let registerButton = document.getElementById('registerButton');
let registerEmail = document.getElementById('registerEmail'); // Changed from registerUsername to registerEmail
let registerPassword = document.getElementById('registerPassword');

// Simple user storage for demonstration (Do not use this in production)
let users = {};

registerNow.onclick = function() {
  registerModal.style.display = "block";
}

close.onclick = function() {
  registerModal.style.display = "none";
}

registerButton.onclick = function() {
  let email = registerEmail.value;  // Changed from username to email
  let password = registerPassword.value;

  if(!email || !password) {  // Changed from username to email
    alert("Email and password are required");  // Changed from username to email
    return;
  }

  // In a real application, you'd send this data to your server for validation and storage
  users[email] = password;  // Changed from username to email

  alert("Registration successful!");
  registerModal.style.display = "none";
}


