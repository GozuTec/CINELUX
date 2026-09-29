const botones = document.querySelectorAll('.categoria');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // quitar "activo" de todos
    botones.forEach(b => b.classList.remove('activo'));
    // poner "activo" solo al que se clicó
    boton.classList.add('activo');
  });
});
