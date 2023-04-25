document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#header_hr").style.animationPlayState = "running";
    
    sections = ['objectif', 'formation', 'experience', 'competences', 'langues', 'hobbies', 'references']

    sections.forEach(fancy_hr);
    // sections.forEach(fancy_hr_out)
    document.querySelector('#dark_light').addEventListener("click", dark_mode)
})

function fancy_hr(section) {
    document.querySelector(`#${section}`).addEventListener("mouseenter", function () {
        document.querySelector(`#${section} hr`).style.animation = "";
        document.querySelector(`#${section}_container`).style.animation = "";
        document.querySelector(`#${section}_container`).style.display = "block"
        document.querySelector(`#${section} hr`).style.animation = "fancy_hr 3s normal forwards";
        document.querySelector(`#${section}_container`).style.animation = "paragraph_display 2s normal forwards";
    })
}

function fancy_hr_out(section) {
    console.log("leave")
    document.querySelector(`#${section}`).addEventListener("mouseleave", function () {
        // document.querySelector(`#${section} hr`).style.animation = "";
        document.querySelector(`#${section}_container`).style.animation = "";
        // document.querySelector(`#${section} hr`).style.animation = "fancy_hr 3s reverse forwards";
        document.querySelector(`#${section}_container`).style.animation = "paragraph_display 2s reverse forwards";
        document.querySelector(`#${section}_container`).style.display = "none";
    })
}

function dark_mode() {
    liste_dark = Array.from(document.getElementsByClassName('dark'));
    liste_light = Array.from(document.getElementsByClassName('light'));
    liste_dark.forEach(function (dark_body) {
        if (dark_body != undefined) {
            dark_body.classList.add('light');
            dark_body.classList.remove('dark');
        }
    })
    liste_light.forEach(function (light_body) {
        if (light_body != undefined) {
            light_body.classList.add('dark');
            light_body.classList.remove('light');
        }
    })
}