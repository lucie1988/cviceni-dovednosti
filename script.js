const skillHtml = Number(prompt("Uveď svou úroveň dovedností v jazyku HTML v rozsahu 0-100"))
const skillCss = Number(prompt("Uveď svou úroveň dovedností v jazyku CSS v rozsahu 0-100"))
const skillJs = Number(prompt("Uveď svou úroveň dovedností v jazyku JavaScript v rozsahu 0-100"))

function updateSkill(skill1, level) {
    let skillId = document.getElementById(skill1)
    let progress = skillId.querySelector(".skill__progress")
    progress.style.width = level + "%"
    let value = skillId.querySelector(".skill__value")
    value.textContent = level + " / 100"
}
function updateSkill(skill2, level) {
    let skillId = document.getElementById(skill2)
    let progress = skillId.querySelector(".skill__progress")
    progress.style.width = level + "%"
    let value = skillId.querySelector(".skill__value")
    value.textContent = level + " / 100"
}
function updateSkill(skill3, level) {
    let skillId = document.getElementById(skill3)
    let progress = skillId.querySelector(".skill__progress")
    progress.style.width = level + "%"
    let value = skillId.querySelector(".skill__value")
    value.textContent = level + " / 100"
}

updateSkill("skill1", skillHtml)
updateSkill("skill2", skillCss)
updateSkill("skill3", skillJs)