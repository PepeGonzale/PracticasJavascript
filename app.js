const cardArray = [
    {
        name : 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
    {
        name : 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    }
]

const randomCards = cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
let cardChosen = []
let cardChoseIds = []
const cardsWon = []

function createBoard(){
    //Creamos un bucle for, para crear el elemento img y y darle un id
    for (let i = 0; i < cardArray.length; i++){
       const card = document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       //Asignamos un id
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       //Con el atributo append lo mostramos en el index.html
       gridDisplay.appendChild(card)
      
    }
}
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img')
    console.log('check for match')
    if(cards)
    if(cardChosen[0] == cardChosen[1]){
        console.log('good job')
        cards[cardChoseIds[0]].setAttribute('src', 'images/white.png')       
        cards[cardChoseIds[1]].setAttribute('src', 'images/white.png')
        cards[cardChoseIds[0]].removeEventListener('click', flipCard)
        cards[cardChoseIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen);
    }
    else{
        
        console.log('otra vez sera')
        
    }
}

function flipCard () {
    console.log(cardArray)
    //Cuando hacemos click buscamos el id que le hepmos puesto antes con el setAtribbute y que nos lo muestre
    //por consola para ver que todo este corrrecto
    let cardId = this.getAttribute('data-id')
    
    cardChosen.push(cardArray[cardId].name)
    cardChoseIds.push(cardId)
    
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
    console.log(cardId)
}