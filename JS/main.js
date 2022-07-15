document.getElementById ("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu)

nav = document.getElementById("nav_container");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){
    nav.style.right = "0px";
    nav.style.display = "block";
    nav.style.transition = "all 300ms";
    background_menu.style.display = "block";

}

function ocultar_menu(){
    nav.style.right = "-275px";
    nav.style.display = "none";
    background_menu.style.display = "none";

}

