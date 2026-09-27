// FOLIA — shared site behavior (mobile nav + photo lightbox)

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function openLightbox(image) {
  var img = document.getElementById("lightboxImage");
  var lb = document.getElementById("lightbox");
  if (!img || !lb) return;
  img.src = image;
  lb.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  var lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
  // Close mobile menu after a nav link is tapped
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.getElementById("navLinks").classList.remove("active");
    });
  });

  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });

    // Photos are keyboard-operable (role="button" + tabindex in the HTML)
    document.querySelectorAll(".photo[data-image]").forEach(function (el) {
      el.addEventListener("click", function () {
        openLightbox(el.getAttribute("data-image"));
      });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(el.getAttribute("data-image"));
        }
      });
    });
  }
});
