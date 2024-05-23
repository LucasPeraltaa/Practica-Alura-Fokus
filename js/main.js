const html = document.querySelector('html')
const btnEnfoque = document.querySelector('.app__card-button--enfoque')
const btnCorto = document.querySelector('.app__card-button--corto')
const btnLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botones = document.querySelectorAll('.app__card-button')
const enfoqueMusic = document.querySelector('#alternar-musica')
const btnTiempo = document.querySelector('#start-pause')
const iconoIniciarPausar = document.querySelector(".app__card-primary-butto-icon");
const txtIniciarPausar = document.querySelector('#start-pause span')
const tiempoEnPantalla = document.querySelector('#timer')

const musica = new Audio('./sonidos/luna-rise-part-one.mp3')
const audioPlay = new Audio('./sonidos/play.wav')
const audioPause = new Audio('./sonidos/pause.mp3')
const audioFinalizado = new Audio('./sonidos/beep.mp3')

let tiempoSeg = 1500
let idIntervalo = null

btnEnfoque.addEventListener('click', ()=>{
    tiempoSeg = 1500
    cambiarContexto('enfoque')
    btnEnfoque.classList.add('active')
})

btnCorto.addEventListener('click', ()=>{
    tiempoSeg = 300
    cambiarContexto('descanso-corto')
    btnCorto.classList.add('active')
})

btnLargo.addEventListener('click', ()=>{
    tiempoSeg = 900
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

    mostrarTiempo()
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
    mostrarTiempo()
}

btnTiempo.addEventListener('click', iniciarPausar)

function iniciarPausar(){
    if(idIntervalo){
        audioPause.play();
        reiniciarCuenta()
        return
    }
    audioPlay.play();
    idIntervalo = setInterval(cuentaRegresiva, 1000)
    txtIniciarPausar.textContent = "Pausar"
    iconoIniciarPausar.setAttribute('src',`/imagenes/pause.png`)
}

function reiniciarCuenta(){
    clearInterval(idIntervalo)
    txtIniciarPausar.textContent = "Comenzar"
    iconoIniciarPausar.setAttribute('src', `/imagenes/play_arrow.png`);
    idIntervalo = null
}

function mostrarTiempo(){
    const tiempo = new Date(tiempoSeg * 1000)
    const conversorTiempo = tiempo.toLocaleTimeString('es-ES',{minute:'2-digit', second:'2-digit'})
    tiempoEnPantalla.innerHTML = `${conversorTiempo}`
}
mostrarTiempo()