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
  } else if (formType === "protocolo") {
    formProtocolo.classList.remove("hidden");
    formLogin.classList.add("hidden");

    btnProtocolo.classList.add("active");
    btnLogin.classList.remove("active");

    // Exibe o modal
    modal.classList.remove("hidden");
  }
}

// Função para fechar o modal ao clicar no botão "Entendi"
function closeModal() {
  const modal = document.getElementById("protocolo-modal");
  modal.classList.add("hidden");
}
