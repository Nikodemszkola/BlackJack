<?php

class Card {
    private $name;
    private $kolor;
    private $wartosc;

    public function __construct($name, $kolor) {
        $dictWartosci = [
            "J" => 10,
            "Q" => 10,
            "K" => 10,
            "A" => 1
        ];

        $this->name = $name;
        $this->kolor = $kolor;
        $this->wartosc = isset($dictWartosci[$name]) ? $dictWartosci[$name] : (int)$name;
    }

    public function getWartosc() {
        return $this->wartosc;
    }

    public function getName() {
        return $this->name;
    }
}

class Deck {
    public $cards = [];

    public function __construct() {
        $kolory = ["Kier", "Karo", "Trefl", "Pik"];
        $names = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        
        foreach ($kolory as $kolor) {
            foreach ($names as $name) {
                $this->cards[] = new Card($name, $kolor);
            }
        }
    }

    public function shuffle() {
        shuffle($this->cards);
    }
}

class Player {
    public $cards = [];
    public $points = 0;

    public function calcPoints() {
        $this->points = 0;
        foreach ($this->cards as $card) {
            $this->points += $card->getWartosc();
        }

        if ($this->hasAce() && $this->points < 12) {
            $this->points += 10;
        }
    }

    private function hasAce() {
        foreach ($this->cards as $card) {
            if ($card->getName() === "A") {
                return true;
            }
        }
        return false;
    }
}

function startGame() {
    $deck = new Deck();
    $deck->shuffle();

    $player = new Player();
    $dealer = new Player();

    $player->cards[] = array_shift($deck->cards);
    $player->cards[] = array_shift($deck->cards);
    $dealer->cards[] = array_shift($deck->cards);
    $dealer->cards[] = array_shift($deck->cards);

    $player->calcPoints();
    $dealer->calcPoints();

    if ($dealer->points == 21) {
        return "Dealer ma blackjacka! Gracz przegrywa.";
    } elseif ($player->points == 21) {
        return "Gracz ma blackjacka! Dealer zaczyna swoją grę.";
    }

    return "Gra rozpoczęta!";
}
?>
