document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(40px)";
        setTimeout(() => {
            sec.style.transition = "0.8s ease";
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }, 200);
    });
});
