document
  .getElementById('contactForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    let nameField = document.getElementById('name');
    let phoneField = document.getElementById('phone');
    let emailField = document.getElementById('email');
    let messageField = document.getElementById('message');

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let sendMessage = document.getElementById('sendMessage');
    sendMessage.style.display = 'block';
    try {
      const response = await fetch(
        'https://sendformtemplate.onrender.com/api/help',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            message: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Clear the form
      nameField.value = '';
      phoneField.value = '';
      emailField.value = '';
      messageField.value = '';
      sendMessage.style.display = 'none';
    } catch (error) {
      console.log('Error', error);
    }

    // Show success message
    let successMessageElement = document.getElementById('successmessage');
    successMessageElement.style.display = 'block';

    // Hide the success message after 5 seconds
    setTimeout(function () {
      successMessageElement.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
  });
