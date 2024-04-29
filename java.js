const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
const loginToggle = document.getElementById('login-toggle');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Function to show/hide popup
function togglePopup() {
  popup.classList.toggle('hidden');
}

// Close button click event listener
closeBtn.addEventListener('click', togglePopup);

// Login toggle click event listener (replace with actual login form handling)
