function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

// Cargar configuración de partículas
particlesJS.load('particles-js', 'particles.json');
