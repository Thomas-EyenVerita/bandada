const categorias = document.querySelectorAll('.menu-categoria');

categorias.forEach(cat => {
  const btn = cat.querySelector('.menu-titulo');
  btn.addEventListener('click', () => {
    cat.classList.toggle('activa');
  });
});