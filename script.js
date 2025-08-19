function validatePassword(password) {
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return hasSpecialChar && hasUpperCase && hasLowerCase && hasNumber;
}

function validateLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (!username || !password) {
    errorMessage.style.color = 'red';
    errorMessage.textContent = "Username and password are required.";
    return;
  }

  if (!validatePassword(password)) {
    errorMessage.style.color = 'red';
    errorMessage.textContent =
      "Invalid password. Must contain:\n" +
      "- One special character\n" +
      "- One uppercase letter\n" +
      "- One lowercase letter\n" +
      "- One number";
    return;
  }

  // If all validation passed:
  errorMessage.style.color = "green";
  errorMessage.textContent = "Login successful!";
}

const login=document.getElementById(`login`);
login.addEventListener("click", validateLogin)