const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tabLinks.forEach((item) => {
      item.classList.remove("active-tab");
    });
    tabContents.forEach((item) => {
      item.classList.add("hidden");
      item.classList.remove("active-tab-content");
    });

    link.classList.add("active-tab");

    const target = link as HTMLElement;
    const targetTabContent = document.querySelector(target.dataset.tabTarget!);
    if (targetTabContent) {
      targetTabContent.classList.remove("hidden");
    }
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");

toggleSidebar?.addEventListener("click", () => {
  sidebar?.classList.toggle("hidden");
});

window.addEventListener("click", (ev) => {
  const target = ev.target as HTMLElement;
  if (!target.closest(".sidebar-content , .toggle-sidebar")) {
    sidebar?.classList.add("hidden");
  }
});
