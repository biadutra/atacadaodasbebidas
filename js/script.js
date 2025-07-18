// =======================
// Configurações iniciais
// =======================
const elementos = {
  btnMenuMobile: document.getElementById('btn-menu-carrinho'),
  carrinhoDiv: document.getElementById('carrinho'),
  btnLimpar: document.getElementById('limpar-carrinho'),
  btnFecharCarrinho: document.getElementById('carrinho-fechar'),
  itensCarrinho: document.getElementById('itens-carrinho'),
  total: document.getElementById('total'),
  btnFinalizar: document.getElementById('finalizar-pedido'),
  produtosContainer: document.getElementById('produtos'),

  // Elementos do menu lateral
  botaoMenuLateral: document.getElementById('botao-menu-lateral'),
  menuLateral: document.getElementById('menu-lateral'),
  fecharMenuLateral: document.getElementById('fechar-menu') // Renomeado para evitar confusão
};

// =======================
// Produtos (Seus produtos completos aqui)
// =======================
const produtos = [
  // ... SUA LISTA COMPLETA DE PRODUTOS E SEÇÕES AQUI ...
  // Certifique-se de que todos os seus produtos estejam aqui,
  // seguindo o formato { secao: "Nome da Secao" } e os objetos de produto.
  { secao: "Refrigerantes Antarctica" },
  { id: "12001", nome: "GUARANÁ BLACK ZERO LATA 350ML", precoUnidade: 1.16, precoFardo: 13.92, quantidadeFardo: 6, img: "img/12001.jpg", temUnidade: false, temFardo: true },
  { id: "12002", nome: "GUARANÁ BLACK ZERO 2L", precoUnidade: 3.78, precoFardo: 22.68, quantidadeFardo: 6, img: "img/12002.jpg", temUnidade: true, temFardo: true },
  { secao: "Refrigerantes Coca-Cola" },
  // ... todos os seus produtos
  { secao: "Cervejas Polar" },
  { secao: "Cervejas Schin" },
  { secao: "Cervejas Kaiser" },
  { secao: "Cervejas Império" },
  { secao: "Cervejas Amstel" },
  { secao: "Cervejas Diversas" },
  { secao: "Chopp Barril" },
  { secao: "Destilados/Ices/Diversos" }
];

// Carrinho
// =======================
let carrinho = {};

// =======================
// Funções de Utilitário para Abertura/Fechamento
// =======================

// Função para gerenciar o overflow do body
function toggleBodyScroll(enable) {
    if (enable) {
        document.body.classList.remove('no-scroll');
    } else {
        document.body.classList.add('no-scroll');
    }
}

// Funções para o Menu Lateral
function abrirMenuLateral() {
    elementos.menuLateral.classList.add('aberto');
    toggleBodyScroll(false);
}

function fecharMenuLateral() {
    elementos.menuLateral.classList.remove('aberto');
    // Só reabilita o scroll do body se o carrinho NÃO estiver aberto
    if (!elementos.carrinhoDiv.classList.contains('aberto')) {
        toggleBodyScroll(true);
    }
}

// Funções para o Carrinho
function abrirCarrinho() {
    elementos.carrinhoDiv.classList.add('aberto');
    document.body.classList.add('carrinho-aberto'); // Mantém para responsividade CSS
    elementos.btnMenuMobile.setAttribute('aria-expanded', 'true');
    toggleBodyScroll(false);
}

function fecharCarrinho() {
    elementos.carrinhoDiv.classList.remove('aberto');
    document.body.classList.remove('carrinho-aberto'); // Remove para responsividade CSS
    elementos.btnMenuMobile.setAttribute('aria-expanded', 'false');
    // Só reabilita o scroll do body se o menu lateral NÃO estiver aberto
    if (!elementos.menuLateral.classList.contains('aberto')) {
        toggleBodyScroll(true);
    }
}

