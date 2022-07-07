// const searchForm = document.querySelector("#search-input");
// const input = searchForm.querySelector("input");
// const movieCard = document.querySelector(".movie-card");
// const informations = document.querySelector(".card-details");

/* searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    fetch(`https://api.jikan.moe/v4/anime?q=${input.value}`)
    fetch(`https://api.jikan.moe/v4/anime?q=$naruto`)
        .then(function (response) {
            response.json();
        })
        .then(function (result) {
            console.log(result);
            displayFetchedData(result);
        });
  }); 
*/
fetch(`https://api.jikan.moe/v4/anime?q=naruto`)
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        console.log(result);
        displayFetchedData(result.data);
    });
