(function (){
  /* ---- Elements ---- */

  const modalUm = document.querySelector('section[name="modalUm"]')
  const modalTres = document.querySelector('section[name="modalTres"]')
  const modalSeis = document.querySelector('section[name="modalSeis"]')
  const modalDoze = document.querySelector('section[name="modalDoze"]')
  const fecharUm = modalUm.querySelector('button#fecharUm')
  const fecharTres = modalTres.querySelector('button#fecharTres')
  const fecharSeis = modalSeis.querySelector('button#fecharSeis')
  const fecharDoze = modalDoze.querySelector('button#fecharDoze')
  const abrirUm = document.querySelector('button#abrirUm')
  const abrirTres = document.querySelector('button#abrirTres')
  const abrirSeis = document.querySelector('button#abrirSeis')
  const abrirDoze = document.querySelector('button#abrirDoze')

  /* ---- Events ---- */

  function abrirModalUm () {
    abrirUm.addEventListener('click', () => {
      modalUm.classList.add('mostrar')
    })
  }

  function abrirModalTres () {
    abrirTres.addEventListener('click', () => {
      modalTres.classList.add('mostrar')
    })
  }

  function abrirModalSeis () {
    abrirSeis.addEventListener('click', () => {
      modalSeis.classList.add('mostrar')
    })
  }

  function abrirModalDoze () {
    abrirDoze.addEventListener('click', () => {
      modalDoze.classList.add('mostrar')
    })
  }

  function fecharModalUm () {
    fecharUm.addEventListener('click', () => {
      modalUm.classList.remove('mostrar')
    })
  }

  function fecharModalTres () {
    fecharTres.addEventListener('click', () => {
      modalTres.classList.remove('mostrar')
    })
  }

  function fecharModalSeis () {
    fecharSeis.addEventListener('click', () => {
      modalSeis.classList.remove('mostrar')
    })
  }

  function fecharModalDoze () {
    fecharDoze.addEventListener('click', () => {
      modalDoze.classList.remove('mostrar')
    })
  }

  // Start
  abrirModalUm()
  abrirModalTres()
  abrirModalSeis()
  abrirModalDoze()
  fecharModalUm()
  fecharModalTres()
  fecharModalSeis()
  fecharModalDoze()

}())
