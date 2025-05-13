// Example: Theme toggle functionality
const toggleButton = document.querySelector('.theme-toggle button');

toggleButton?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
