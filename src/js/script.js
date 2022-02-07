function shuffle(cards) {

    new_cards = cards.sort(() => Math.random() - 0.5)

    return new_cards
}

function generatecards() {
    let cards = [];

    for (let i = 1; i <= 6; i++) {
        
        let currentImg = `img/char-${i}.png`;
        cards.push(currentImg);

        if (cards.length == 6) {
            i = 0
        } 

    }

    shuffle(cards)
    return cards
}

function Game() {

  
    console.log("Game started")

    let active = [];
    let cards = generatecards()

    // Render cards

    for (let i = 1; i <= 12; i++) {

        const field = document.getElementById("cards");
        
        const imgcontainer = document.createElement("div");
        const img = document.createElement("img");
        img.src = cards[i - 1];

        field.appendChild(imgcontainer)
        imgcontainer.appendChild(img)
        img.classList.add("disabled");

        imgcontainer.addEventListener("click", turncard => {
            img.classList.remove("disabled");
    
        })


    }


}

Game()