const searchForm = document.querySelector("#search-input");
const input = searchForm.querySelector("input");
const movieCard = document.querySelector(".movie-card");
const informations = document.querySelector(".card-details");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  fetch(`https://api.jikan.moe/v4/anime?q=${input.value}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
      const imgEl = document.createElement("img");
      imgEl.innerHTML = result.data.images.jpg.image_url;
      movieCard.appendChild(imgEl);

      const title = document.createElement("h3");
      title.innerHTML = result.data.title;
      informations.appendChild(title);

      const episodes = document.createElement("p");
      episodes.innerHTML =
        "Number of episodes: " +
        result.data.episodes +
        "Duration: " +
        result.data.duration;
    });
});
