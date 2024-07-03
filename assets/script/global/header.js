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
