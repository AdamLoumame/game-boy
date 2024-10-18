document.addEventListener("DOMContentLoaded", () => {
    VanillaTilt.init(document.querySelectorAll(".game"), {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": .5,
        reset: false
    })
})
document.querySelectorAll(".game").forEach(game=>{
    game.addEventListener("mouseover",_=>document.querySelector(".info").style.opacity = 1)
})
document.querySelectorAll(".game").forEach(game=>{
    game.addEventListener("mouseout",_=>document.querySelector(".info").style.opacity = .5)
})