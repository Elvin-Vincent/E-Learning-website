document.getElementById("card").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Fetch user input values
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation
  if (email === "example1@gmail.com" && password === "password") {
    alert("Login successful!");
    window.location.href = "submit.html"; // Redirect to submit.html
  } else if (email === "example2@gmail.com" && password === "password") {
    alert("Login successful!");
    window.location.href = "admin.html"; // Redirect to admin.html
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
  
