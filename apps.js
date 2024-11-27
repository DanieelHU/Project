// Updated list of AAA games with specifications, descriptions, reviews, and comments
const games = [
    { 
        title: "Apex Legends", 
        description: "Csapat alapú battle royale játék, ahol különleges hősök küzdenek egymással.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/ApexLegends.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Assassin’s Creed Mirage", 
        description: "Akció-kaland játék, amely a rejtett mozgásra és parkourra építve egy ősi városban zajló titkos küldetéseket kínál.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."],
        image: "img/AssasinsCreed.png",
        creator: "Ubisoft"
    },
    { 
        title: "Battlefield 2042", 
        description: "Nagy léptékű, futurisztikus multiplayer FPS dinamikus csatákkal.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."],
        image: "img/Battlefield.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Black Myth: Wukong", 
        description: "Kínai mitológián alapuló akció-RPG, ahol egy harcos majom mágikus képességekkel küzd.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."],
        image: "img/Wukong.png",
        creator: "Game Science"
    },
    { 
        title: "Call of Duty: Black Ops 6", 
        description: "Intenzív, első személyű lövölde, amely titkos katonai műveletekben és hi-tech fegyverekkel vívott csatákban merül el.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Shooter | Rating: 18+", 
        reviews: ["Action-packed as always!", "Best COD graphics so far."],
        comments: ["The graphics are next-level!", "Feels repetitive but still fun."],
        image: "img/BlackOps6.png",
        creator: "Activision"
    },
    { 
        title: "Call of Duty: Modern Warfare III", 
        description: "Akciódús, első személyű lövölde, amely modern harctereken zajló katonai műveletek és intenzív multiplayer csaták keverékét kínálja.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."],
        image: "img/ModernWarfare3.png",
        creator: "Activision"
    },
    { 
        title: "Counter-Strike 2", 
        description: "Taktikai, csapat alapú FPS, ahol a játékosok bombákat telepítenek vagy diffuzálnak, miközben stratégiai harcokban mérik össze tudásukat.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Shooter | Rating: 18+", 
        reviews: ["Action-packed as always!", "Best COD graphics so far."],
        comments: ["The graphics are next-level!", "Feels repetitive but still fun."],
        image: "img/CS2.png",
        creator: "Valve"
    },
    { 
        title: "Cyberpunk 2077", 
        description: "Nyílt világú RPG, ahol a játékosok egy futurisztikus városban, különféle technológiai fejlesztésekkel és döntésekkel formálhatják történetüket.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/Cyberpunk.png",
        creator: "CD Projekt"
    },
    { 
        title: "Dead by Daylight", 
        description: "Aszimmetrikus horror játék, ahol egy gyilkos üldözi a túlélőket, akik megpróbálnak generátorokat javítani és elmenekülni.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/DeadByDaylight.png",
        creator: "Behaviour Interactive"
    },
    { 
        title: "EA Sports FC 25", 
        description: "Futballszimulátor, amely valósághű mérkőzéseket és csapatmenedzsmentet kínál a sport rajongóinak.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/FC25.png",
        creator: "EA Sports"
    },
    { 
        title: "Elden Ring", 
        description: "Akció-RPG, amely egy nyílt világban zajlik, ahol a játékosok felfedezhetik a sötét fantáziavilágot és harcolhatnak erős ellenfelekkel.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/EldenRing.png",
        creator: "From Software"
    },
    { 
        title: "Far Cry 6", 
        description: "Nyílt világú akciójáték, ahol a játékosok gerillaként harcolnak egy diktátor ellen egy trópusi szigeten.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/FarCry6.png",
        creator: "Ubisoft"
    },
    { 
        title: "Farming Simulator 25", 
        description: "Valósághű szimulátor, ahol a játékosok farmot vezetnek, növényeket termesztenek és állatokat nevelnek.00000000", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/FarmingSimulator.png",
        creator: "Giants Software"
    },
    { 
        title: "Microsoft Flight Simulator", 
        description: "Valósághű repülőszimulátor, amely lehetővé teszi a játékosok számára, hogy különböző repülőgépekkel fedezzék fel a világot.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/FlightSimulator.png",
        creator: "Microsoft"
    },
    { 
        title: "Fortnite", 
        description: "Battle royale játék, ahol a játékosok építkezve és harcolva próbálnak túlélni egy folyamatosan zsugorodó pályán.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Fortnite.png",
        creator: "Epic Games"
    },
    { 
        title: "Forza Horizon 5", 
        description: "Nyílt világú autóverseny játék, amely lenyűgöző tájakon és dinamikus környezetben kínál izgalmas versenyeket.", 
        specs: "Platform: PC, PS5, 0Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/ForzaHorizon5.png",
        creator: "Xbox Game Studios"
    },
    {
        title: "God of War Ragnarök", 
        description: "Akció-kaland játék, ahol Kratos és Atreus a nordikus mitológia világában küzdenek a Ragnarök eljövetelével.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/GodOfWarRagnarokpng.png",
        creator: "Sony Interactive"
    },
    { 
        title: "Grand Theft Auto V", 
        description: "Nyílt világú akciójáték, amelyben a játékosok három karaktert irányítva vesznek részt bűnözői tevékenységekben Los Santos városában.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/GTAV.png",
        creator: "Rockstar Games"
    },
    { 
        title: "Lego Star Wars: The Skywalker Saga", 
        description: "Kalandjáték, amely a Star Wars filmek történetét meséli el LEGO stílusban, tele humorral és akcióval.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/LegoStarWars.png",
        creator: "Warner Bros."
    },
    { 
        title: "Marvel's Spider-Man 2", 
        description: "Akció-kaland játék, ahol Peter Parker és Miles Morales közösen küzdenek New Yorkban a Marvel univerzum híres ellenségei ellen.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/SpiderMan2.png",
        creator: "Sony Interactive"
    },
    { 
        title: "Minecraft", 
        description: "Kockákból épített nyílt világú játék, ahol a játékosok felfedezhetik, építhetnek és túlélhetnek a végtelen környezetben.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."],
        image: "img/Minecraft.png",
        creator: "Mojang"
    },
    { 
        title: "NBA 2K25", 
        description: "Kosárlabda szimulátor, amely valósághű játékélményt kínál, lehetővé téve a csapatok irányítását és versenyzést.", 
        specs: "Platform: PS4, PS5 | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["Emotionally gripping!", "Incredible storytelling and gameplay."],
        comments: ["Cried my eyes out!", "A masterpiece."],
        image: "img/Nba2K25.png",
        creator: "2K Sports"
    },
    { 
        title: "Need For Speed Unbound", 
        description: "Autós versenyjáték, amely gyors versenyekre, testreszabott autókra és dinamikus rendőrségi üldözésekre épít.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/NFSUnbound.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Overwatch 2", 
        description: "Csapat alapú hero shooter, ahol a játékosok különböző hősökkel küzdenek, stratégiai együttműködésre van szükség.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Overwatch2.png",
        creator: "Blizzard"
    },
    { 
        title: "PUBG: Battlegrounds", 
        description: "Battle royale játék, ahol a játékosok egy szigeten harcolnak egymással, hogy az utolsó túlélővé váljanak.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Pubg.png",
        creator: "Krafton"
    },
    { 
        title: "Red Dead Redemption 2", 
        description: "Nyílt világú akció-kaland játék, amely a vadnyugat korában játszódik, tele felfedezéssel és küldetésekkel.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/RDR2.png",
        creator: "Rockstar Games"
    },
    { 
        title: "Rocket League", 
        description: "Autós foci játék, ahol a játékosok autókkal próbálnak gólt szerezni egy hatalmas focipályán.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/RocketLeague.png",
        creator: "Psyonix"
    },
    { 
        title: "Sea of Thieves", 
        description: "Kalandjáték, ahol a játékosok kalózként hajóznak, kincseket keresnek és más játékosokkal mérkőznek meg a tengeren.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/SeaOfThieves.png",
        creator: "Xbox Game Studios"
    },
    { 
        title: "Silent Hill 2 Remake", 
        description: "Horror játék, amely a Silent Hill városában zajló borzalmas titkokat és pszichológiai kihívásokat tár fel.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."],
        image: "img/SilentHill2test.png",
        creator: "Konami"
    },
    { 
        title: "Starfield", 
        description: "Nyílt világú űr-RPG, ahol a játékosok felfedezhetik az univerzumot, küldetéseken vesznek részt és saját történetüket alakítják.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Starfield.png",
        creator: "Bethesda"
    },
    { 
        title: "Star Wars: Jedi Fallen Order", 
        description: "Akció-kaland játék, ahol a játékosok egy fiatal jedi szerepét öltve küzdenek a galaxis sötét erői ellen.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/FallenOrder.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Star Wars Outlaws", 
        description: "Nyílt világú akció-kaland játék, ahol a játékosok a Star Wars univerzumának alvilágában kalandoznak, miközben bűnözői életet élnek.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/StarWarsOutlaws.png",
        creator: "Ubisoft"
    },
    { 
        title: "The Last of Us 2", 
        description: "Akció-kaland játék, amely egy poszt-apokaliptikus világban követi Ellie és Abby történetét, miközben túlélésért és bosszúért küzdenek.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/LastOfUs2.png",
        creator: "Sony Interactive"
    },
    { 
        title: "The Sims 4", 
        description: "Életszimulátor, ahol a játékosok virtuális karaktereket irányítanak, építenek, dolgoznak és alakítják a Simjeik életét.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Sims4.png",
        creator: "Electronic Arts"
    },
    { 
        title: "Tom Clancy's Rainbow Six Siege", 
        description: "Taktikai FPS, ahol a játékosok operátorokként csapatban harcolnak épületekben, bombákat hatástalanítanak vagy védenek.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/RainbowSix.png",
        creator: "Ubisoft"
    },
    { 
        title: "Valorant", 
        description: "Csapat alapú taktikai FPS, ahol a játékosok egyedi képességekkel harcolnak a győzelemért.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Valorant.png",
        creator: "Riot Games"
    },


];


