document.addEventListener("DOMContentLoaded", () => {
  const cardsArray = [
    { name: "blank", image: "image/blank.png" },
    { name: "cheeseburger", image: "image/blank.png" },
    { name: "fries", image: "image/blank.png" },
    { name: "ice cream", image: "image/blank.png" },
    { name: "milkshake", image: "image/blank.png" },
    { name: "white", image: "image/blank.png" },
  ];

  const gridEl = document.querySelector(".grid");
  const displayScores = document.querySelector("#scores");
  let cardPicked = [];
  let cardPickedId = [];
  let woncards = [];

  function boardPlaform() {
    for (let x = 0; x < cardsArray.length; x++) {
      const card = document.createElement("img");
      card.setAttribute("src", "image/blank.png");
      card.setAttribute("data-id", x);
      card.addEventListener("click", cardflip);
      gridEl.appendChild(card);
    }
  }

  function matchedCard() {
    const cards = document.querySelectorAll("img");
    const idOne = cardPickedId[0];
    const idTwo = cardPickedId[1];
    if (cardPicked[0] === cardPicked[1]) {
      alert("The Cards matched !! ");
      cards[idOne].setAttribute("src", "image/blank.png");
      cards[idTwo].setAttribute("src", "image/blank.png");
      woncards.push(cardPicked);
    } else {
      cards[idOne].setAttribute("src", "image/blank.png");
      cards[idTwo].setAttribute("src", "image/blank.png");
      alert("Desole, Essayer encore !! ");
    }
    cardPicked = [];
    cardPickedId = [];

    displayScores.textContent = woncards.length;
    if (woncards.length === cardsArray.length / 2) {
      displayScores.textContent = "Felicitations! Vous avez gagne ..... ";
    }
  }

  function cardflip() {
    const cardId = this.getAttribute("data-id");
    cardPicked.push(cardsArray[cardId].name);
    cardPickedId.push(cardId);
    this.setAttribute("src", cardsArray[cardId].image);
    if (cardPicked.length === 2) {
      setTimeout(matchedCard, 1000);
    }
  }

  boardPlaform();
});
