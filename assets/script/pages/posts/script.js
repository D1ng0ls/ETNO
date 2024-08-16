function abreCard(idTipo, idPosi) {
  const id = "card" + idTipo + idPosi;
  const card = document.getElementById(id);
  const corpo = document.getElementById("corpo");
  const btnClose = document.querySelector(`#${id} .fecha-card`)

  card.classList.toggle("cardAberto");
  corpo.classList.toggle("hidden");
  btnClose.classList.toggle("aparece");

  console.log(btnClose)
}