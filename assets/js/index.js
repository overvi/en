var tabLinks = document.querySelectorAll(".tab-link");
var tabContents = document.querySelectorAll(".tab-content");
tabLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        tabLinks.forEach(function (item) {
            item.classList.remove("active-tab");
        });
        tabContents.forEach(function (item) {
            item.classList.add("hidden");
            item.classList.remove("active-tab-content");
        });
        link.classList.add("active-tab");
        var target = link;
        var targetTabContent = document.querySelector(target.dataset.tabTarget);
        if (targetTabContent) {
            targetTabContent.classList.remove("hidden");
        }
    });
});
var toggleSidebar = document.querySelector(".toggle-sidebar");
var sidebar = document.querySelector(".sidebar");
toggleSidebar === null || toggleSidebar === void 0 ? void 0 : toggleSidebar.addEventListener("click", function () {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle("hidden");
});
window.addEventListener("click", function (ev) {
    var target = ev.target;
    if (!target.closest(".sidebar-content , .toggle-sidebar")) {
        sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.add("hidden");
    }
});
//# sourceMappingURL=index.js.map