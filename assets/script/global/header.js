fetch('assets/library/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => {
    console.error('Erro ao carregar o cabeçalho:', error);
  });
