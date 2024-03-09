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
    if (skillHtml >=0 && skillHtml <=100) { 
        updateSkill("skill1", skillHtml)
        } 
        
        else {
        alert("Neplatná hodnota pro dovednost HTML! Zadejte prosím číslo v rozsahu 0-100.")
        }

function updateSkill(skill2, level) {
    let skillId = document.getElementById(skill2)
    let progress = skillId.querySelector(".skill__progress")
    progress.style.width = level + "%"
    let value = skillId.querySelector(".skill__value")
    value.textContent = level + " / 100"
}
    if (skillCss >=0 && skillCss <=100) { 
        updateSkill("skill2", skillCss)
        } 
        
        else {
        alert ("Neplatná hodnota pro dovednost CSS! Zadejte prosím číslo v rozsahu 0-100.")
        }

function updateSkill(skill3, level) {
    let skillId = document.getElementById(skill3)
    let progress = skillId.querySelector(".skill__progress")
    progress.style.width = level + "%"
    let value = skillId.querySelector(".skill__value")
    value.textContent = level + " / 100"
}
    if (skillJs >=0 && skillJs <=100) { 
        updateSkill("skill3", skillJs)
        } 
        
        else {
        alert ("Neplatná hodnota pro dovednost JavaScript! Zadejte prosím číslo v rozsahu 0-100.")
        }


updateSkill("skill1", skillHtml)
updateSkill("skill2", skillCss)
updateSkill("skill3", skillJs)