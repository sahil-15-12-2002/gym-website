let register = document.querySelector(".register");
let logout = document.querySelector(".logout");

document.addEventListener("DOMContentLoaded", function () {
  const username = sessionStorage.getItem("username");
  if (username) {
    document.getElementById("user-username").textContent = username;
    let data = sessionStorage.getItem("username");

    if (data) {
      register.style.display = "none";
      logout.style.display = "block";
    }

    document
      .getElementById("logout-btn")
      .addEventListener("click", function () {
        // Clear session storage and redirect to login page
        sessionStorage.removeItem("username");
      });
  }
});

logout.addEventListener("click", () => {
  logout.style.display = "none";
  register.style.display = "none";
  location.reload();
});
