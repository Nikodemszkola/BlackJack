class Card {
    constructor(name,kolor) {
        const dictWartosci = {
            "J": 10,
            "Q": 10,
            "K": 10,
            "A": 1,
        }

        this.name = name;
        this.kolor = kolor;

        this.wartosc = dictWartosci[name] != null ? dictWartosci[name] : parseInt(name);

        this.htmlCard = "<div class=kwadrat4>" + this.name + "</div><div class=kwadrat5>" + this.name + "</div><div class=kwadrat6>" + this.name + "</div>"
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const kolory = ["Kier", "Karo", "Trefl", "Pik"];
        const names = ["2", "3", "4", "5", "6", "7", "8", "9", "10","J", "Q", "K", "A"];
        
        for (let kolor of kolory) {
            for (let name of names) {
                this.cards.push(new Card(name, kolor));
            }
        }
    }
}

class Player{
    constructor() {
        this.cards = [];
        this.points = 0;
    }

    calcPoints() {
        this.points = 0;
        for(let card of this.cards){
            this.points += card.wartosc;
        }
        if(this.cards.some(card => card.name === "A") && this.points < 12){
            this.points += 10;
        }
        //console.log(this.points);
    }
}

function shuffle(deck) {
    for (let i = deck.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
    }
}

var vDeck;
var vDealer;

function setVars(deck,dealer){
    vDealer = dealer;
    vDeck = deck;

    game = false;
}

var wynikHtml = document.getElementById('wynik');

function playerWin(deck,dealer) {
    setVars(deck,dealer);
    wynikHtml.innerText = "You won!"
    balance += 2*stawka;
    stawka = 0;
    
    setMoney();
}

function playerLose(deck,dealer) {
    setVars(deck,dealer);
    wynikHtml.innerText = "You lost!"
    stawka = 0;
    
    setMoney();
}

function draw(deck,dealer) {
    setVars(deck,dealer);
    wynikHtml.innerText = "Draw!"
    balance += stawka;
    stawka = 0;
    
    setMoney();
}

/*function showCardsInGrid(cards) {
    const grid = document.getElementById('card-grid');
    grid.innerHTML = '';
    cards.slice(0, 9).forEach(card => {
        const div = document.createElement('div');
        div.innerHTML = card.htmlCard;
        grid.appendChild(div.firstChild);
    });
}*/

function showPlayerCards() {
    const playerCard1 = document.querySelector('.karta1');
    const playerCard2 = document.querySelector('.karta2');
    if (player.cards.length = 2) {
        playerCard1.innerHTML = player.cards[0].htmlCard;
        playerCard2.innerHTML = player.cards[1].htmlCard;
    }
}

var player;
var game = false;

const Game = (function() {
    let deck;
    let dealer;

    function restart() {
        deck = new Deck();
        dealer = new Player();
        player = new Player();
    }

    function start() {
        if(!game){
            game = true;

            wynikHtml.innerText = "game started";

            restart();
            shuffle(deck);

            player.cards.push(deck.cards[0]);
            player.cards.push(deck.cards[1]);
            dealer.cards.push(deck.cards[2]);
            dealer.cards.push(deck.cards[3]);

            for (let i = 0; i < 4; i++) deck.cards.shift();

            player.calcPoints();
            dealer.calcPoints();

            showPlayerCards();
            //showCardsInGrid(player.cards);

            if (dealer.points === 21) {
                playerLose(deck,dealer);
            } else if (player.points === 21) {
                dealerPlay();
            }
        }
    }

    function dealerPlay() {
        if (dealer.points <= 16) {
            dealer.cards.push(deck.cards[0]);
            deck.cards.shift();
            dealer.calcPoints();
            dealerPlay();
        } else if (dealer.points > 21) {
            playerWin(deck,dealer);
        } else if (dealer.points > player.points) {
            playerLose(deck,dealer);
        } else if (player.points > dealer.points) {
            playerWin(deck,dealer);
        } else {
            draw(deck,dealer);
        }
    }

    function hit() {
        if(game){
            player.cards.push(deck.cards[0]);
            deck.cards.shift();
            player.calcPoints();
            if (player.points === 21) {
                dealerPlay();
            } else if (player.points > 21) {
                playerLose(deck,dealer);
            }
        }
    }

    function stand() {
        if(game){
            dealerPlay();
        }
    }

    return {
        start,
        restart,
        hit,
        stand,
    };
})();

var balance = 200;
var balanceHtml = document.getElementById('balance');

function setBalance() {
    balanceHtml.innerText = balance;
}

function setMoney() {
    setBalance();
    setStawka();
}

var stawka = 0;

function resetStawka() {
    balance += stawka;
    stawka = 0;

    setMoney();
}

function setStawka(){
    let stawkaTd = document.getElementById('stawka');
    stawkaTd.innerText = stawka;
}

function dzZe() {
    if(!game && balance >= 10){
        stawka += 10;
        balance -= 10;

        setMoney();
    }
}

function piZe() {
    if(!game && balance >= 50){
        stawka += 50;
        balance -= 50;

        setMoney();
    }
}

function stZe() {
    if(!game && balance >= 100){
        stawka += 100;
        balance -= 100;

        setMoney();
    }
}

function psZe() {
    if(!game && balance >= 500){
        stawka += 500;
        balance -= 500;

        setMoney();
    }
}

setBalance();