let currentGame;

// Betölti a gameket
function loadGames() {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = ""; // Töröljük a már meglévő tartalmat, ha van
    games.forEach((game, index) => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';
        gameElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.creator}</p>
        `;
        
        gameElement.onclick = () => showDetails(game);
        gameList.appendChild(gameElement);
    });
}
function displayGames(filteredGames) {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = "";  // Törli az előző keresési eredményeket

    // Minden játékot hozzáad a listához
    filteredGames.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';
        gameElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.creator}</p>
        `;
        gameElement.onclick = () => showDetails(game); // Részletek megjelenítése kattintásra
        gameList.appendChild(gameElement);
    });
}

// vélemény, kommentek
function showDetails(game) {
    document.getElementById('gameTitle').textContent = game.title;
    document.getElementById('gameCreator').textContent = game.creator;
    document.getElementById('gameDescription').textContent = game.description;
    document.getElementById('gameSpecs').textContent = game.specs;

    // Display vélemény
    const randomReview = game.reviews[Math.floor(Math.random() * game.reviews.length)];
    document.getElementById('reviewContent').textContent = randomReview;

    // Display komment
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = "";
    game.comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment;
        commentList.appendChild(commentItem);
    });

    document.getElementById('gameDetails').style.display = 'flex';

}

