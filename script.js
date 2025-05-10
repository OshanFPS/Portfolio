// Example: Theme toggle functionality
const toggleButton = document.querySelector('.theme-toggle button');

toggleButton?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
