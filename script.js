function abrirFormulario() {
  const nome = prompt("Digite seu nome:");
  const numero = prompt("Digite seu número de telefone:");
  const cidade = prompt("Digite sua cidade:");
  const modelo = prompt("Modelo do veículo:");
  const placa = prompt("Placa do veículo:");

  if (nome && numero && cidade && modelo && placa) {
    const msg = `Olá, me chamo ${nome} e gostaria de fazer uma simulação.\nCidade: ${cidade}\nTelefone: ${numero}\nVeículo: ${modelo}\nPlaca: ${placa}`;
    const url = `https://wa.me/5511945731548?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }
}

function falarComConsultor() {
  const msg = "Gostaria de fazer minha cotação direto com um consultor";
  const url = `https://wa.me/5511945731548?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function mostrarCarrossel() {
  alert("Aqui entra o conteúdo do carrossel com os benefícios.");
}
