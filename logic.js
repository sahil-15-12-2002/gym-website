function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter valid weight and height.";
    return;
  }

  // Convert height from cm to meters
  height = height / 100;

  // Calculate BMI
  var bmi = weight / (height * height);

  // Display result
  document.getElementById("result").innerHTML =
    "Your BMI is: " + bmi.toFixed(2);
}

burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
rightnav = document.querySelector(".rightnav");
navlist = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  rightnav.classList.toggle("v-class-resp");
  navlist.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});
function subscribe() {
  let email = document.querySelector(".e-mail").value;

  if (email) {
    alert("Thanks For Subscribe");
  }
}
