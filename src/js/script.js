



function Shuffle(cards) {

    new_cards = cards.sort(() => Math.random() - 0.5)

    return new_cards
}


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

// function sleep(delay) {
//     var start = new Date().getTime();
//     while (new Date().getTime() < start + delay);
// }


function flipCard() {


    

}

function Game() {

  
    console.log("Game started")

    let active = [];
    let activeIndex = [];
    let cards = generateCards()
''
    // Render cards

    for (let i = 1; i <= 24; i++) {

        const field = document.getElementById("cards");
        
        const imgcontainer = document.createElement("div");
        const img = document.createElement("img");
        img.src = cards[i - 1];

        field.appendChild(imgcontainer)
        imgcontainer.appendChild(img)
        img.classList.add("disabled");

        imgcontainer.addEventListener("click", turncard => {

            if (active.length <= 2) {

                img.classList.remove("disabled");
                active.push(cards[i-1])
                activeIndex.push(i + 1)

            }

            if (active.length == 2) {

                

                if (active[0] == active[1]) {
                    console.log("match")
                    active = [];
                    activeIndex = [];
                }

                if (active[0] != active[1] ) {

                    console.log(activeIndex)

          
                    document.querySelector(`#cards div:nth-child(${activeIndex[0]}) img`).classList.remove("disabled");
                    document.querySelector(`#cards div:nth-child(${activeIndex[1]}) img`).classList.remove("disabled");


                    setTimeout(() => {
                        document.querySelector(`#cards div:nth-child(${activeIndex[0]}) img`).classList.add("disabled");
                        document.querySelector(`#cards div:nth-child(${activeIndex[1]}) img`).classList.add("disabled");
                        
                        activeIndex = [];
                        active = [];
                    }, 1000)
                }

            }
      
    
        })


    }


}

Game()