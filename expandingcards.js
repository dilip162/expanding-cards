const penels = document.querySelectorAll(".penel");

penels.forEach(penel => {
    penel.addEventListener("click", () => {
        removeActiveClasses()
        penel.classList.add("active")
    })
})

function removeActiveClasses() {
    penels.forEach(penel => {
        penel.classList.remove("active")
    })
}