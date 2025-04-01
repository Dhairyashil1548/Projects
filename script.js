document.addEventListener("DOMContentLoaded", function() {
  console.log("JavaScript Loaded!");
});

function handleLogin(userType) {
  let email, password;
  if (userType === 'admin') {
      email = document.getElementById("admin-email").value;
      password = document.getElementById("admin-password").value;
  } else {
      email = document.getElementById("user-email").value;
      password = document.getElementById("user-password").value;
  }

  if (!email || !password) {
      alert("Please enter both email and password.");
      return;
  }

  if (!validateEmail(email)) {
      alert("Invalid email format.");
      return;
  }

  console.log(`Attempting login for ${userType}: ${email}`);
  alert(`Login successful for ${userType}: ${email}`);

  // Redirect to respective dashboard
  if (userType === 'admin') {
      window.location.href = "admin-dashboard.html";
  } else {
      window.location.href = "user-dashboard.html";
  }
}

function validateEmail(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
