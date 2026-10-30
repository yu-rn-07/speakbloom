// ハンバーガーメニュー
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");
});
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuButton.classList.remove("open");
  });
});

// レッスンUIタブ
const lessonTabs = document.querySelectorAll(".lesson-tab button");
const lessonPanels = document.querySelectorAll(".lesson-panel");

lessonTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const target = tab.dataset.tab;
    lessonTabs.forEach(function (item) {
      item.classList.remove("active");
    });
    lessonPanels.forEach(function (panel) {
      panel.classList.remove("active");
    });
    tab.classList.add("active");

    lessonPanels.forEach(function (panel) {
      if (panel.dataset.content === target) {
        panel.classList.add("active");
      }
    });
  });
});
