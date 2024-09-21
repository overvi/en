var modalToggle = document.querySelector(".modal-toggle");
var modal = document.querySelector(".modal");
modalToggle === null || modalToggle === void 0 ? void 0 : modalToggle.addEventListener("click", function () {
    modal === null || modal === void 0 ? void 0 : modal.classList.toggle("hidden");
});
modal === null || modal === void 0 ? void 0 : modal.addEventListener("click", function (ev) {
    var target = ev.target;
    if (!target.closest(".modal-content")) {
        modal === null || modal === void 0 ? void 0 : modal.classList.toggle("hidden");
    }
});
document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && !(modal === null || modal === void 0 ? void 0 : modal.classList.contains("hidden"))) {
        modal === null || modal === void 0 ? void 0 : modal.classList.toggle("hidden");
    }
});
//# sourceMappingURL=contact.js.map