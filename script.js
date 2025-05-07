const formTitle = document.getElementById("form-title");
const nameField = document.getElementById("nameField");
const Link = document.getElementById("Link");
const Text = document.getElementById("Text");
const submitBtn = document.getElementById("submitBtn");
const authForm = document.getElementById("authForm");

// Default mode
let isLogin = true;

// To Hide name field 
nameField.style.display = "none";

// Form between login and signup
Link.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.innerText = "Login";
    submitBtn.innerText = "Login";
    Text.innerHTML = `Don't have an account? <a href="#" id="Link">Signup</a>`;
    nameField.style.display = "none";
  } else {
    formTitle.innerText = "Signup";
    submitBtn.innerText = "Signup";
    Text.innerHTML = `Already have an account? <a href="#" id="Link">Login</a>`;
    nameField.style.display = "flex";
  }
});

// Validation on form submit
authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  if (!isLogin && name.length < 2) {
    alert("Name must be at least 2 characters.");
    return;
  }

  alert(`${isLogin ? "Login" : "Signup"} successful!`);
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  