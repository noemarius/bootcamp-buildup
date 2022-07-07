window.onload = function () {
  //html elements references variable

  let selectAnimeCardRow = document.querySelector(".nm-animecardrow");

  //temp dummydata to build the js functions

  let dummyAnime = [
    {
      title: "random",
      images: { jpg: { url: "randomLink" } },
      duration: "2h",
    },
    {
      title: "random2",
      images: { jpg: { url: "randomLink2" } },
      duration: "2h",
    },
  ];

  //Logic

  function displayFetchedData(data) {
    data.forEach((element) => {
      makeCard(element);
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
    let cardInfoTitle = document.createElement("h3");

    cardInfoTitleDiv.appendChild(cardInfoTitle);
    cardInfoDiv.appendChild(cardInfoTitleDiv);
    cardInfoDiv.appendChild(cardInfoTitleDescription);
    cardItem.appendChild(cardInfoDiv);
    cardImgDiv.appendChild(cardImg);
    cardItem.appendChild(cardImgDiv);
    cardContainer.appendChild(cardItem);
    parent.appendChild(cardContainer);
    cardContainer.className = "col-12 col-md-6 col-lg-4 col-xl-3";
    cardItem.className = "pbu-movie-card";

    cardImg.src = dataItem.images.jpg.image_url;
    cardInfoTitle.textContent = dataItem.title;
    cardInfoTitleDescription.textContent = dataItem.duration;

    cardContainer.addEventListener("click", function (event) {
        event.preventDefault();
        location.href("../html/page_details")
        let id = dataItem.mal_id;
        localStorage.setItem("storage", id);
      });
  }

  displayFetchedData(dummyAnime);
};
