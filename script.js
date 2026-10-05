const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
  navLinks.classList.toggle('active', open);
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
}

hamburger.addEventListener('click', () => setMenu(!navLinks.classList.contains('active')));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});
