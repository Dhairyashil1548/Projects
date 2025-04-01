// user-dashboard.js

document.getElementById('tender-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const tenderName = document.getElementById('tender-name').value;
  const tenderDescription = document.getElementById('tender-description').value;
  const tenderFile = document.getElementById('tender-file').files[0];

  if (!tenderName || !tenderDescription || !tenderFile) {
      alert("Please fill in all fields and select a file.");
      return;
  }

  // Handle tender submission (upload to server or save in a database)
  alert(`Tender submitted successfully: ${tenderName}`);

  // Reset the form after submission
  document.getElementById('tender-form').reset();
});

function logout() {
  // Redirect to login page
  window.location.href = "index.html"; // assuming your login page is named index.html
}
