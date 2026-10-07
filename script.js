const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => { backTop.classList.toggle("visible", window.scrollY > 500); });
backTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });
