let HTML = prompt("uveď svoji úroveň dovedností v jazkyku HTML v rozsahu 0-100")
let CSS = prompt("uveď svoji úroveň dovedností v jazyku CSS v rozsahu 0-100")
let JavaScript = prompt("uveď svoji úroveň dovedností v jazyku JavaScript v rozsahu 0-100")

const updateSkill = (HTML,CSS,JavaScript) => {

    if ((HTML >= 0 && HTML <= 100)) {
        return true
    } else {
        "Neplatná hodnota pro dovednost HTML!"
    }


    if ((CSS >= 0 && CSS <= 100)) {
        return true
    } else {
        "Neplatná hodnota pro dovednost CSS!"
    }


    if ((JavaScript >= 0 && JavaScript <= 100)) {
        return true
    } else {
        "Neplatná hodnota pro dovednost JavaScript!"
    }

}

updateSkill(HTML,CSS,JavaScript)
