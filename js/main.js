const btn = document.querySelector('.js-toggle-logo-btn');
const logo = document.querySelector('.js-toggle-logo-link');

btn.addEventListener('click', () => {
	logo.classList.toggle('logo--toggle');
});