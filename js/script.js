// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const tabs = document.querySelectorAll(
  ".company__tab--list .company__tabs .company__tab"
);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const currentTab = document.querySelector(
      ".company__tab--list .company__tab.active"
    );
    const currentContent = document.querySelector(".tab__content.active");

    currentTab.classList.remove("active");
    currentContent.classList.remove("active");

    tab.classList.add("active");
    const contentId = tab.dataset.tab;
    const content = document.getElementById(contentId);

    if (content) {
      content.classList.add("active");
    } else {
      console.error(`要素が見つかりません: ${contentId}`);
    }
  });
});
