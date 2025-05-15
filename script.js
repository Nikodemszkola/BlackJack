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

class Talia {
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


function start() {

}