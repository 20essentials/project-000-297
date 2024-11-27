document.addEventListener("click", e => {
  if (e.target.matches('.side')) {
    e.target.closest('.pyramid').classList.toggle('pausa')
  }
})