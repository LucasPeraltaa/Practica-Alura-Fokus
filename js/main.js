const html = document.querySelector('html')
const btnEnfoque = document.querySelector('.app__card-button--enfoque')
const btnCorto = document.querySelector('.app__card-button--corto')
const btnLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botones = document.querySelectorAll('.app__card-button')
const enfoqueMusic = document.querySelector('#alternar-musica')
const musica = new Audio('./sonidos/luna-rise-part-one.mp3')
const btnTiempo = document.querySelector('#start-pause')

const audioPlay = new Audio('./sonidos/play.wav')
const audioPause = new Audio('./sonidos/pause.mp3')
const audioFinalizado = new Audio('./sonidos/beep.mp3')

let tiempoSeg = 5
let idIntervalo = null

btnEnfoque.addEventListener('click', ()=>{
    cambiarContexto('enfoque')
    btnEnfoque.classList.add('active')
})

btnCorto.addEventListener('click', ()=>{
    cambiarContexto('descanso-corto')
    btnCorto.classList.add('active')
})

btnLargo.addEventListener('click', ()=>{
    cambiarContexto('descanso-largo')
    btnLargo.classList.add('active')
})

musica.loop = true;

enfoqueMusic.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})

function cambiarContexto(contexto){

    botones.forEach(function(contexto){
        contexto.classList.remove('active')
    })

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
    }
}

const cuentaRegresiva = () => {
    if(tiempoSeg <= 0){

        audioFinalizado.play();
        alert('Tiempo final')
        reiniciarCuenta()
        
        return 
    }
    tiempoSeg -= 1
    console.log("temporizador: " + tiempoSeg)
}

btnTiempo.addEventListener('click', iniciarPausar())

function iniciarPausar(){
    if(idIntervalo){
        audioPause.play();
        reiniciarCuenta()
        return
    }
    audioPlay.play();
    idIntervalo = setInterval(cuentaRegresiva, 1000)
}

function reiniciarCuenta(){
    clearInterval(idIntervalo)
    idIntervalo = null
}