// Busca inteligente e acessível para os cartões Bilhete Único
// Autor: Especialista em Front-End, UX e Acessibilidade

document.addEventListener('DOMContentLoaded', function () {
  // Palavras-chave inteligentes para cada cartão
  const cardsData = [
    {
      el: null,
      keywords: ['mamãe', 'mamae', 'tarifa zero', 'gestante', 'grávida', 'gravida', 'pré-natal', 'prenatal', 'mãe', 'mae'],
    },
    {
      el: null,
      keywords: ['comum', 'comum', 'normal', 'cidadão', 'cidadã', 'todos', 'bilhete comum'],
    },
    {
      el: null,
      keywords: ['estudante', 'aluno', 'universitário', 'universitaria', 'escola', 'meia', 'meia-tarifa', 'meia tarifa', 'bilhete estudante'],
    },
    {
      el: null,
      keywords: ['professor', 'docente', 'educador', 'bilhete professor'],
    },
    {
      el: null,
      keywords: ['deficiência', 'deficiencia', 'pcd', 'pessoa com deficiência', 'pessoa com deficiencia', 'especial', 'acessibilidade', 'bilhete pcd'],
    },
    {
      el: null,
      keywords: ['60', '60+', 'idoso', 'terceira idade', 'sessenta', 'gratuidade', 'bilhete 60', '60 a 64'],
    },
    {
      el: null,
      keywords: ['65', '65+', 'idoso', 'terceira idade', 'sessenta e cinco', 'gratuidade', 'bilhete 65', '65 anos'],
    },
    {
      el: null,
      keywords: ['mãe paulistana', 'mae paulistana', 'gestante', 'gravida', 'grávida', 'paulistana', 'mãe', 'mae'],
    },
    {
      el: null,
      keywords: ['obeso', 'obesa', 'pessoa obesa', 'sobrepeso', 'bilhete obeso'],
    },
    {
      el: null,
      keywords: ['gestante', 'gravida', 'grávida', 'pré-natal', 'prenatal', 'mãe', 'mae', 'bilhete gestante'],
    },
    {
      el: null,
      keywords: ['corporativo', 'empresa', 'funcionário', 'funcionario', 'vale-transporte', 'vale transporte', 'bilhete corporativo'],
    },
  ];

  // Seletores
  const form = document.getElementById('form-busca-cartao');
  const input = document.getElementById('busca-cartao');
  const resultadoInfo = document.getElementById('busca-resultado-info');
  const cards = document.querySelectorAll('#cards-bilhete-unico article, #cards-bilhete-unico .card-sp');

  // Associa cada card ao seu objeto de dados
  cards.forEach((card, i) => { cardsData[i] && (cardsData[i].el = card); });

  // Utilitário para remover destaques
  function limparDestaques() {
    cards.forEach(card => card.classList.remove('card-destaque-busca'));
    document.querySelectorAll('.busca-highlight').forEach(el => {
      el.replaceWith(document.createTextNode(el.textContent));
    });
  }

  // Utilitário para destacar texto buscado
  function destacarTexto(card, termo) {
    if (!termo) return;
    const regex = new RegExp(`(${termo})`, 'gi');
    ['h3', 'p', '.mb-2'].forEach(sel => {
      card.querySelectorAll(sel).forEach(el => {
        el.innerHTML = el.textContent.replace(regex, '<span class="busca-highlight">$1</span>');
      });
    });
  }

  // Busca inteligente
  function buscarCartoes(termo) {
    limparDestaques();
    termo = termo.trim().toLowerCase();
    if (!termo) {
      cards.forEach(card => card.style.display = '');
      resultadoInfo.textContent = '';
      return;
    }
    let encontrados = [];
    cardsData.forEach((data, i) => {
      const card = data.el;
      if (!card) return;
      // Busca por título, público, benefício e palavras-chave
      const texto = card.textContent.toLowerCase();
      const matchKeyword = data.keywords.some(k => k.includes(termo) || termo.includes(k));
      if (texto.includes(termo) || matchKeyword) {
        card.style.display = '';
        encontrados.push(card);
        destacarTexto(card, termo);
      } else {
        card.style.display = 'none';
      }
    });
    if (encontrados.length) {
      resultadoInfo.textContent = `${encontrados.length} resultado${encontrados.length > 1 ? 's' : ''} encontrado${encontrados.length > 1 ? 's' : ''}`;
      // Scroll e destaque
      const primeiro = encontrados[0];
      primeiro.classList.add('card-destaque-busca');
      primeiro.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => primeiro.classList.remove('card-destaque-busca'), 2200);
    } else {
      resultadoInfo.innerHTML = 'Nenhum cartão encontrado.<br><span style="font-size:0.95em;opacity:0.7">Sugestão: estudante, idoso, comum, gestante, professor...</span>';
    }
  }

  // Eventos
  input.addEventListener('input', e => buscarCartoes(e.target.value));
  form.addEventListener('submit', e => buscarCartoes(input.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') buscarCartoes(input.value);
  });

  // Acessibilidade extra: limpar busca ao apertar Esc
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      input.value = '';
      buscarCartoes('');
      input.blur();
    }
  });
});
