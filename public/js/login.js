const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log('password match');

      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first-name-signup').value.trim();
  const lastName = document.querySelector('#last-name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch('/api/manageUsers', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/manageUsers');
    } else {
      alert(response.statusText);
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/manageUsers');
    } else {
      alert('Failed to delete user');
    }
  }
};


document
  .querySelector('.user-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
