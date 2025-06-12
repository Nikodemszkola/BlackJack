<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlackJack</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Blackjack</h1>
<div class="stol"></div>
<div class="karta_k">
    <div class="kwadrat1">K</div>
    <div class="kwadrat2">K</div>
    <div class="kwadrat3">K</div>
</div>
<div class="karta_a">
    <div class="kwadrat1">A</div>
    <div class="kwadrat2">A</div>
    <div class="kwadrat3">A</div>
</div>
<table>
    <tr>
        <th>Stawka:</th>
    </tr>
    <tr>
        <td onclick="resetStawka()" id="stawka">0</td>
    </tr>
</table>
<button class="start" onclick="Game.start()">Rozpocznij grę</button>
<div onclick="dzZe()" class="zeton_1"><div class="pod_zeton"><b>10</b></div></div>
<div onclick="piZe()" class="zeton_2"><div class="pod_zeton"><b>50</b></div></div>
<div onclick="stZe()" class="zeton_3"><div class="pod_zeton"><b>100</b></div></div>
<div onclick="psZe()" class="zeton_4"><div class="pod_zeton"><b>500</b></div></div>
<div class="karta1">
    <div class="kwadrat4"></div>
    <div class="kwadrat5"></div>
    <div class="kwadrat6"></div>
</div>
<div class="karta2">
<div class="kwadrat4"></div>
    <div class="kwadrat5"></div>
    <div class="kwadrat6"></div>
</div>
<div class="karta3">
<div class="kwadrat4"></div>
    <div class="kwadrat5"></div>
    <div class="kwadrat6"></div>
</div>
<div class="karta4">
<div class="kwadrat4"></div>
    <div class="kwadrat5"></div>
    <div class="kwadrat6"></div>
</div>
<h1 class="wynik">Wynik:</h1>
<h1 class="wynik2">Wynik: <b id="wynik"></b></h1>
<h3>Balance: <b id="balance"></b></h3>
<button class="hit" onclick="Game.hit()">Hit</button>
<button class="stand" onclick="Game.stand()">Stand</button>
<button class="how_to">Help</button>

</body>aaw
<script src="script.js"></script>
</html>