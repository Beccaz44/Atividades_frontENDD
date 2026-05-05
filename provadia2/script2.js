// =============================================
// QUESTÃO 03 — Alternar entre Grupos A/B/C e D/E/F
// =============================================

var mostrando = "abc"; // estado atual: "abc" ou "def"

function proximoGrupo() {
  var gruposABC = document.querySelectorAll("#grupo-a, #grupo-b, #grupo-c");
  var gruposDEF = document.getElementById("grupos-def");
  var botao    = document.getElementById("btnProximo");

  if (mostrando === "abc") {
    // Oculta A/B/C, exibe D/E/F
    gruposABC.forEach(function(el) {
      el.style.display = "none";
    });
    gruposDEF.style.display = "contents"; // mantém o layout flex do main
    botao.textContent = "◀ Anterior";
    mostrando = "def";
  } else {
    // Volta para A/B/C
    gruposABC.forEach(function(el) {
      el.style.display = "flex";
    });
    gruposDEF.style.display = "none";
    botao.textContent = "Próximo ▶";
    mostrando = "abc";
  }
}

// =============================================
// QUESTÃO 04-A — revelar() — Vinícius Júnior
// =============================================

function revelar() {
  // 1. Altera a imagem
  var img = document.getElementById("imgJogador");
  img.src = "img/_vinicius_junior.png";
  img.alt = "Vinícius Júnior";

  // 2. Preenche as informações
  document.getElementById("nomeJogador").textContent = "Vinícius José Paixão de Oliveira Júnior";
  document.getElementById("nascJogador").textContent = " 12/07/2000 (25 anos)";
  document.getElementById("altJogador").textContent  = " Altura: 1,76 m";
  document.getElementById("posJogador").textContent  = " Ponta-esquerda / Atacante";
  document.getElementById("rankJogador").textContent = " Rank: 9,5";

  // 3. Troca as classes placeholder → card-text
  var placeholders = document.querySelectorAll("#card-original .placeholder");
  placeholders.forEach(function(el) {
    el.classList.remove("placeholder");
    el.classList.add("card-text");
  });
}

// =============================================
// QUESTÃO 04-B — add() — Lucas Paquetá
// =============================================

function add() {
  var container = document.getElementById("container-cards");

  // Cria o novo card com a mesma estrutura do original
  var card = document.createElement("div");
  card.className = "jogador-card";

  // Imagem
  var img = document.createElement("img");
  img.src = "img/Lucas_Paqueta.png";
  img.alt = "Lucas Paquetá";
  img.className = "jogador-img";

  // Bloco de informações
  var info = document.createElement("div");
  info.className = "jogador-info";

  var campos = [
    { tag: "h3", texto: "Lucas Tolentino Coelho de Lima" },
    { tag: "p",  texto: " 27/08/1997 (28 anos)" },
    { tag: "p",  texto: "Altura: 1,80 m" },
    { tag: "p",  texto: " Meio-campista" },
    { tag: "p",  texto: " Rank: 8,8" }
  ];

  campos.forEach(function(campo) {
    var el = document.createElement(campo.tag);
    el.textContent = campo.texto;
    el.className = "card-text";
    info.appendChild(el);
  });

  // Monta o card
  card.appendChild(img);
  card.appendChild(info);

  // Insere ao lado do card original
  container.appendChild(card);

  // Desabilita o botão para não duplicar infinitamente
  document.getElementById("btnAdd").disabled = true;
  document.getElementById("btnAdd").textContent = "✔ Jogador Adicionado";
  document.getElementById("btnAdd").style.backgroundColor = "#888";
}

function add() {
    // Pega o container onde os cards estão
    var container = document.getElementById("Cards");

    // Cria o novo card com a mesma estrutura do card original
    var novoCard = document.createElement("div");
    novoCard.className = "card";
    novoCard.style.width = "22rem";

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">
        <div class="card-body">
            <h5 class="card-title">
                <span class="card-title">Lucas Paquetá</span>
                <span class="badge text-bg-secondary">8,8</span>
            </h5>
            <p class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997</span><br>
                <span><strong>Altura:</strong> 1,80</span><br>
                <span><strong>Posição:</strong> Meio-campista</span><br>
            </p>
        </div>
    `;

    // Insere o novo card ao lado do card existente
    container.appendChild(novoCard);
}
