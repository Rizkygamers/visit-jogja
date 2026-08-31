const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

const kontakForm = document.getElementById('kontakForm');
const formStatus = document.getElementById('formStatus');

kontakForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  if (!nama) return;
  formStatus.textContent = `Sip, ${nama}, pesannya udah masuk. Ditunggu ya kabar dari kami.`;
  kontakForm.reset();
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 40 ? '0 4px 20px rgba(0,0,0,0.15)' : 'none';
});
