// =======================
// LOGIN PAGE
// =======================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
      alert("Login successful!");
      // Store login state
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboardcimb.html";
    } else {
      alert("Invalid credentials");
    }
  });
}

// =======================
// DASHBOARD PAGE
// =======================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    alert("You have been logged out.");
    window.location.href = "index.html";
  });
}

// =======================
// SIMPLE TRANSFER FORM
// =======================
const transferForm = document.getElementById("transferForm");
if (transferForm) {
  transferForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const toAccount = document.getElementById("toAccount").value;
    const amount = document.getElementById("amount").value;

    if (toAccount && amount > 0) {
      alert(`Successfully transferred RM${amount} to account: ${toAccount}`);
      // Clear form
      transferForm.reset();
    } else {
      alert("Please enter valid account and amount.");
    }
  });
}

// =======================
// PROTECT DASHBOARD (if not logged in)
// =======================
if (window.location.pathname.includes("dashboardcimb.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("You must login first!");
    window.location.href = "index.html";
  }
}

