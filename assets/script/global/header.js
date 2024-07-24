//scroll shadow

window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").className = "fixed";
    } else {
        document.getElementById("header").className = "";
    }
}

//hamburguer menu

function burgermenu() {
    document.getElementById('header').classList.toggle("abre-menu");
    document.getElementById('img-header').src = "assets/media/global/x.svg";
}