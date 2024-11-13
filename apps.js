// Updated list of AAA games with specifications, descriptions, reviews, and comments
const games = [
    { 
        title: "Apex Legends", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/ApexLegends.png"
    },
    { 
        title: "Assassin’s Creed Mirage", 
        description: "Join Basim on a thrilling adventure.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."],
        image: "img/AssasinsCreed.png"
    },
    { 
        title: "Battlefield 2042", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/Battlefield.png"
    },
    { 
        title: "Black Myth Wukong", 
        description: "A vast space RPG by Bethesda.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Wukong.png"
    },
    { 
        title: "Call of Duty: Black Ops 6", 
        description: "Intense multiplayer action and a gripping campaign.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Shooter | Rating: 18+", 
        reviews: ["Action-packed as always!", "Best COD graphics so far."],
        comments: ["The graphics are next-level!", "Feels repetitive but still fun."],
        image: "img/BlackOps6.png"
    },
    { 
        title: "Call of Duty: Modern Warfare III", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/ModernWarfare3.png" 
    },
    { 
        title: "Counter Strike 2", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/CS2.png"
    },
    { 
        title: "Cyberpunk 2077", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/Cyberpunk.png"
    },
    { 
        title: "Dead by Daylight", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/DeadByDaylight.png"
    },
    { 
        title: "EA Sports FC 25", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/FC25.png"
    },
    { 
        title: "Elden Ring", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/EldenRing.png"
    },
    { 
        title: "Far Cry 6", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/FarCry6.png"
    },
    { 
        title: "Farming Simulator 25", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/FarmingSimulator.png"
    },
    { 
        title: "Flight Simulator", 
        description: "A vast space RPG by Bethesda.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/FlightSimulator.png"
    },
    { 
        title: "Fortnite", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/Fortnite.png"
    },
    { 
        title: "Forza Horizon 5", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/ForzaHorizon5.png"
    },
    { 
        title: "God of War Ragnarok", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/GodOfWarRagnarokpng.png"
    },
    { 
        title: "Grand Theft Auto V", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/GTAV.png" 
    },
    { 
        title: "Lego Star Wars: The Skywalker Saga", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/LegoStarWars.png" 
    },
    { 
        title: "Marvel's Spider-Man 2", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/SpiderMan2.png"
    },
    { 
        title: "Minecraft", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/Minecraft.png" 
    },
    { 
        title: "NBA 2K25", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."], 
        image: "img/Nba2K25.png"
    },
    { 
        title: "Need For Speed: Unbound", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/NFSUnbound.png"
    },
    { 
        title: "Overwatch 2", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/Overwatch2.png" 
    },
    { 
        title: "PUBG: Battlegrounds", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/Pubg.png"
    },
    { 
        title: "Red Dead Redemption 2", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/RDR2.png"
    },
    { 
        title: "Rocket League", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/RocketLeague.png"
    },
    { 
        title: "Sea Of Thieves", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/SeaOfThieves.png"
    },
    { 
        title: "Starfield", 
        description: "A vast space RPG by Bethesda.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Starfield.png"
    },
    { 
        title: "Star Wars Jedi: Fallen Order", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/FallenOrder.png"
    },
    { 
        title: "The Last of Us Part II", 
        description: "A deeply emotional journey in a post-apocalyptic world.", 
        specs: "Platform: PS4, PS5 | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["Emotionally gripping!", "Incredible storytelling and gameplay."],
        comments: ["Cried my eyes out!", "A masterpiece."],
        image: "img/LastOfUs2.png"
    },
    { 
        title: "The Sims 4", 
        description: "A vast space RPG by Bethesda.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Sims4.png"
    },
    { 
        title: "Tom Clancy's Rainbow Six Siege", 
        description: "A vast space RPG by Bethesda.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/RainbowSix.png"
    },
    { 
        title: "Valorant", 
        description: "A vast space RPG by Bethesda.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."],
        image: "img/Valorant.png"
    },








];

let currentGame;

// Load games on page
function loadGames() {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = "";
    games.forEach((game, index) => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';
        gameElement.innerHTML = `<img src="path/to/game${index + 1}.jpg" alt="${game.title}">
                                 <h3>${game.title}</h3>`;
        gameElement.onclick = () => showDetails(game);
        gameList.appendChild(gameElement);
    });
}
function loadGames() {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = ""; // Töröljük a már meglévő tartalmat, ha van
    games.forEach((game, index) => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';
        gameElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        gameElement.onclick = () => showDetails(game);
        gameList.appendChild(gameElement);
    });
}


// vélemény, kommentek
function showDetails(game) {
    document.getElementById('gameTitle').textContent = game.title;
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

// Oldal inicializálása
window.onload = () => {
    loadGames();
    recommendGame();
};
