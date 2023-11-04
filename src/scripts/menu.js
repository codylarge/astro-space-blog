document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener(
    "click",
    function () // Display nav links when hamburger is clicked
    {
      if (navLinks.style.display === "block") {
        navLinks.style.display = "none"; // Toggle off
      } else {
        navLinks.style.display = "block"; // Toggle on
      }
    }
  );

  window.addEventListener(
    "resize",
    function () // resize in case user reverts size of window back to desktop
    {
      if (window.innerWidth > 600) {
        navLinks.style.display = "flex";
      } else {
        if (navLinks.style.display === "flex") {
          navLinks.style.display = "none";
        }
      }
    }
  );
});
