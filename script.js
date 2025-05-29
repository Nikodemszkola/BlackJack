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

        this.htmlCard = "<div class=karta_a><div class=kwadrat1>" + this.name + "</div><div class=kwadrat2>" + this.name + "</div><div class=kwadrat3>" + this.name + "</div></div>"
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
}

function playerWin(deck,dealer) {
    setVars(deck,dealer);
    console.log("player won");
}

function playerLose(deck,dealer) {
    setVars(deck,dealer);
    console.log("player lost");
}

function draw(deck,dealer) {
    setVars(deck,dealer);
    console.log("draw");
}

var player;

const Game = (function() {
    let deck;
    let dealer;

    function restart() {
        deck = new Deck();
        dealer = new Player();
        player = new Player();
    }

    function start() {
        restart();
        shuffle(deck);

        player.cards.push(deck.cards[0]);
        player.cards.push(deck.cards[1]);
        dealer.cards.push(deck.cards[2]);
        dealer.cards.push(deck.cards[3]);

        for (let i = 0; i < 4; i++) deck.cards.shift();

        player.calcPoints();
        dealer.calcPoints();

        if (dealer.points === 21) {
            playerWin(deck,dealer);
        } else if (player.points === 21) {
            dealerPlay();
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
        player.cards.push(deck.cards[0]);
        deck.cards.shift();
        player.calcPoints();
        if (player.points === 21) {
            dealerPlay();
        } else if (player.points > 21) {
            playerLose(deck,dealer);
        }
    }

    function stand() {
        dealerPlay();
    }

    return {
        start,
        restart,
        hit,
        stand,
    };
})();

var stawka = 0;

function setStawka(){
    let stawkaTd = document.getElementById('stawka');
    stawkaTd.innerText = stawka;
}

function dzZe() {
    stawka += 10;
    setStawka();
}

function piZe() {
    stawka += 50;
    setStawka();
}

function stZe() {
    stawka += 100;
    setStawka();
}

function psZe() {
    stawka += 500;
    setStawka();
}