const btn = document.querySelector(".btn-nav");
const navMobile = document.querySelector(".nav-mobile");

btn.addEventListener("click", () => {
  if (!navMobile.classList.contains("nav-active")) {
    btn.classList.add("btn-active");
    navMobile.classList.add("nav-active");
  } else {
    navMobile.classList.remove("nav-active");
    btn.classList.remove("btn-active");
  }
});
