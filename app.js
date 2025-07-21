
function mostrarPainel(tipo) {
  const paineis = document.querySelectorAll('.painel');
  paineis.forEach(p => p.style.display = 'none');
  document.getElementById(tipo).style.display = 'block';
}
