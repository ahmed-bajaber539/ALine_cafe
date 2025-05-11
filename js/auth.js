const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const userNameInput = document.getElementById('userName');

function Login() {
  if (emailInput.value === '' || passwordInput.value === '') return;

  window.location.pathname = './index.html';
}
function Register() {
  if (userNameInput.value === '' || emailInput.value === '' || passwordInput.value === '') return;

  window.location.pathname = './index.html';
}
