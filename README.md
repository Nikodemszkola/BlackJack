# BlackJack

## Opis gry

**BlackJack** to przeglądarkowa gra karciana, w której gracz rywalizuje z komputerowym krupierem. Celem jest zdobycie sumy punktów kart jak najbliższej 21, nie przekraczając tej wartości.

## Zasady gry

- Gracz i krupier otrzymują po dwie karty.
- Gracz może dobierać karty ("Hit") lub zakończyć dobieranie ("Stand").
- Krupier dobiera karty do uzyskania co najmniej 17 punktów.
- Wygrywa ten, kto ma więcej punktów, ale nie przekroczył 21.
- Przekroczenie 21 punktów oznacza przegraną ("Bust").

## Funkcjonalności

- Graficzny interfejs stołu i kart.
- Wybór stawki za pomocą żetonów.
- Obsługa akcji: rozpoczęcie gry, dobieranie kart, zatrzymanie.
- Rejestracja gracza i zapis do bazy danych MySQL.
- Obsługa blacklisty graczy.

## Pliki projektu

- `index.php` – główny plik gry i formularz rejestracji.
- `script.js` – logika gry w JavaScript.
- `style.css` – stylizacja interfejsu.
- `README.md` – dokumentacja projektu.

## Wymagania

- Przeglądarka internetowa z obsługą JavaScript.
- Serwer z obsługą PHP i MySQL (np. XAMPP, WAMP).

## Uruchomienie

1. Skopiuj pliki projektu do katalogu serwera WWW.
2. Utwórz bazę danych `blackjack` oraz tabelę `gracze` zgodnie z wymaganiami projektu.
3. Uruchom serwer i otwórz `index.php` w przeglądarce.

---