// Questão 03 — JavaScript: exibir tabela de jogos via botão

function mostrarTabela() {
  var container = document.getElementById("containerTabela");
  var botao = document.getElementById("btnTabela");

  // Se a imagem já estiver visível, remove (toggle)
  if (container.innerHTML !== "") {
    container.innerHTML = "";
    botao.textContent = "Mostrar Tabela de Jogos";
    return;
  }

  // Cria o elemento de imagem apontando para a pasta img/
  var img = document.createElement("img");
  img.src = "img/Tabela_Jogos.png";
  img.alt = "Tabela de Jogos da Copa do Mundo 2026";

  container.appendChild(img);
  botao.textContent = "Ocultar Tabela de Jogos";
}
// Questão 04 — JavaScript: função revelar()
 
function revelar() {
 
  // 1. Altera o src da imagem principal
  var imagem = document.querySelector(".card-img-top");
  imagem.src = "img/_vinicius_junior.png";
  imagem.alt = "Vinícius Júnior";
 
  // 2. Preenche os <span> com as informações do jogador
  document.getElementById("Nome").innerHTML =
    "Vinícius José Paixão de Oliveira Júnior " +
    "<span id='Rank' class='badge text-bg-warning'>9.5 ⭐</span>";
 
  document.getElementById("Data_Nas").textContent = "📅 12/07/2000 (25 anos)";
  document.getElementById("Alutra").textContent   = "📏 Altura: 1,76 m";
 
  // Atenção: o ID no HTML tem um espaço — "Posição " — mantido aqui
  document.getElementById("Posição ").textContent = "🏃 Ponta-esquerda / Atacante";
 
  // 3. Remove a classe "placeholder" e aplica "card-text" nos elementos afetados
  var placeholders = document.querySelectorAll(".placeholder");
  placeholders.forEach(function(el) {
    el.classList.remove("placeholder");
    el.classList.add("card-text");
  });
 
  // Remove também o placeholder-glow dos elementos pai
  var glows = document.querySelectorAll(".placeholder-glow");
  glows.forEach(function(el) {
    el.classList.remove("placeholder-glow");
  });
}
 