// =======================
// Renderizar Produtos
// =======================
function renderizarProdutos() {
  let html = '';
  produtos.forEach(prod => {
    if (prod.secao) {
      html += `<h2 class="secao-titulo" id="${prod.secao}">${prod.secao}</h2>`;
    } else {
      html += `
        <div class="produto-card">
          <img src="${prod.img}" alt="${prod.nome}">
          <div class="produto-info">
            <h3>${prod.nome}</h3>
            <p>Código: ${prod.id}</p>
          </div>
      `;
      if (prod.temUnidade) {
        html += `
          <div class="quantidade-container">
            <label>Unidade:</label>
            <span>R$ ${prod.precoUnidade.toFixed(2)}</span>
            <input type="number" id="qtd-unidade-${prod.id}" min="1" value="1">
            <button class="btn-add" data-id="${prod.id}">Adicionar</button>
          </div>
        `;
      }
      if (prod.temFardo) {
        html += `
          <div class="quantidade-container">
            <label class="fardo-label">Fardo (${prod.quantidadeFardo} unidades):</label>
            <span>R$ ${prod.precoFardo.toFixed(2)}</span>
            <input type="number" id="qtd-fardo-${prod.id}" min="1" value="1">
            <button class="btn-add-fardo" data-id="${prod.id}">Adicionar</button>
          </div>
        `;
      }
      html += `</div>`;
    }
  });
  elementos.produtosContainer.innerHTML = html;
}

// =======================
// Atualizar Carrinho
// =======================
function atualizarCarrinho() {
  elementos.itensCarrinho.innerHTML = '';
  let total = 0;

  for (const key in carrinho) {
    const item = carrinho[key];
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="carrinho-produto-nome">
        ${item.nome}
        ${item.tipo === 'fardo' ? `<span class="fardo-label">FARDO</span>` : ''}
        <br>
        <small>${item.codigo} - ${item.qtd}x</small>
      </span>
      <button class="btn-remover" data-key="${key}">X</button>
    `;
    elementos.itensCarrinho.appendChild(li);
    total += item.preco * item.qtd;
  }

  elementos.total.textContent = `Total: R$ ${total.toFixed(2)}`;
  elementos.btnFinalizar.disabled = Object.keys(carrinho).length === 0;
}

// =======================
// Evento Único (Consolidado)
// =======================
document.addEventListener('click', (e) => {
  // Adicionar unidade
  if (e.target.classList.contains('btn-add')) {
    const id = e.target.dataset.id;
    const prod = produtos.find(p => p.id === id);
    const qtdInput = document.getElementById(`qtd-unidade-${id}`);
    const qtd = qtdInput ? parseInt(qtdInput.value) : 1;
    if (qtd < 1 || isNaN(qtd)) return;

    const key = `${id}-unidade`;
    if (carrinho[key]) {
      carrinho[key].qtd += qtd;
    } else {
      carrinho[key] = {
        nome: prod.nome,
        codigo: prod.id,
        tipo: 'unidade',
        preco: prod.precoUnidade,
        qtd
      };
    }
    atualizarCarrinho();
    mostrarMensagemAdicao('Produto adicionado ao carrinho!');
  }

  // Adicionar fardo
  if (e.target.classList.contains('btn-add-fardo')) {
    const id = e.target.dataset.id;
    const prod = produtos.find(p => p.id === id);
    const qtdInput = document.getElementById(`qtd-fardo-${id}`);
    const qtd = qtdInput ? parseInt(qtdInput.value) : 1;
    if (qtd < 1 || isNaN(qtd)) return;

    const key = `${id}-fardo`;
    if (carrinho[key]) {
      carrinho[key].qtd += qtd;
    } else {
      carrinho[key] = {
        nome: prod.nome,
        codigo: prod.id,
        tipo: 'fardo',
        preco: prod.precoFardo,
        qtd,
        quantidadeFardo: prod.quantidadeFardo
      };
    }
    atualizarCarrinho();
    mostrarMensagemAdicao('Fardo adicionado ao carrinho!');
  }

  // Remover item
  if (e.target.classList.contains('btn-remover')) {
    e.stopPropagation();
    delete carrinho[e.target.dataset.key];
    atualizarCarrinho();
    mostrarMensagemRemocao('Produto removido do carrinho!');
  }

  // Limpar carrinho
  if (e.target === elementos.btnLimpar) {
    e.stopPropagation();
    if (confirm('Tem certeza que deseja limpar todo o carrinho?')) {
      carrinho = {};
      atualizarCarrinho();
    }
  }

  // Fechar carrinho ao clicar fora (Desktop e Mobile)
  // Certifique-se de que o clique não é no botão de abrir ou dentro do carrinho
  if (
    elementos.carrinhoDiv.classList.contains('aberto') &&
    !elementos.carrinhoDiv.contains(e.target) &&
    e.target !== elementos.btnMenuMobile
  ) {
    fecharCarrinho();
  }

  // Fechar menu lateral ao clicar fora
  if (
    elementos.menuLateral.classList.contains('aberto') &&
    !elementos.menuLateral.contains(e.target) &&
    e.target !== elementos.botaoMenuLateral // Adicionado para o botão "☰"
  ) {
    fecharMenuLateral();
  }
});


// =======================
// Finalizar Pedido (WhatsApp)
// =======================
elementos.btnFinalizar.addEventListener('click', (e) => {
  e.stopPropagation();
  if (Object.keys(carrinho).length === 0) return;

  const mensagem = `Olá, gostaria de finalizar meu pedido:%0A%0A${Object.values(carrinho)
    .map(item => `Código: ${item.codigo} - ${item.nome} (${item.tipo}) - ${item.qtd}x - R$ ${(item.preco * item.qtd).toFixed(2)}`)
    .join('%0A')}%0A%0ATotal: R$ ${elementos.total.textContent.split('R$ ')[1]}`;

  window.open(`https://wa.me/5511960202455?text=${mensagem}`, '_blank');
});

