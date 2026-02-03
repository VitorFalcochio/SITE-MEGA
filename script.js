// 1. ANIMAÇÕES DE REVELAÇÃO (ScrollReveal)
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false
});

sr.reveal('.hero-content', {});
sr.reveal('.card', { interval: 200 });
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right' });
sr.reveal('.post', { interval: 200 });

// 2. LÓGICA DE TROCA DE SEGMENTOS (Tabs)
const tabs = document.querySelectorAll('.segment-tabs li');
const displayImg = document.getElementById('segment-img');

tabs.forEach(tab => {
    tab.addEventListener('mouseover', () => {
        // Remove active de todos
        tabs.forEach(t => t.classList.remove('active'));
        // Adiciona ao atual
        tab.classList.add('active');
        // Muda a imagem com efeito de fade
        displayImg.style.opacity = '0';
        setTimeout(() => {
            displayImg.src = tab.getAttribute('data-img');
            displayImg.style.opacity = '1';
        }, 200);
    });
});

// 3. EFEITO DE HEADER AO SCROLL
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = "10px 0";
        header.style.background = "rgba(0, 13, 22, 0.98)";
    } else {
        header.style.padding = "20px 0";
        header.style.background = "transparent";
    }
});

window.addEventListener('load', () => {
    console.log("Página carregada! Removendo loader..."); // Verifique isso no console (F12)

    const loader = document.getElementById('preloader');

    // Damos um tempo de 2 segundos para a animação da barra completar
    setTimeout(() => {
        if (loader) {
            loader.classList.add('preloader-hidden');
            console.log("Classe preloader-hidden adicionada.");
        }
    }, 2000);
});


window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    // Remove active de todos
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlideIndex++;
    if (currentSlideIndex > slides.length) { currentSlideIndex = 1 }

    slides[currentSlideIndex - 1].classList.add('active');
    dots[currentSlideIndex - 1].classList.add('active');

    setTimeout(showSlides, 5000); // Troca a cada 5 segundos
}

// Inicia o carrossel
showSlides();



window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('active-scroll');
    } else {
        header.classList.remove('active-scroll');
    }
});