const flipPageBtn = document.querySelectorAll(".dog-eared-button");
const flipCard = document.querySelector(".flipped-card__inner");
function handleFlippedPage() {
  flipCard.classList.toggle("flipped-card__inner-turn");
}
flipPageBtn.forEach((el) => el.addEventListener("click", handleFlippedPage));
