const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#iphone-image")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected")
        })

        const button = e.target
        const id = button.getAttribute("id")

        button.querySelector(".color").classList.add("selected")

        image.classList.add("switch")
        image.setAttribute("src", `img/${id}.jpg`)

        setTimeout(() => {
            image.classList.toggle("switch")
        }, 400);
    })
})