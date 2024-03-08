const HtmlLevel  = Number(prompt("Uveď svou úroveň dovedností v jazkyku HTML v rozsahu 0-100"));
const CssLevel = Number(prompt("Uveď svou úroveň dovedností v jazyku CSS v rozsahu 0-100"));
const JsLevel = Number(prompt("Uveď svou úroveň dovedností v jazyku JavaScript v rozsahu 0-100"));

const updateSkill = (skill1) => {

    if (Html >= 0 && Html <= 100) {
        updateSkill = ("skill1", Html);//
        
    } else {
        alert ("Neplatná hodnota pro dovednost Html! Zadejte prosím číslo v rozsahu 0-100.");
    }
    {
    updateSkill(Skill1, value)
    const progressBar = document.querySelector(`#${skill1} .skill__progress`);
    progressBar.style.width = `${value}%`;

    }
}

const updateSkill = (skill2) => {

    if (Css >= 0 && Css <= 100) {
        updateSkill = ("skill2", Css);//
        
    } else {
        alert ("Neplatná hodnota pro dovednost Css! Zadejte prosím číslo v rozsahu 0-100.");
    }
    {
    updateSkill(skill2, value)
    const progressBar = document.querySelector(`#${skill2} .skill__progress`);
    progressBar.style.width = `${value}%`;

    }
}

const updateSkill = (skill3) => {

    if (Js >= 0 && Js <= 100) {
        updateSkill = ("skill3", Js);//
        
    } else {
        alert ("Neplatná hodnota pro dovednost Js! Zadejte prosím číslo v rozsahu 0-100.");
    }
    {
    updateSkill(skill3, value)
    const progressBar = document.querySelector(`#${skill3} .skill__progress`);
    progressBar.style.width = `${value}%`;
        
    }
}
updateSkill(HtmlLevel, "skill1");
updateSkill(CssLevel, "skill2");
updateSkill(JsLevel, "skill3");