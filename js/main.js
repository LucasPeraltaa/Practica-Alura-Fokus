const html = document.querySelector('html')
const btnEnfoque = document.querySelector('.app__card-button--enfoque')
const btnCorto = document.querySelector('.app__card-button--corto')
const btnLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image')

btnEnfoque.addEventListener('click', ()=>{
    cambiarContexto('enfoque')
})

btnCorto.addEventListener('click', ()=>{
    cambiarContexto('descanso-corto')
})

btnLargo.addEventListener('click', ()=>{
    cambiarContexto('descanso-largo')
})

function cambiarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`./imagenes/${contexto}.png`)
}
