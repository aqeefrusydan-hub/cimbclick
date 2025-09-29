// ===== LOGIN SCRIPT =====
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    alert("✅ Login successful!");
    window.location.href = "dashboardcimb.html"; // go to dashboard
  } else {
    alert("❌ Invalid User ID or Password");
  }
});

// ===== DASHBOARD SCRIPT =====
window.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");
  const transferForm = document.getElementById("transferForm");

  // Logout button handler
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      alert("👋 You have been logged out.");
      window.location.href = "index.html"; // back to login page
    });
  }

  // Transfer form handler
  if (transferForm) {
    transferForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const accNo = document.getElementById("recipient").value;
      const amount = document.getElementById("amount").value;

      if (accNo && amount > 0) {
        alert(`💸 Transfer of RM${amount} to Account ${accNo} successful!`);
        transferForm.reset();
      } else {
        alert("⚠️ Please enter valid account number and amount.");
      }
    });
  }
});

