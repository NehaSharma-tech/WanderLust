document.addEventListener("DOMContentLoaded", () => {
  const showImg = document.querySelector(".show-img");
  const overlay = document.getElementById("img-overlay");
  const overlayImg = document.getElementById("overlay-img");
  const closeBtn = document.querySelector(".close-btn");

  if (!showImg || !overlay) return;

  showImg.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = showImg.src;
    document.body.style.overflow = "hidden"; // prevent background scroll
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  }
});
});
