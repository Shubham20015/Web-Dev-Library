

const themeSwitches = document.querySelector('input');

themeSwitches.addEventListener('change', () => {
  document.body.classList.toggle('is-dark-mode');
});