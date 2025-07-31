const darkModeToggle = document.getElementById('darkModeToggle');
  const lightModeToggle = document.getElementById('lightModeToggle');

  if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-mode');
    darkModeToggle.style.display = 'none';
    lightModeToggle.style.display = 'inline';
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



