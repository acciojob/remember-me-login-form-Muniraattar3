// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the input elements and buttons using their IDs
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

  // Check if saved credentials exist in localStorage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  // If both username and password are found, show the "Login as existing user" button.
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block"; // Make the button visible
  } else {
    existingBtn.style.display = "none"; // Keep the button hidden
  }

  // Add an event listener for form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior (which would reload the page)
    event.preventDefault();

    // Get the values from the username and password input fields
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Display an alert showing the username that is logging in
    alert("Logged in as " + username);

    // Check whether the "Remember Me" checkbox is checked
    if (rememberCheckbox.checked) {
      // If checked, save the username and password in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // Make sure the "Login as existing user" button is visible
      existingBtn.style.display = "block";
    } else {
      // If not checked, remove any saved credentials from localStorage
      localStorage.removeItem("username");
      localStorage.removeItem("password");

      // Hide the "Login as existing user" button
      existingBtn.style.display = "none";
    }
  });

  // Add an event listener for the "Login as existing user" button
  existingBtn.addEventListener("click", function() {
    // Retrieve the saved username from localStorage
    const savedUser = localStorage.getItem("username");
    // Display an alert using the saved username
    alert("Logged in as " + savedUser);
  });
});
