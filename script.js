
let slideAtual = 1;

function mostrarCarrossel() {
  document.getElementById('carrossel').style.display = 'block';
  atualizarSlides();
}

function slideProximo() {
  slideAtual = slideAtual === 5 ? 1 : slideAtual + 1;
  atualizarSlides();
}

function slideAnterior() {
  slideAtual = slideAtual === 1 ? 5 : slideAtual - 1;
  atualizarSlides();
}

function atualizarSlides() {
  const slides = document.querySelectorAll('.carousel-slide');
  slides.forEach(slide => {
    slide.classList.remove('active');
    if (parseInt(slide.getAttribute('data-slide')) === slideAtual) {
      slide.classList.add('active');
    }
  });
}

function fecharCarrossel() {
  document.getElementById('carrossel').style.display = 'none';
}

function abrirFormulario() {
  const nome = prompt("Digite seu nome:");
  const numero = prompt("Digite seu número:");
  const cidade = prompt("Digite sua cidade:");
  const modelo = prompt("Modelo do veículo:");
  const placa = prompt("Placa do veículo:");

  const msg = `Olá! Quero fazer uma simulação.

Nome: ${nome}
Número: ${numero}
Cidade: ${cidade}
Modelo: ${modelo}
Placa: ${placa}`;
  const url = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function falarComConsultor() {
  const url = `https://wa.me/SEUNUMERO?text=${encodeURIComponent("Olá, gostaria de falar com um consultor.")}`;
  window.open(url, '_blank');
}
