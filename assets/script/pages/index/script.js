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