# Project# Projekt Dokumentáció

## Bevezetés

### Honnan az ötlet, miért ezt választottátok?
A projekt alapötlete egy gaming felhőszolgáltatás létrehozása volt, amely hasonló az Xbox Cloud Gaminghez. A csapat célja az volt, hogy egy olyan platformot hozzon létre, amely lehetővé teszi a felhasználók számára, hogy akár PS-exkluzív játékokat is elérjenek előfizetés keretében. Az ötletet a játékok iránti közös érdeklődés és a technológia új lehetőségei ihlették.

### Miről is szól a projekt?
A projekt egy gaming platform környezetét modellezi, amely tartalmaz egy felhasználóbarát kezelőfelületet, funkcionális backend rendszert, valamint interaktív animációkat. A cél az volt, hogy a felhasználó egy egyszerű folyamaton keresztül fedezhesse fel a szolgáltatást.

## Felhasználói Dokumentáció

### Felület (felületek) bemutatása
- **Kezdőlap**: Minimalista dizájnú oldal, amelyen a szolgáltatásban szereplő játékok, lehetőségek jelennek meg.
- **Keresőmező**: Lehetővé teszi a felhasználók számára, hogy gyorsan megtalálják a keresett játékot.
- **Lábléc**: További információk és közösségi oldalak.

### Egyes tevékenységek esetén várható kimenetek
- **Előfizetés gombra kattintás**: Megjelenik egy alertbox az üzenettel: _"Az előfizetés jelenleg nem elérhető. Hamarosan érkezik!"_
- **GYIK kérdésre kattintás**: A kattintott kérdés alatt megjelenik a válasz.
- **Kapcsolat menüpont választása**: "Csatlakozz" gombra kattintva.

## Fejlesztői Dokumentáció

### Feladatok elosztása
- **Dizájn és frontend**: [Csapattag neve]
- **Backend fejlesztés**: [Csapattag neve]
- **Dokumentáció és tesztelés**: [Csapattag neve]

### Github használata
- Minden csapattag saját brancheket használt.
- **Commit üzenetek formája**: _"[Feladat neve] megvalósítva"_

### Fejlesztői környezetek, programozási nyelvek
- **Programozási nyelvek**: HTML, CSS, JavaScript
- **Fejlesztői környezet**: Visual Studio Code
- **Tesztelés végrehajtása**: Weboldal (js, html kód)

### A kódok főbb részegységeinek bemutatása
- **Kereső**: Dinamikus keresési funkció, amely valós időben szűri az eredményeket.
- **GYIK interakció**: JavaScript eseménykezeléssel megvalósított kérdés-válasz megjelenítés.
- **Előfizetés gomb**: Egyszerű alertboxot megjelenítő esemény.

## Tesztelés

### Tesztelt funkciók
| Tesztelt funkció          | Bemenet                | Várt eredmény                      | Tényleges eredmény            | Megjegyzés |
|---------------------------|------------------------|------------------------------------|-------------------------------|------------|
| GYIK interakció           | Kérdésre kattintás     | Válasz megjelenése                 | Válasz megjelenése            | Rendben    |
| Sötét mód bekapcsolása    | Gombra kattintás       | Oldal színsémájának változása      | Oldal színsémájának változása | Rendben    |
| Kereső                    | Kulcsszó beírása       | Keresési eredmények megjelenítése  | Keresési eredmények megjelenít| Rendben    |
| Előfizetés gomb           | Gombra kattintás       | Alertbox megjelenése               | Alertbox megjelenése          | Rendben    |

### Tesztelés folyamata
- A GYIK kérdés-válasz funkciót teszteltük Google böngészőben.
- A sötét mód beállítását és visszaállítását is teszteltük.
- A kereső működését kis- és nagybetűk esetén is ellenőriztük.
- Az előfizetés gombra kattintás esetén az alertbox megjelenését teszteltük.
- Hiba tapasztalásánál az adott kódrészt javítottuk, majd újra teszteltük a funkciókat.
