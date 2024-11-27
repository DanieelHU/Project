///////////////////////////////////////// (ChatGPT) Generált GYIK kérdések //////////////////////////////////
const faqs = [
    { question: "Miért a Game Cloud-ot válasszam?", answer: "Szolgáltatásunk gyors, megbízható, és exkluzív Xbox és PlayStation játékokat is tartalmaz." },
    { question: "Milyen csomagok közül választhatok?", answer: "Jelenleg három csomagunk van: Alap, Gamer, és Hardcore, hogy mindenki megtalálja a számára megfelelőt." },
    { question: "Milyen eszközökön használható a szolgáltatás?", answer: "Bármilyen eszközön elérhető, legyen az PC, Mac, okostelefon vagy tablet." },
    { question: "Hogyan biztosítjuk az alacsony késleltetést?", answer: "Modern szerverekkel és optimalizált hálózati infrastruktúrával dolgozunk." },
    { question: "Tartalmaz a szolgáltatás konzol exkluzív játékokat?", answer: "Igen, hozzáférhet Xbox és PlayStation exkluzív címekhez is." },
    { question: "Hogyan tudok előfizetni?", answer: "Előfizethet weboldalunkon keresztül, pár kattintással." },
    { question: "Visszamondhatom az előfizetést?", answer: "Igen, bármikor visszamondhatja, nincs hosszú távú elköteleződés." },
    { question: "Biztonságos-e a platformunk?", answer: "Teljes mértékben, az adatai védelme kiemelten fontos számunkra." },
    { question: "Mennyibe kerül a szolgáltatás?", answer: "Áraink: Alap - $10/hó, Gamer - $20/hó, Hardcore - $50/hó." },
    { question: "Van-e próbaidőszak?", answer: "Igen, 7 napos ingyenes próbaidőszakot biztosítunk új ügyfeleinknek." },
    { question: "Milyen internetsebesség szükséges a zavartalan játékhoz?", answer: "Legalább 20 Mbps letöltési sebességet javaslunk a stabil játékélményhez, de a legjobb eredményhez 50 Mbps vagy gyorsabb kapcsolat ideális."},
    { question: "Támogatja-e a platformunk a többjátékos módot?", answer: "Igen, a felhőszolgáltatásunk támogatja a többjátékos módot, így barátaival is játszhat kedvenc játékaiban."}
];

const container = document.querySelector('.faq-container');
faqs.forEach(faq => {
    const card = document.createElement('div');
    card.classList.add('faq-card');
    card.innerHTML = `
        <h3>${faq.question}</h3>
        <div class="faq-answer">${faq.answer}</div>
    `;
    card.addEventListener('click', () => {
        card.classList.toggle('open');
    });
    container.appendChild(card);
});