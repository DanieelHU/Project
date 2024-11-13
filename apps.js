// Updated list of AAA games with specifications, descriptions, reviews, and comments
const games = [
    { 
        title: "Cyberpunk 2077", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/"
    },
    { 
        title: "Assassin’s Creed Mirage", 
        description: "Join Basim on a thrilling adventure.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["A return to classic AC style!", "Loved the Middle Eastern setting."],
        comments: ["Best AC in years!", "Basim is an interesting character."]
    },
    { 
        title: "Call of Duty: Black Ops 6", 
        description: "Intense multiplayer action and a gripping campaign.", 
        specs: "Platform: PC, PS5, Xbox | Genre: Shooter | Rating: 18+", 
        reviews: ["Action-packed as always!", "Best COD graphics so far."],
        comments: ["The graphics are next-level!", "Feels repetitive but still fun."]
    },
    { 
        title: "The Last of Us Part II", 
        description: "A deeply emotional journey in a post-apocalyptic world.", 
        specs: "Platform: PS4, PS5 | Genre: Action-Adventure | Rating: 18+", 
        reviews: ["Emotionally gripping!", "Incredible storytelling and gameplay."],
        comments: ["Cried my eyes out!", "A masterpiece."]
    },
    { 
        title: "Starfield", 
        description: "A vast space RPG by Bethesda.", 
        specs: "Platform: PC, Xbox Series X|S | Genre: RPG | Rating: 18+", 
        reviews: ["A new era in RPGs!", "Bethesda's best work yet."],
        comments: ["Space exploration at its finest!", "Wish it was available on PlayStation."]
    },
    { 
        title: "Elden Ring", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."] 
    },
    { 
        title: "NBA 2K25", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."] 
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
        title: "God of War: Ragnarok", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/GodOfWarRagnarokpng.png"
    },
    { 
        title: "GTA V", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."] 
    },
    { 
        title: "Forza Horizon 5", 
        description: "Explore the open-world city of Night City.", 
        specs: "Platform: PC, PS5, Xbox | Genre: RPG | Rating: 18+", 
        reviews: ["A visually stunning experience!", "Massive open world with rich details."],
        comments: ["Amazing game!", "Wish there were fewer bugs..."],
        image: "img/ForzaHorizon5.png"
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
