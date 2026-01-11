/* ================= NAVIGATION ACTIVE ================= */
const links = document.querySelectorAll(".header nav a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ================= FADE IN AU SCROLL ================= */
const elements = document.querySelectorAll(".fade-in");

function handleScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

/* ================= HEADER SHADOW AU SCROLL ================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
  }
});

/* ================= STORAGE HELPERS ================= */
function getStorage(key, defaultValue = 0) {
  return Number(localStorage.getItem(key)) || defaultValue;
}

function setStorage(key, value) {
  localStorage.setItem(key, value);
}

/* ================= GLOBAL COUNTERS ================= */
if (!localStorage.getItem("visits")) {
  setStorage("visits", 1);
} else {
  setStorage("visits", getStorage("visits") + 1);
}

/* ================= CONSOLE (PROJET ACADÉMIQUE) ================= */
console.log("Mbaay Mi – scripts communs chargés");