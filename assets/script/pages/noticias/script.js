function buscarTexto() {
  var termoBusca = document.querySelector('.search-bar input').value.toLowerCase();
  var noticias = document.querySelectorAll('.news-container a');
  var achou = false;

  noticias.forEach(function(noticia) {
    var textoNoticia = noticia.querySelector('.news-content').innerText.toLowerCase();

    if (textoNoticia.includes(termoBusca)) {
      noticia.style.display = 'flex';
      achou = true;
    } else {
      noticia.style.display = 'none';
    }
  });

  var mensagem = document.getElementById('nError');
  
  if (!achou) {
    mensagem.style.display = "block";
  } else {
    mensagem.style.display = "none";
  }
}