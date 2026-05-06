// Função para alternar entre os formulários e abrir o modal
function showForm(formType) {
  const formLogin = document.getElementById("form-login");
  const formProtocolo = document.getElementById("form-protocolo");
  const btnLogin = document.getElementById("btn-login");
  const btnProtocolo = document.getElementById("btn-protocolo");
  const modal = document.getElementById("protocolo-modal");

  if (formType === "login") {
    formLogin.classList.remove("hidden");
    formProtocolo.classList.add("hidden");

    btnLogin.classList.add("active");
    btnProtocolo.classList.remove("active");

    // Animação de entrada no formulário de login
    formLogin.classList.remove("animate-in");
    void formLogin.offsetWidth; // force reflow para reiniciar a animação
    formLogin.classList.add("animate-in");
  } else if (formType === "protocolo") {
    formProtocolo.classList.remove("hidden");
    formLogin.classList.add("hidden");

    btnProtocolo.classList.add("active");
    btnLogin.classList.remove("active");

    // Animação de entrada no formulário de protocolo
    formProtocolo.classList.remove("animate-in");
    void formProtocolo.offsetWidth; // force reflow para reiniciar a animação
    formProtocolo.classList.add("animate-in");

    // Exibe o modal com animação
    openModal();
  }
}

// Abre o modal com efeito de fade + scale
function openModal() {
  const modal = document.getElementById("protocolo-modal");
  modal.classList.remove("hidden");
  // Aguarda o próximo frame para aplicar a classe de visibilidade (garante a transição CSS)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.classList.add("visible");
    });
  });
}

// Fecha o modal com efeito de fade + scale reverso
function closeModal() {
  const modal = document.getElementById("protocolo-modal");
  modal.classList.remove("visible");
  // Aguarda a transição terminar antes de esconder com display:none
  modal.addEventListener("transitionend", function handler() {
    modal.classList.add("hidden");
    modal.removeEventListener("transitionend", handler);
  });
}
