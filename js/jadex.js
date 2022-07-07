// How Jade did it: Converting HTML into JS
/*
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">

                <div class="pbu-movie-card">
                    <img src="https://www.themoviedb.org/t/p/original/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg" alt="Mission Impossible - Fallout" />
                    <div>
                        <h3>Mission Impossible - Fallout</h3>
                        <p>147 MIN | ADVENTURE</p>
                    </div>
                </div>
            </div> 
*/
window.onload = function() {
    let boxOffice = [{
        img: "https://www.themoviedb.org/t/p/original/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
        title: "Mission Impossible - Fallout",
        info: "47 | ADVENTURE",
    },{
        img: "https://www.themoviedb.org/t/p/original/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
        title: "Despicable Me",
        info: "140 | COMEDY",
    },{
        img: "https://www.themoviedb.org/t/p/original/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
        title: "I Need Sleep",
        info: "140 | DRAMA",
    },
    ];

    function createCard(imageSource, titleText, infoText) {
        // Building the card
        let card = document.createElement("div");
        card.className = "card";

        // Building the img
        let image = document.createElement("img");
        image.src = imageSource;

        // Building the info
        let info = document.createElement("div");
        info.className = "info";

        // Building the text
        let text = document.createElement("div");
        text.className = "text";

        // Building the movietitle
        let title = document.createElement("h3");
        title.innerText = titleText;

        // And the paragraph
        let prg = document.createElement("p");
        prg.innerText = infoText;

        // Building the heart
        let heart = document.createElement("div");
        heart.className = "heart";
        function onClick(){
            if(heart.className === "heart-white") {
                heart.className = "heart-red";
            } else {
                heart.className = "heart-white"
            }
        };

        heart.addEventListener("click", onClick);

        // Appendng
        card.appendChild(image);
        card.appendChild(info);

        // Appending
        info.appendChild(text);
        info.appendChild(heart);

        // Appending
        text.appendChild(title);
        text.appendChild(prg);

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(card);
    };

    for(var i=0; i<3; i++) {
        createCard(boxOffice[i].img, boxOffice[i].title, boxOffice[i].info)
    }
};