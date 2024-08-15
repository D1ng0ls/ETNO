const button = document.querySelectorAll('.buttonCards')
const popup = document.querySelector('.cardOpen')

button.addEventListener('click', () => {
  popup.style.display = 'block';
})

popup.addEventListener('click', event => {
  const clickedElement = event.target.classList[0]

  if (clickedElement == 'cardClose') {
    popup.style.display = 'none';
  }
})