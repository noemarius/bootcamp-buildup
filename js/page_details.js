

// let END_POINT = `https://api.jikan.moe/v4/anime/${id}`
let END_POINT = `https://api.jikan.moe/v4/anime/1`
let movie = document.querySelector("#opening-movies")

fetch(END_POINT)
.then(response => response.json())
.then(result => {
    let anime = result.data
    console.log(anime)
    let h2 = addElements(movie, "h2", "movie_title", anime.title)
    let divDesImg = addElements(movie, "div", "descImg") 
    let img = addElements(divDesImg, "img", "movieImg")
    let p = addElements(divDesImg, "p", "synopsis", anime.synopsis)
    img.src = anime.images.jpg.image_url

})

function addElements(parent, child, className, childContent) {
    let childEl = document.createElement(child)
    childEl.className = className
    parent.appendChild(childEl)
    childEl.innerHTML = childContent
    return childEl
}