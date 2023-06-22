document.getElementById("card").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Fetch user input values
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation
  if (email === "example1@gmail.com" && password === "password") {
    alert("Login successful!");
    window.location.href =
      "https://script.google.com/macros/s/AKfycbyzX3ALbTi1BnP3cUNJaKVr4T3YqNNWPLBWDiZRkGDRy62RIJmynBq4T8csr5lc5MjJ/exec"; // Redirect to the provided link
  } else if (email === "example2@gmail.com" && password === "password") {
    alert("Login successful!");
    window.location.href =
      "https://script.google.com/macros/s/AKfycbyzX3ALbTi1BnP3cUNJaKVr4T3YqNNWPLBWDiZRkGDRy62RIJmynBq4T8csr5lc5MjJ/exec"; // Redirect to the provided link
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
