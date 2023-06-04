document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Fetch user input values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform login validation
  if (email === "example1@gmail.com" && password === "password") {
    alert("Login successful!");
    window.location.href = "submit.html"; // Redirect to index.html
  } else if (email === "example2@gmail.com" && password === "password") {
    alert("login successful!");
    window.location.href = "submit.html"; // Redirect to admin.html
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

  