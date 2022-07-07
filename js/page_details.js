

// let END_POINT = `https://api.jikan.moe/v4/anime/${id}`
let END_POINT = `https://api.jikan.moe/v4/anime/1`
let movie = document.querySelector("#opening-movies")
// let movieDetailsContainer = document.querySelector(".movieDetailsContainer")

fetch(END_POINT)
    .then(response =>
        response.json()
    )
    .then(result => {
        let anime = result.data
        console.log(anime)
        getElements(".movieTitle", anime.title)
        getElements(".titleJapanese", anime.title_japanese)
        getElements(".episodes", `${anime.episodes} episodes`)
        getElements(".rating", anime.rating)
        let divDesImg = addElements(movie, "div", "descImg")
        let img = addElements(divDesImg, "img", "movieImg")
        let p = addElements(divDesImg, "p", "synopsis", anime.synopsis)
        img.src = anime.images.jpg.image_url
    })
    .catch(error => {
        console.log(error)
        getElements(".movieDetailsContainer", "404 (Not Found)")
    })


function addElements(parent, child, className, childContent) {
    let childEl = document.createElement(child)
    childEl.className = className
    parent.appendChild(childEl)
    if (childContent) { childEl.innerHTML = childContent }
    else (childEl.innerHTML = "")
    return childEl
}

function getElements(className, content) {
    let el = document.querySelector(className)
    el.innerHTML = content
}