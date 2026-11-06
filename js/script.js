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

// 利用者の声
const prevButton = document.querySelector(".voices-prev");
const nextButton = document.querySelector(".voices-next");
const voicesCard = document.querySelector(".voices-card");
const card = document.querySelector(".voices-card .card");
const cards = document.querySelectorAll(".voices-card .card");
const dots = document.querySelectorAll(".voices-dots button");
const currentPage = document.querySelector(".current-page");

const gap = 40;

let currentIndex = 0;
let visibleCard = window.innerWidth <= 768 ? 1 : 3;
let maxIndex = Math.ceil(cards.length / visibleCard) - 1;

function updateButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === maxIndex;
}
function updateDots() {
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add("active");
  }
}
function updateSlider() {
  const cardWidth = card.getBoundingClientRect().width;
  voicesCard.style.transform = `translateX(-${(cardWidth + gap) * visibleCard * currentIndex}px)`;
}
function updateCounter() {
  currentPage.textContent = currentIndex + 1;
}

nextButton.addEventListener("click", function () {
  if (currentIndex < maxIndex) {
    currentIndex++;

    updateSlider();
    updateButtons();
    updateDots();
    updateCounter();
  }
});
prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;

    updateSlider();
    updateButtons();
    updateDots();
    updateCounter();
  }
});
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    currentIndex = index;

    updateSlider();
    updateButtons();
    updateDots();
    updateCounter();
  });
});
window.addEventListener("resize", function () {
  visibleCard = window.innerWidth <= 768 ? 1 : 3;
  maxIndex = Math.ceil(cards.length / visibleCard) - 1;

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  updateSlider();
  updateButtons();
  updateDots();
  updateCounter();
});

updateButtons();
updateDots();
updateCounter();

// FAQアコーディオン
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const faqItem = question.closest(".faq-item");
    faqItem.classList.toggle("open");
    const isOpen = faqItem.classList.contains("open");
    question.setAttribute("aria-expanded", isOpen);
  });
});

// 申し込みフォーム
const applicationForm = document.querySelector(".application-form");
const formMessage = document.querySelector(".form-message");

applicationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.textContent =
    "入力内容を確認しました。これはデモのため、実際の申し込みは行われておりません。";
  applicationForm.reset();
  formMessage.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
