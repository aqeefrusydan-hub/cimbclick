// scriptcimb.js

// Handle login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    alert("Login successful!");
    window.location.href = "dashboardcimb.html"; // redirect to dashboard
  } else {
    alert("Invalid credentials");
  }
});

// Handle logout (only runs if logoutBtn exists on page)
document.getElementById("logoutBtn")?.addEventListener("click", function() {
  alert("You have been logged out.");
  window.location.href = "index.html"; // back to login page
});

// Handle transfer form (only on dashboard page)
document.getElementById("transferForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Transfer successful!");
  this.reset();
});


