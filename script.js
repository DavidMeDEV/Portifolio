const control = document.querySelectorAll('.controle')
let currentItem = -1;
const items = document.querySelectorAll('.item')
const projectTitle = document.getElementById("project_Title")
const projectDescription = document.getElementById("project_Description")
const data = {
    projects: ["Arborizar",
        "IFMA - Contra a Dengue",
        "Organizador de Tarefas",
        "Automação Residencial",
        "Redução de consumo energético com code perforation"],
    description: ["projeto ifma mobile", "b", "c", "d", "e"]
}

const numItems = items.length
const numtitles = data.projects.length

control.forEach((control) => {
    control.addEventListener("click", (e) => {
        const isLeft = e.target.classList.contains("esquerda")

        if (isLeft) {
            currentItem--;
        } else {
            currentItem++
        }

        if (currentItem >= numItems) {
            currentItem = 0
        }
        if (currentItem < 0) {
            currentItem = numItems - 1;
        }

        items.forEach((item) => item.classList.remove("current_item"));
        items[currentItem].scrollIntoView({
            block: 'nearest',
            behavior: "smooth",
            inline: "center"
        })
        items[currentItem].classList.add("current_item")
        projectTitle.textContent = `${data.projects[currentItem]}`
        projectDescription.textContent = `${data.description[currentItem]}`
    })
})