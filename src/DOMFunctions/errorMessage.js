const error = document.querySelector('.error');

function createServerErrorMessage() {
  error.classList.add('active');
  error.textContent = 'Sorry, city not found.';
}

function createNetworkErrorMessage() {
  error.classList.add('active');
  error.textContent = 'Please check your internet connection.';
}

export { createServerErrorMessage, createNetworkErrorMessage };
