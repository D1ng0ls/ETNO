window.onscroll = function() {
    myFunction();
};

function myFunction() {
    const header = document.getElementById("header");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.className = "fixed";
    } else {
        header.className = "";
    }

    if (header.clientHeight > 0) {
        document.getElementById('img-header').src = "assets/media/global/list.svg";
    }
}

// Hamburger menu
function burgermenu() {
    const header = document.getElementById('header');
    const imgHeader = document.getElementById('img-header');

    header.classList.toggle("abre-menu");

    if (imgHeader.getAttribute('src') === "assets/media/global/list.svg") {
        imgHeader.src = "assets/media/global/x.svg";
    } else {
        imgHeader.src = "assets/media/global/list.svg";
    }
}