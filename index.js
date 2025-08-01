document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const lightModeToggle = document.getElementById('lightModeToggle');

  // Pastikan tombolnya ditemukan
  if (!darkModeToggle || !lightModeToggle) return;

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.style.display = 'none';
    lightModeToggle.style.display = 'inline';
  } else {
    lightModeToggle.style.display = 'none';
  }

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    darkModeToggle.style.display = 'none';
    lightModeToggle.style.display = 'inline';
    localStorage.setItem('theme', 'dark');
  });

  lightModeToggle.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    lightModeToggle.style.display = 'none';
    darkModeToggle.style.display = 'inline';
    localStorage.setItem('theme', 'light');
  });
});
