(function (){
  /* ---- Elements ---- */

  const body = document.querySelector('body')
  const modal = document.querySelector('section#modal')
  const fechar = modal.querySelector('button#fechar')
  const abrir = document.querySelector('button#abrir')

  /* ---- Events ---- */

  function abrirModal () {
    abrir.addEventListener('click', () => {
      modal.classList.add('mostrar')
      body.classList.add('bloquear')
    })
  }

  function fecharModal () {
    fechar.addEventListener('click', () => {
      modal.classList.remove('mostrar')
      body.classList.remove('bloquear')
    })
  }

  // Start
  abrirModal()
  fecharModal()

}())
