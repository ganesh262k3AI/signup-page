

document.getElementById("form-validate").addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("userName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  let uNameError = document.getElementById("uName-error");
  let emailError = document.getElementById("mail-error");
  let passError = document.getElementById("password-error");
  let cPassError = document.getElementById("cPassword-error");
  let success = document.getElementById("sucess");

  let isValid = true;

  let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;

  if (username === "") {
    uNameError.textContent = "*Username required";
    isValid = false;
  } else if (!uNamePattern.test(username)) {
    uNameError.textContent = "*Enter your full name";
    isValid = false;
  } else {
    uNameError.textContent = "";
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email === "") {
    emailError.textContent = "*Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "*Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (password === "") {
    passError.textContent = "*Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passError.textContent = "*Password must be at least 6 characters";
    isValid = false;
  } else {
    passError.textContent = "";
  }

  if (confirmPassword === "") {
    cPassError.textContent = "*Confirm Password is required";
    isValid = false;
  } else if (password !== confirmPassword) {
    cPassError.textContent = "*Passwords do not match";
    isValid = false;
  } else {
    cPassError.textContent = "";
  }

  if (isValid === true) {
    success.textContent = "Account Created successfully ✅";
  } else {
    success.textContent = "";
  }
});
