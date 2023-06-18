document.getElementById("card").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Fetch user input values
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation
  if (email === "example1@gmail.com" && password === "password") {
    alert("Login successful!");
    window.location.href = "https://script.google.com/macros/s/AKfycbzxTIWmmbbm5vuEqMvnuW1MyPo3s6zHiQxbD0dCFpDSfjO6Y47nGZKD4nH4TJftma5b/exec"; // Redirect to the provided link
  } else if (email === "example2@gmail.com" && password === "password") {
    alert("Login successful!");
    window.location.href = "https://script.google.com/macros/s/AKfycbzxTIWmmbbm5vuEqMvnuW1MyPo3s6zHiQxbD0dCFpDSfjO6Y47nGZKD4nH4TJftma5b/exec"; // Redirect to the provided link
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

