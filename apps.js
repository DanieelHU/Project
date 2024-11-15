// Updated list of AAA games with specifications, descriptions, reviews, and comments
const games = [
    { 
        title: "Apex Legends", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/ApexLegends.png",
    },
    { 
        title: "Assassin’s Creed Mirage: DE", 
        description: "Join Basim on a thrilling adventure.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."],
        image: "img/AssasinsCreed.png",
    },
    { 
        title: "Call of Duty: Black Ops 6", 
        description: "Intense multiplayer action and a gripping campaign.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Shooter | Rating: 18+", 
        reviews: ["Action-packed as always!", "Best COD graphics so far."],
        comments: ["The graphics are next-level!", "Feels repetitive but still fun."],
        image: "img/BlackOps6.png",
    },
    { 
        title: "The Last of Us Part II", 
        description: "A deeply emotional journey in a post-apocalyptic world.", 
        specs: "Platform: PS4, PS5 | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["Emotionally gripping!", "Incredible storytelling and gameplay."],
        comments: ["Cried my eyes out!", "A masterpiece."],
        image: "img/LastOfUs2.png",
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
        image: "img/DeadByDaylight.png",
    },
    { 
        title: "EA Sports FC 25: SA", 
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
        title: "GTA V: POE", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/GTAV.png"
        
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
        title: "God of War: Ragnarok", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/GodOfWarRagnarokpng.png"
    },
    {
        title: "Minecraft",
        image: "img/Minecraft.png",
        description: "Explore a blocky, procedurally-generated 3D world with endless possibilities.",
        specs: "Platform: PC, Xbox, PlayStation, Mobile",
        reviews: [
            "Timeless classic.",
            "Great game but can be laggy on lower-end devices.",
            "Endless fun and creativity!"
        ],
    },
    {
        title: "Black Myth: Wukong",
        image: "img/Black_Myth_Wukong_cover_art.jpg",
        description: "Explore a blocky, procedurally-generated 3D world with endless possibilities.",
        specs: "Platform: PC, Xbox, PlayStation, Mobile",
        reviews: [
            "Timeless classic.",
            "Great game but can be laggy on lower-end devices.",
            "Endless fun and creativity!"
        ],
    },
    {
        title: "Silent Hill 2 Remake",
        image: "img/Silent_Hill_2_remake_cover.jpg",
        description: "Explore a blocky, procedurally-generated 3D world with endless possibilities.",
        specs: "Platform: PC, Xbox, PlayStation, Mobile",
        reviews: [
            "Timeless classic.",
            "Great game but can be laggy on lower-end devices.",
            "Endless fun and creativity!"
        ],
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
        `;
        gameElement.onclick = () => showDetails(game); // Részletek megjelenítése kattintásra
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
    const { title, image, description, specs, reviews, rating, ratingCount } = game;

    // Update modal content
    document.getElementById("gameModalTitle").innerText = title;
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