// Close the modal
function closeDetails() {
    document.getElementById('gameDetails').style.display = 'none';
}

// Random "game of the day"
function recommendGame() {
    currentGame = games[Math.floor(Math.random() * games.length)];
    document.getElementById('randomGameTitle').textContent = currentGame.title;
}
function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // A keresett kifejezés
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm)); // Szűrés
    displayGames(filteredGames); // A szűrt játékok megjelenítése
}

// Oldal inicializálása
window.onload = () => {
    loadGames();
    recommendGame();
};
// JavaScript code for handling game card interactions and displaying detailed pop-ups

// Function to handle card click and show game details in a modal
function showGameDetails(game) {
    // Find the game details from the card
    const { title, creator, image, description, specs, reviews, rating, ratingCount } = game;

    // Update modal content
    document.getElementById("gameModalTitle").innerText = title;
    document.getElementById("gameModalCreator").innerText = creator;
    document.getElementById("gameModalImage").src = image;
    document.getElementById("gameModalDescription").innerText = description;
    document.getElementById("gameModalSpecs").innerText = specs;
    

    // Show the modal
    document.getElementById("gameModal").style.display = "block";
}


// Function to close the modal
function closeModal() {
    document.getElementById("gameModal").style.display = "none";
}

// Initialize event listeners for game cards
document.querySelectorAll(".game-card").forEach((card, index) => {
    card.addEventListener("click", () => showGameDetails(games[index]));
});

// Event listener for modal close button
document.getElementById("closeModalButton").addEventListener("click", closeModal);
