class Card {
    constructor(name,kolor) {
        const dictWartosci = {
            "J": 10,
            "Q": 10,
            "K": 10,
            "A": 11,
        }

        this.name = name;
        this.kolor = kolor;

        this.wartosc = dictWartosci[name] != null ? dictWartosci[name] : parseInt(name);
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
        for(let card of this.cards){
            this.points += card.wartosc;
        }
    }
}

function shuffle(deck) {
    for (let i = deck.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]]; // Zamiana miejsc
    }
}

var player = new Player();
var dealer = [];
var deck = new Deck();

function start() {
    shuffle(deck);

    player.cards.push(deck.cards[0]);
    player.cards.push(deck.cards[1]);
    dealer.push(deck.cards[2]);
    dealer.push(deck.cards[3]);
    for(let i=0; i<4; i++)
        deck.cards.shift();
}

function hit() {

}

function stand() {

}