// muda bg
document.addEventListener('DOMContentLoaded', function() {
    var home = document.getElementById('home');
    if (home) {
        var bgnum = Math.floor(Math.random() * 4);
        console.log(bgnum);

        switch (bgnum) {
            case 0:
                home.style.background = "url('assets/media/pages/index/banner_1.png') no-repeat center";
                break;
            case 1:
                home.style.background = "url('assets/media/pages/index/banner_2.png') no-repeat center";
                break;
            case 2:
                home.style.background = "url('assets/media/pages/index/banner_3.png') no-repeat center";
                break;
            case 3:
                home.style.background = "url('assets/media/pages/index/banner_4.png') no-repeat center";
                break;   
        }
        home.style.backgroundSize = "cover";
    } else {
        console.error("Elemento com ID 'home' não foi encontrado.");
    }
});

// seleciona eventos
function seleciona(id) {
    const resp = document.getElementById("eve" + id);
    const img = document.getElementById("img-event")

    const todasAsRespostas = document.querySelectorAll('.evento');
    todasAsRespostas.forEach(item => {
            item.classList.remove('selecionado');
    });

    if (id == 1) {
        img.src = "assets/media/pages/index/home-eventos-img.png";
    } else {
        img.src = "assets/media/pages/index/banner.png"
    }

    resp.classList.toggle("selecionado");
}