// Animación de aparición al hacer scroll
window.addEventListener("scroll", () => {
  const elementos = document.querySelectorAll(".galeria, .nosotros");
  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Aparición suave al cargar
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s ease";
    document.body.style.opacity = "1";
  }, 300);
});
