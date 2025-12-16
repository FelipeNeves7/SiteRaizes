//MENU DE HAMBURGER
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let body = document.getElementsByTagName("body")
let sombra = document.getElementById("sombra")


function abreFechaMenu() {
    //SE O MENU ESTÁ FECHADO
    if (window.getComputedStyle(menu).right == "-210px") {

        //ABRIR MENU
        menu.style.right = "0"

        //MOSTRAR ICONE X
        iconeX.style.display = "inline"

        //ESCONDER ICONES BARRAS 
        iconeBarras.style.display = "none"

        sombra.style.right = "0"
    } else {
        //FECHAR O MENU
        menu.style.right = "-210px"

        // ESCONDER ICONE X
        iconeX.style.display = "none"

        // MOSTRAR ICONE BARRAS
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"
    }
}

onresize = () => {
    if (window.innerWidth > 768) {
        iconeBarras.style.display = "none"
        iconeX.style.display = "none"
        menu.style.right = "0"
        sombra.style.right = "-101vw"
    } else {
        iconeBarras.style.display = "inline"
        iconeX.style.display = "none"
        menu.style.right = "-210px"
    }
}