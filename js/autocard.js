//html elements references variable

let selectAnimeCardRow = document.querySelector(".nm-animecardrow");

//temp dummydata to build the js functions

let dummyAnime = [
  {
    title: "random",
    url: "randomLink",
    pic: "srcImg",
  },
  {
    title: "random2",
    url: "randomLink2",
    pic: "srcImg2",
  },
];

//Logic

function displayFetchedData(data) {
  data.forEach((element) => {
    makeCard(data);
  });
}

function makeCard(dataItem) {
  let parent = selectAnimeCardRow;
  let cardContainer = document.createElement("div");
  let cardItem = document.createElement("div");
  let cardImgDiv = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardInfoDiv = document.createElement("div");
  let cardInfoTitleDiv = document.createElement("div");
  let cardInfoTitleDescription = document.createElement("div");

  cardInfoDiv.appendChild(cardInfoTitleDiv);
  cardInfoDiv.appendChild(cardInfoTitleDescription);
  cardItem.appendChild(cardInfoDiv);
  cardImgDiv.appendChild(cardImg);
  cardItem.appendChild(cardImgDiv);
  cardContainer.appendChild(cardItem);
  parent.appendChild(cardContainer);
  cardContainer.className = "col-12 col-md-6 col-lg-4 col-xl-3";
  cardItem.className = "pbu-movie-card";

  cardImg.textContent = "iuwqndiu";
  cardInfoTitleDescription.textContent = "iuwqndiu";
  cardInfoTitleDiv.textContent = "iuwqndiu";

  //cardContainer.addEventListener("click", function (event) {
  //  event.preventDefault();
  //  location.href = "../html/page_details.html"
  //});
}

displayFetchedData(dummyAnime);
