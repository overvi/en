const modalToggle = document.querySelector(".modal-toggle");
const modal = document.querySelector(".modal");

modalToggle?.addEventListener("click", () => {
  modal?.classList.toggle("hidden");
});

modal?.addEventListener("click", (ev) => {
  const target = ev.target as HTMLElement;
  if (!target.closest(".modal-content")) {
    modal?.classList.toggle("hidden");
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && !modal?.classList.contains("hidden")) {
    modal?.classList.toggle("hidden");
  }
});
