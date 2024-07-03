const btn = document.querySelector("button.btn");

btn.addEventListener("click", (e) => {

  cardName = document.querySelector("#cardName").value;
  cardNumber = document.querySelector("#cardNumber").value;
  expDate = document.querySelector("#expDate").value;
  cvv = document.querySelector("#cvv").value;
  if (cardName && cardNumber && expDate && cvv) {

    e.preventDefault();
    alert("payment successfull");
    window.location.href = "./index.html";
  } else {
    e.preventDefault();
    console.log(e)
    alert("Payment failed! Please fill full card details");
  }

})
