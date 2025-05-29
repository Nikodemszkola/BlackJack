<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlackJack</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
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

<button class="start" onclick="start()">Rozpocznij grę</button>
<div class="zeton_1"><div class="pod_zeton"><b>10</b></div></div>
<div class="zeton_2"><div class="pod_zeton"><b>50</b></div></div>
<div class="zeton_3"><div class="pod_zeton"><b>100</b></div></div>
<div class="zeton_4"><div class="pod_zeton"><b>500</b></div></div>
<h1 class="wynik">Wynik:</h1>
<button class="hit" onclick="hit()">Hit</button>
<button class="stand" onclick="stand()">Stand</button>
<button class="how_to">Help</button>
</body>
</html>