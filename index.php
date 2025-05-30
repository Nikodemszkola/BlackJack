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
<h1 class="wynik">Wynik:</h1>
<h1 class="wynik2">Wynik: <b id="wynik"></b></h1>
<h3>Balance: <b id="balance"></b></h3>
<button class="hit" onclick="Game.hit()">Hit</button>
<button class="stand" onclick="Game.stand()">Stand</button>
<button class="how_to">Help</button>
<form action="index.php" method="POST">
    <h1>Zarejestruj gracza</h1>
 
    <label for="imie">Podaj imię</label>
    <input type="text" id="imie" name="imie" required>
 
    <label for="nazwisko">Podaj nazwisko</label>
    <input type="text" id="nazwisko" name="nazwisko" required>
 
    <label for="login">Podaj login</label>
    <input type="text" id="login" name="login" required>
 
    <label for="blacklist">Blacklist</label>
    <select name="blacklist" id="blacklist">
        <option value="True">YES</option>
        <option value="False">NO</option>
    </select>
 
    <button type="submit">Zarejestruj</button>
</form>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "blackjack";
 
$conn = mysqli_connect($servername, $username, $password, $database);
 
if($conn)
{
    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];
    $login = $_POST['login'];
    $blacklist = $_POST['blacklist'];
    if (isset($_POST['imie']) && isset($_POST['nazwisko']) && isset($_POST['login'])) {
        $q = 'INSERT INTO gracze(imie, nazwisko, login, blacklist) VALUES($imie, $nazwisko, $login, $blacklist);';
        $result = mysqli_query($conn, $q);
    }
}
?>
</body>
<script src="script.js"></script>
</html>