
// Shufflar kortarray

function Shuffle(cards) {
    new_cards = cards.sort(() => Math.random() - 0.5)
    return new_cards
}


// Generera 24 kort

function generateCards() {
    let cards = [];

    for (let i = 1; i <= 12; i++) {
        
        let currentImg = `img/char-${i}.png`;
        cards.push(currentImg);

        if (cards.length == 12) {
            i = 0
        } 

    }

    Shuffle(cards)
    return cards
}


function Game() {

    console.log("Game started")
    let active = [];
    let activeIndex = [];
    let cards = generateCards()
    let disabled = false


    // Render cards

    for (let i = 1; i <= 24; i++) {

        const field = document.getElementById("cards");
        const imgcontainer = document.createElement("div");
        const img = document.createElement("img")

        img.src = cards[i - 1];
        field.appendChild(imgcontainer)
        imgcontainer.appendChild(img)
        img.classList.add("disabled");

        imgcontainer.addEventListener("click", turncard => {

             // Kolla att aktiva kort är mindre än 2, samt att checken inte körs + att inte kunna klicka på samma kort igen
            if (active.length < 2 && disabled == false && (i != activeIndex[0] || i != activeIndex[1]) ) {

                img.classList.remove("disabled");
                active.push(cards[i-1])
                activeIndex.push(i)
                
            }


            //  Se ifall det är match elr ej, samt att kort-visning inte körs

            if (active.length == 2 && disabled == false) {

                //  Matchning, rensa kortindex, samt kort-innehållet (src för bild)
                if (active[0] == active[1]) {

                    console.log("match")
                    active = [];
                    activeIndex = [];

                }

                // Ej matchning, disable för att hinna visa kort

                if (active[0] != active[1]) {

                    disabled = true

                    console.log(activeIndex)

                    document.querySelector(`#cards div:nth-child(${activeIndex[0]}) img`).classList.remove("disabled");
                    document.querySelector(`#cards div:nth-child(${activeIndex[1]}) img`).classList.remove("disabled");

                    setTimeout(() => {
                        document.querySelector(`#cards div:nth-child(${activeIndex[0]}) img`).classList.add("disabled");
                        document.querySelector(`#cards div:nth-child(${activeIndex[1]}) img`).classList.add("disabled");
                        activeIndex = [];
                        active = [];
                        disabled = false
                    }, 1000)


                }

            }

        })

    }

}

Game()