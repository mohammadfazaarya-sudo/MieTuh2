// Tombol menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// Fungsi toggle
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Tutup menu otomatis saat klik link
function closeMenu() {
  navLinks.classList.remove('active');
}
