function abreCard(idTipo, idPosi) {
<<<<<<< HEAD
  const id = "card" + idTipo + idPosi;
  const card = document.getElementById(id);
  const corpo = document.getElementById("corpo");
  const btnClose = document.querySelector(`#${id} .fecha-card`)

  card.classList.toggle("cardAberto");
  corpo.classList.toggle("hidden");
  btnClose.classList.toggle("aparece");

  console.log(btnClose)
}
=======
  const card = document.getElementById("card" + idTipo + idPosi);

  card.classList.toggle("cardAberto");
  corpo.classList.toggle("hidden");
}
>>>>>>> 0b594f4b804a5a7d8937daedf3c6cd5fc59d7daa
