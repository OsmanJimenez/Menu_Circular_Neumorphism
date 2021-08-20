let nav = document.querySelector(".nav");
let isOpened = false;

document.querySelector(".open_nav").addEventListener("click", function (){
    if(!isOpened) {
        nav.classList.add("open");
        isOpened = true;
    } else {
        nav.classList.remove("open");
        isOpened = false;
    }
});