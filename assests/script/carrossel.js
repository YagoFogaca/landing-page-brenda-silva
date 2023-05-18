const btnAdvance = document.querySelector(".right");
const btnBack = document.querySelector(".left");
const cardCarrossel = document.querySelectorAll(".card-carrossel");
let currentCardCarrossel = 0;
const maxCardCarrossel = cardCarrossel.length;

btnAdvance.addEventListener("click", () => {
  currentCardCarrossel += 1;
  if (currentCardCarrossel >= maxCardCarrossel) {
    currentCardCarrossel = 0;
  }
  itensCards();
});

btnBack.addEventListener("click", () => {
  currentCardCarrossel -= 1;
  if (currentCardCarrossel < 0) {
    currentCardCarrossel = maxCardCarrossel - 1;
  }
  itensCards();
});

function itensCards() {
  cardCarrossel.forEach((card) => {
    card.classList.remove("active");
  });

  cardCarrossel[currentCardCarrossel].scrollIntoView({
    inline: "center",
    behavior: "smooth",
    block: "nearest",
  });

  cardCarrossel[currentCardCarrossel].classList.add("active");
}
