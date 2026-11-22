document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("artModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const closeBtn = document.getElementById("closeModal");
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const title = card.querySelector("h3");
      const desc = card.querySelector("p");

      if (img && title && desc) {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalTitle.textContent = title.textContent;
        modalDesc.textContent = desc.textContent;
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});