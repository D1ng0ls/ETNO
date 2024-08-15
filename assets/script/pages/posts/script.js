function abreCard(idTipo, idPosi) {
  const card = document.getElementById("card" + idTipo + idPosi);
  const corpo = document.getElementById("corpo");

  card.classList.toggle("cardAberto");
  corpo.classList.toggle("hidden");

  console.log(card)
}