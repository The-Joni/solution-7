function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('emailForm');
  const emailInput = document.getElementById('emailInput');
  const invalid = document.getElementById('invalid-email');
  const confirmationMessage = document.getElementById('confirmation-message');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const userEmail = emailInput.value.trim();

      if (validateEmail(userEmail)) {
        window.location.href = `success.html?email=${encodeURIComponent(userEmail)}`;
        emailInput.classList.remove('invalid-input'); 
      } else {
        invalid.textContent = 'Valid Email Required'; 
        emailInput.classList.add('invalid-input'); 
      }
    });
  }

  if (confirmationMessage) {
    const urlParams = new URLSearchParams(window.location.search);
    const userEmail = urlParams.get('email');

    if (userEmail) {
      confirmationMessage.textContent = `${userEmail}`;
    } else {
      confirmationMessage.textContent = 'Email not provided';
    }
  }
});