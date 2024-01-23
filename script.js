const container = document.querySelector(".container");
const signupButton = document.querySelector(".signup-container header");
const loginButton = document.querySelector(".login-container header");

loginButton.addEventListener("click", () => {
  container.classList.add("active");
});

signupButton.addEventListener("click", () => {
  container.classList.remove("active");
});
