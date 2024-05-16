const html = document.querySelector('html')
const btnEnfoque = document.querySelector('.app__card-button--enfoque')
const btnCorto = document.querySelector('.app__card-button--corto')
const btnLargo = document.querySelector('.app__card-button--largo')

btnEnfoque.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'enfoque')
})

btnCorto.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'descanso-corto')
})

btnLargo.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'descanso-largo')
})


