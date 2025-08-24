function validatePassword(password) {
  const hasUpper   = /[A-Z]/.test(password);
  const hasLower   = /[a-z]/.test(password);
  const hasNumber  = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  return hasUpper && hasLower && hasNumber && hasSpecial;
}

function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  let usernameError = document.getElementById("usernameError");
  let passwordError = document.getElementById("passwordError");
  let successMessage = document.getElementById("successMessage");

  // Clear old messages
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";
  successMessage.innerHTML = "";

  // Gmail validation
  if (!username.endsWith("@gmail.com")) {
    usernameError.innerHTML = "❌ Username must be a Gmail address (example@gmail.com)";
    return;
  }

  // Password validation
  if (!validatePassword(password)) {
    passwordError.innerHTML = "❌ Password must contain: 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character";
    return;
  }

  // If everything is correct
  successMessage.innerHTML = "✅ Login Successful!";
}
