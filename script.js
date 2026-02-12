document.addEventListener('DOMContentLoaded', () => {

  // --- LÓGICA DO SLIDER ---
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let slideInterval;

  // Função principal que troca o slide
  function showSlide(index) {
    // Garante que o índice é válido (loop infinito)
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    // Remove a classe ativa de todos
    slides.forEach(slide => slide.classList.remove('is-active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Adiciona a classe ativa no atual
    slides[currentIndex].classList.add('is-active');
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  // Função que os botões chamam
  window.changeSlide = (step) => {
    clearInterval(slideInterval); // Para o timer automático quando clica
    showSlide(currentIndex + step);
    startAutoSlide(); // Reinicia o timer
  };

  // Função que as bolinhas chamam
  window.currentSlide = (index) => {
    clearInterval(slideInterval);
    showSlide(index);
    startAutoSlide();
  };

  // Auto-play (Timer)
  function startAutoSlide() {
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 6000); // Muda a cada 6 segundos
  }

  // Inicializa se existirem slides
  if (slides.length > 0) {
    showSlide(0); // Garante que o primeiro aparece
    startAutoSlide();
  }

  // --- SCROLL DO HEADER ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('active-scroll');
    } else {
      header.classList.remove('active-scroll');
    }
  });
});

// PODE APAGAR
// ESSE DE BAIXO AQUI:
// O DE CIMA NÂO
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > -50) {
    header.classList.add('active-scroll');
  } else {
    header.classList.remove('active-scroll');
  }
});

//

