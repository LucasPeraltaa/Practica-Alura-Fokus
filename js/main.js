const html = document.querySelector('html')
const btnEnfoque = document.querySelector('.app__card-button--enfoque')
const btnCorto = document.querySelector('.app__card-button--corto')
const btnLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

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
    
    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>`
            
            break;
        case "descanso-corto":
            titulo.innerHTML = `¿que tal un respirito?
            <strong class="app__title-strong">haz una pausa corta!!</strong>`
            break;

        case "descanso-largo":
            titulo.innerHTML = `A volver al mundo real
            <strong class="app__title-strong">haz una pausa larga!!</strong>`
            break;

        default:
            break;
    }
}
