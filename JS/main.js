document.getElementById ("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);
document.getElementById("btn_exit").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav_container");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){
    nav.style.right = "0px";
    nav.style.display = "block";
    background_menu.style.display = "block";
}

function ocultar_menu(){
    nav.style.display = "none";
    background_menu.style.display = "none";
}

console.log("Hello World, Como estais")