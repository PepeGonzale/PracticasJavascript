const cardArray = [
  {
    name: "fries",
    img: "../images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "../images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../images/milkshake.png",
  },
  {
    name: "pizza",
    img: "../images/pizza.png",
  },
  {
    name: "fries",
    img: "../images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "../images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../images/milkshake.png",
  },
  {
    name: "pizza",
    img: "../images/pizza.png",
  },
];

const randomCards = cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
//Devuelve el id del click que has hecho
let cardChoseIds = [];
const cardsWon = [];
var contador = 0;

function createBoard() {
  //Creamos un bucle for, para crear el elemento img y y darle un id
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "../images/blank.png");
    //Asignamos un id
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    //Con el atributo append lo mostramos en el index.html
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  //Selecciona todos los elementos de img
  const cards = document.querySelectorAll("img");
  const opcion1 = cardChoseIds[0];
  const opcion2 = cardChoseIds[1];
  console.log("check for match");
  if (opcion1 == opcion2) {
    cards[opcion1].setAttribute("src", "../images/blank.png");
    cards[opcion2].setAttribute("src", "../images/blank.png");
    alert("You hace click the same image");
  }
  if (cardChosen[0] == cardChosen[1]) {
    alert("Good job");
    //Te devuelve el id del primer elemento elegido, si es correcto le pasa la imagen blanca para no poder darle la vuelta
    cards[opcion1].setAttribute("src", "../images/white.png");
    console.log(cardChoseIds[0], cardChoseIds[1]);
    //Te devuelve el id del segundo elemento elegido, hace lo mismo que en el anterior
    cards[opcion2].setAttribute("src", "../images/white.png");
    //Elimina el evento click de los elegidos
    cards[opcion1].removeEventListener("click", flipCard);
    cards[opcion2].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
    contador++;
  } else {
    cards[opcion1].setAttribute("src", "../images/blank.png");
    cards[opcion2].setAttribute("src", "../images/blank.png");
    alert("Sorry, not correct");
  }

  resultDisplay.innerHTML = contador;
  if (contador == 6) {
    resultDisplay.innerHTML = "Congratulations you win";
  }
  cardChosen = [];
  cardChoseIds = [];
}

function flipCard() {
  console.log(cardArray);
  //Cuando hacemos click buscamos el id que le hepmos puesto antes con el setAtribbute y que nos lo muestre
  //por consola para ver que todo este corrrecto
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChoseIds.push(cardId);
  console.log(cardChoseIds);
  console.log("clicked", cardId);
  console.log(cardChosen);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
  console.log(cardChoseIds);
}