// =======================
// Mensagens
// =======================
function mostrarMensagemAdicao(texto) {
  const msgDiv = document.getElementById('mensagem-adicao');
  msgDiv.textContent = texto;
  msgDiv.classList.add('mostrar');
  setTimeout(() => msgDiv.classList.remove('mostrar'), 1500);
}

function mostrarMensagemRemocao(texto) {
  const msgDiv = document.getElementById('mensagem-adicao');
  msgDiv.textContent = texto;
  msgDiv.classList.add('mostrar');
  setTimeout(() => msgDiv.classList.remove('mostrar'), 1500);
}

// =======================
// Interação do Carrinho (Mobile)
// =======================
if (elementos.btnMenuMobile) {
  elementos.btnMenuMobile.addEventListener('click', (e) => {
    e.stopPropagation();
    if (elementos.carrinhoDiv.classList.contains('aberto')) {
        fecharCarrinho();
    } else {
        abrirCarrinho();
    }
  });
}

if (elementos.btnFecharCarrinho) {
  elementos.btnFecharCarrinho.addEventListener('click', () => {
    fecharCarrinho();
  });
}

// =======================
// Inicialização do Menu Lateral e Carrinho
// =======================
renderizarProdutos();
atualizarCarrinho();

document.addEventListener('DOMContentLoaded', () => {
  if (elementos.botaoMenuLateral && elementos.menuLateral && elementos.fecharMenuLateral) {
    elementos.botaoMenuLateral.addEventListener('click', () => {
      // Se o menu lateral está aberto, fecha. Se não, abre.
      if (elementos.menuLateral.classList.contains('aberto')) {
          fecharMenuLateral();
      } else {
          abrirMenuLateral();
      }
    });

    elementos.fecharMenuLateral.addEventListener('click', () => {
      fecharMenuLateral();
    });

    // Adicione um listener para fechar o menu lateral quando um link é clicado
    const menuLinks = elementos.menuLateral.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        fecharMenuLateral(); // Fecha o menu ao clicar no link
      });
    });
  }
});
