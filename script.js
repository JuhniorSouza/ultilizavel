function abrirSimulacao() {
  alert('Aqui entraria o formulário da simulação com envio via WhatsApp.');
}

function falarComConsultor() {
  window.open('https://wa.me/SEUNUMEROAQUI?text=Olá, quero falar com um consultor.', '_blank');
}

function mostrarCarrossel() {
  document.getElementById("carousel").style.display = "block";
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function mudarSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  slides[0].classList.add('active');
});