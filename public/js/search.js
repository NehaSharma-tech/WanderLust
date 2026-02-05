document.querySelector("form[role='search']")
  ?.addEventListener("submit", e => {
    const inp = document.querySelector(".search-inp");
    inp?.addEventListener("input", () => {
        inp.classList.remove("is-invalid");
    });

    if (!inp.value.trim()) {
        e.preventDefault();
        inp.classList.add("is-invalid");
    }
});