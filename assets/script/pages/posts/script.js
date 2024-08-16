function abreCard(idTipo, idPosi) {
  const card = document.getElementById("card" + idTipo + idPosi);

  card.classList.toggle("cardAberto");
  corpo.classList.toggle("hidden");
}