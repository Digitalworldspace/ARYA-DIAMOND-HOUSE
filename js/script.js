// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Header state on scroll
const header = document.getElementById('site-header');
const onScroll = () => {
  if (window.scrollY > 24) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after a link is tapped
document.getElementById('site-nav').addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
