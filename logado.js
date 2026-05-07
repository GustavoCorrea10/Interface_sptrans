// =============================================
// BILHETE ÚNICO - Interações JS Completas
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // ----- Toggle visibilidade do saldo -----
  const eyeBtns = document.querySelectorAll(".card-eye-btn");
  const balances = document.querySelectorAll(".card-balance");

  eyeBtns.forEach((btn, i) => {
    let visible = false;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      visible = !visible;
      if (balances[i]) {
        balances[i].textContent = visible ? "R$ 25,40" : "R$ XX,XX";
      }
      btn.style.color = visible ? "#CC0000" : "";
    });
  });

  // ----- Filtro de protocolo -----
  const searchInput = document.querySelector(".protocols-search-input");
  const filterSelect = document.querySelector(".protocols-select");
  const tableRows = document.querySelectorAll(".protocols-table tbody tr");

  function filterTable() {
    const query = searchInput ? searchInput.value.toLowerCase() : "";
    const status = filterSelect ? filterSelect.value : "";

    tableRows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      const badge = row.querySelector(".status-badge");
      const badgeClass = badge ? badge.className : "";

      const matchText = !query || text.includes(query);
      const matchStatus = !status || badgeClass.includes(status);

      row.style.display = matchText && matchStatus ? "" : "none";
    });
  }

  if (searchInput) searchInput.addEventListener("input", filterTable);
  if (filterSelect) filterSelect.addEventListener("change", filterTable);

  // ----- Interações: Menu Lateral -----
  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");
  const sidebar = document.getElementById("sidebarMenu");
  const overlay = document.getElementById("sidebarOverlay");

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  openMenuBtn.addEventListener("click", toggleSidebar);
  closeMenuBtn.addEventListener("click", toggleSidebar);
  overlay.addEventListener("click", toggleSidebar);

  // Expansão dos submenus na sidebar
  const navGroups = document.querySelectorAll(".nav-group");
  navGroups.forEach((group) => {
    group.querySelector(".has-submenu").addEventListener("click", () => {
      group.classList.toggle("open");
    });
  });

  // ----- Interações: Notificações -----
  const notifBtn = document.getElementById("notifBtn");
  const notifModal = document.getElementById("notifModal");
  const closeNotifBtn = document.getElementById("closeNotif");
  const profileDropdown = document.getElementById("profileDropdown");

  notifBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notifModal.classList.toggle("active");
    profileDropdown.classList.remove("active"); // Garante que o outro feche
  });

  closeNotifBtn.addEventListener("click", () => {
    notifModal.classList.remove("active");
  });

  // ----- Interações: Menu Perfil -----
  const profileBtn = document.getElementById("profileBtn");

  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle("active");
    notifModal.classList.remove("active"); // Garante que o outro feche
  });

  // Fecha os modais se clicar fora deles
  document.addEventListener("click", (e) => {
    if (!notifModal.contains(e.target) && e.target !== notifBtn) {
      notifModal.classList.remove("active");
    }
    if (!profileDropdown.contains(e.target) && e.target !== profileBtn) {
      profileDropdown.classList.remove("active");
    }
  });

  // ----- Hover nos cartões via teclado -----
  document.querySelectorAll(".card-item, .service-item").forEach((el) => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.click();
      }
    });
  });
});
