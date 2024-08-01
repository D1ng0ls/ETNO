var itens = 5;
var conta = 0;
var lojas = document.querySelectorAll(".blocos");

for(var x = 0; x < itens; x++) {
    lojas[x].style.display = "block";
}

document.querySelector("#right-arrow").addEventListener("click", function() {

    var visiveis = document.querySelectorAll(".blocos");
    if(conta < visiveis.length){
        if(visiveis[conta].style.display == "block") {
            conta++;
        }
    }

    var limite = conta + itens > lojas.length - 1 ? lojas.length : conta + itens;

    for(var x = conta; x < limite; x++) {
        lojas[x].style.display = "block";
    }

    for(var x = 0; x < limite-itens; x++) {
        lojas[x].style.display = "none";
    }
   
    if(lojas.length - conta < itens) {
        document.querySelector("#right-arrow").outerHTML = '';
    }
});

document.querySelector("#left-arrow").addEventListener("click", function() {

    var visiveis = document.querySelectorAll(".blocos");
    if(conta < visiveis.length && conta > 0){
        if(visiveis[conta].style.display == "block") {
            conta--;
        }
    }

    var limite = conta + itens > lojas.length - 1 ? lojas.length : conta + itens;

    console.log(limite)
    
    for(var x = limite-1; x < limite; x--) {
        lojas[x].style.display = "block";
    }

    for(var x = limite; x < itens; x--) {
        lojas[x].style.display = "none";
    }
   
    if(lojas.length - conta < itens) {
        document.querySelector("#right-arrow").outerHTML = '';
    }
});