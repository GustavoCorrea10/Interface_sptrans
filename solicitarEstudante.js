// ===========================
// SWITCH ENTRE CPF e RNE
// ===========================
function switchTab(tab) {
  const tabCPF = document.getElementById("tab-cpf");
  const tabRNE = document.getElementById("tab-rne");
  const formCPF = document.getElementById("form-cpf");
  const formRNE = document.getElementById("form-rne");

  if (tab === "cpf") {
    tabCPF.classList.add("active");
    tabRNE.classList.remove("active");
    formCPF.classList.remove("hidden");
    formRNE.classList.add("hidden");
  } else {
    tabRNE.classList.add("active");
    tabCPF.classList.remove("active");
    formRNE.classList.remove("hidden");
    formCPF.classList.add("hidden");
  }
}

// ===========================
// MÁSCARA CPF: 000.000.000-00
// ===========================
function maskCPF(input) {
  let v = input.value.replace(/\D/g, "").slice(0, 11);
  if (v.length > 9) {
    v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
  } else if (v.length > 6) {
    v = v.replace(/^(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  } else if (v.length > 3) {
    v = v.replace(/^(\d{3})(\d{0,3})/, "$1.$2");
  }
  input.value = v;
}

// ===========================
// ENVIAR
// ===========================
function handleEnviar() {
  const activeTab = document
    .getElementById("tab-cpf")
    .classList.contains("active")
    ? "cpf"
    : "rne";

  if (activeTab === "cpf") {
    const cpf = document.getElementById("cpf-input").value.replace(/\D/g, "");
    if (cpf.length !== 11) {
      alert("Por favor, informe um CPF válido com 11 dígitos.");
      return;
    }
    alert(
      `CPF ${document.getElementById("cpf-input").value} enviado com sucesso!`,
    );
  } else {
    const rne = document.querySelector(".rne-main").value.trim();
    const digito = document.querySelector(".rne-digit").value.trim();
    const uf = document.querySelector(".rne-uf").value;
    const cpf = document.querySelector(".cpf-estrang").value.trim();

    if (!rne || !digito || !uf) {
      alert("Por favor, preencha os campos do RNE/CRNM, Dígito e UF Emissor.");
      return;
    }
    alert(`RNE/CRNM enviado com sucesso!`);
  }
}
