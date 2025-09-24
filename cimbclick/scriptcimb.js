document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === "admin" && pass === "1234") {
    alert("Login successful (demo)!");
    window.location.href = "dashboard.html"; // optional
  } else {
    alert("Invalid credentials (demo only)");
  }
});
