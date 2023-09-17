
window.addEventListener("scroll", function(){
    var nav=document.getElementById("navbar");
nav.classList.toggle("sticky",window.scrollY > 0);

})






function menuact(){
    var menu =document.getElementById("menu-bar");
    var options =document.getElementById("options");
    var cross=document.getElementById("menu-cross")
 
    if (menu.style.display!=="none" && options.style.display=="none" ) {

    menu.style.display="none"
    options.style.display="block"
    cross.style.display="block"
    }
    else{
        menu.style.display="block"
        options.style.display="none"
        cross.style.display="none"

    }
}
