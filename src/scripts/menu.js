document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    mobileMenu?.classList.toggle("hidden");
  });

  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger?.classList.remove("is-active");
      mobileMenu?.classList.add("hidden");
    });
  });
});
