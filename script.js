let skillHtml = Number(prompt("uveď svoji úroveň dovedností v jazkyku HTML v rozsahu 0-100"))
let skillCss = Number(prompt("uveď svoji úroveň dovedností v jazyku CSS v rozsahu 0-100"))
let skillJs = Number(prompt("uveď svoji úroveň dovedností v jazyku JavaScript v rozsahu 0-100"))

const updateSkill = (skillHtml,skillCss,skillJs) => {

    if (Html >= 0 && Html <= 100) {
        updateSkill (skillHtml,skillId)
        const progressBar = document.querySelector(`#${skillHtml} .skill__progress`);
        progressBar.style.width = `${value}%`;
    } else {
        alert ("Neplatná hodnota pro dovednost Html!")
        
    }


    if ((Css >= 0 && Css <= 100)) {
        updateSkill (skillCss,skillId )
        const progressBar = document.querySelector(`#${skillCss} .skill__progress`);
        progressBar.style.width = `${value}%`;
    } else {
        alert ("Neplatná hodnota pro dovednost CSS!")
        
    }


    if ((Js >= 0 && Js <= 100)) {
        updateSkill (skillJs,skillId)
        const progressBar = document.querySelector(`#${skillJs} .skill__progress`);
        progressBar.style.width = `${value}%`;
    } else {
        alert ("Neplatná hodnota pro dovednost JavaScript!")
        
    }
}
console.log (updateSkill(skillHtml,skill1)) 
console.log (updateSkill(skillCss,skill2)) 
console.log (updateSkill(skillJs,skill3))