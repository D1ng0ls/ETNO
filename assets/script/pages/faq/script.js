function abre(id) {
    const resp = document.getElementById("text" + id);
    const quest = document.getElementById("quest" + id);

    const todasAsRespostas = document.querySelectorAll('.text-quest');
    todasAsRespostas.forEach(item => {
        if (item.id !== 'text' + id) {
            item.classList.remove('aberto');
        }
    });

    const todasAsQuestoes = document.querySelectorAll('.title-quest');
    todasAsQuestoes.forEach(item => {
        if (item.id !== 'quest' + id) {
            item.classList.remove('gira');
        }
    });

    resp.classList.toggle("aberto");
    quest.classList.toggle("gira");
}