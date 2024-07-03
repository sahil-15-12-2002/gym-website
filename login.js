document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  // Validate username and password (you can check against a database or API)
  // For demonstration purposes, let's assume the username is valid
  showUserInfo(username);
});

const register_btn = document.querySelector(".register");

console.log(register_btn)

function showUserInfo(username) {
  // Save the username to session storage (you can use cookies or other methods)
  sessionStorage.setItem("username", username);
  // Redirect to another HTML file (e.g., dashboard.html)
  window.location.href = "index.html";
}