const seleccionarAtaque=document.getElementById("seleccionar_ataque")
const reiniciar= document.getElementById("boton_reiniciar")
const botonMascota = document.getElementById("boton_mascota")
const boton_ia = document.getElementById("boton_ia")
const seleccionarMascota2=document.getElementById("seleccionar_mascota")
const spamMascotaJugador= document.getElementById("mascota_jugador")
const mascota_enemiga = document.getElementById("mascota_enemigo")

//Crear mensaje
const mensajes=document.getElementById("resultado")
const ataqueDelJugador=document.getElementById("ataqueDelJugador")
const ataqueDelEnemigo=document.getElementById("ataqueDelEnemigo")

const cotenedor_tarjetas = document.getElementById("contenedor_tarjetas")
const contenedor_ataques = document.getElementById("contenedor_ataques")
//Mensaje Final
const spamVidasJugador = document.getElementById("vidas_jugador")
const spamVidasEnemiga = document.getElementById("vidas_enemigo")
const mascota_del_jugador = document.getElementById("mascota_del_jugador")
const mascota_del_enemigo=document.getElementById("mascota_del_enemigo")

const sectionVerMapa=document.getElementById("ver_mapa") 
const mapa=document.getElementById("mapa")

let ataqueImagen
let ataqueEnemigoImagen
let jugadorId
let enemigoId
let mokepones= []
let mokepones_enemigo=[]
let mokeponesEnemigos =[]
let mokeponEnemigo=null
let mokeponEnemigo2
let ataqueJugador
let ataqueEnemigo
let vidasJugador=3
let vidasEnemigas=3
let opcion_de_mokepones
let ataquesMokepon
let ataques_mokepon_enemigo=[]
let mascotaSeleccionada1
let mascotaSeleccionada2
let mascotaSeleccionada3
let mascotaSeleccionada4
let mascotaSeleccionada5
let mascotaSeleccionada6 
let mascotaSeleccionada7          
let mascotaSeleccionada8
let mascotaSeleccionada9
let mascotaJugador
let mascotaJugadorObjeto
let botonFuego
let botonAgua
let botonTierra
let nombreAtaque
let nombreAtaqueEnemigo
let ataquesImg2
let botones =[]
let mensaje
let ataqueEnemigoAleatorio
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=3
let victoriasEnemigo=3
let todos_los_ataques =[]
let todas_las_mascotas_seleccionada=[]

let lienzo=mapa.getContext("2d")
let intervalo
let mapaBackground =new Image()
mapaBackground.src="./imagenes/map.png"
let alturaQueBuscamos
let anchoDelMapa= window.innerWidth-20
const anchoMaximoDelMapa=550

if(anchoDelMapa>anchoMaximoDelMapa){
    anchoDelMapa=anchoMaximoDelMapa-20
}

alturaQueBuscamos = anchoDelMapa * 600/800

mapa.width=anchoDelMapa
mapa.height=alturaQueBuscamos

class Mokepon{
    constructor(nombre,foto,vida,fotoMapa,id=null){
        this.id=id
        this.nombre=nombre
        this.foto= foto
        this.vida=vida
        this.ataques=[]
        this.ancho=40
        this.alto=40
        this.x=aleatorio(0,mapa.width-this.ancho)
        this.y=aleatorio(0,mapa.height-this.alto)
        this.mapaFoto=new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX=0
        this.velocidadY=0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}
let squirtle = new Mokepon("Squirtle","./imagenes/Squirtle_Stand02.jpg",3,"./imagenes/Squirtle_head.png") 
let bulbasaur = new Mokepon("Bulbasaur","./imagenes/Bulbasaur_Pose01.jpg",3,"./imagenes/Bulbasaur_head.png")
let charmander = new Mokepon("Charmander","./imagenes/Charmander_Sit01.jpg",3,"./imagenes/Charmander_head.png")

let totodile = new Mokepon("Totodile","./imagenes/totodile.jpg",3,"./imagenes/Totodile_head.png") 
let chikorita = new Mokepon("Chikorita","./imagenes/chikorita.jpg",3,"./imagenes/Chikorita_head.png")
let cyndaquil = new Mokepon("Cyndaquil","./imagenes/cyndaquil.jpg",3,"./imagenes/Cyndaquil_head.png")

let mudkip = new Mokepon("Mudkip","./imagenes/mudkip.jpg",3,"./imagenes/Mudkip_head.png") 
let treecko = new Mokepon("Treecko","./imagenes/treecko.jpg",3,"./imagenes/Treecko_head.png")
let torchic = new Mokepon("Torchic","./imagenes/torchick.jpg",3,"./imagenes/Torchic_head.png")

let rattata = new Mokepon("Rattata","./imagenes/rattata.jpg",3,"./imagenes/Rattata.png",180,150)
let pidgey = new Mokepon("Pidgey","./imagenes/pidgey.jpg",3,"./imagenes/Pidgey.png",260,455)
let caterpie = new Mokepon("Caterpie","./imagenes/caterpie.jpg",3,"./imagenes/Caterpie.png",820,540)
let mewtwo = new Mokepon("Mewtwo","./imagenes/mewtwo.jpg",3,"./imagenes/Mewtwo.png",866,240)

squirtle.ataques.push(
    {nombre:"Cabezazo", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Pistola Agua", id:"boton_agua",tipo:"Agua",tipo_img:"./imagenes/log/agua.png"},
    {nombre:"Danza Lluvia", id:"boton_agua",tipo:"Agua",tipo_img:"./imagenes/log/agua.png"},
    {nombre:"Mordisco", id:"boton_siniestro",tipo:"Siniestro",tipo_img:"./imagenes/log/siniestro.png"},
)  
bulbasaur.ataques.push(
    {nombre:"Derribo", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Látigo de Cepa", id:"boton_planta",tipo:"Planta",tipo_img:"./imagenes/log/planta.png"},
    {nombre:"Hoja Afilada", id:"boton_planta",tipo:"Planta",tipo_img:"./imagenes/log/planta.png"},
    {nombre:"Polvo Veneno", id:"boton_veneno",tipo:"Veneno",tipo_img:"./imagenes/log/veneno.png"},
)
charmander.ataques.push(
    {nombre:"Arañazo", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Ascuas", id:"boton_fuego",tipo:"Fuego",tipo_img:"./imagenes/log/fuego.png"},
    {nombre:"Lanzallamas", id:"boton_fuego",tipo:"Fuego",tipo_img:"./imagenes/log/fuego.png"},
    {nombre:"Furia Dragon", id:"boton_dragon",tipo:"Dragon",tipo_img:"./imagenes/log/dragon.png"},
)

totodile.ataques.push(
    {nombre:"Furia", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Pistola Agua", id:"boton_agua",tipo:"Agua",tipo_img:"./imagenes/log/agua.png"},
    {nombre:"Acua Cola", id:"boton_agua",tipo:"Agua",tipo_img:"./imagenes/log/agua.png"},
    {nombre:"Colmillo Hielo", id:"boton_hielo",tipo:"Hielo",tipo_img:"./imagenes/log/hielo.png"},
)
chikorita.ataques.push(
    {nombre:"Placaje", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Hoja Afilada", id:"boton_planta",tipo:"Planta",tipo_img:"./imagenes/log/planta.png"},
    {nombre:"Rayo Solar", id:"boton_planta",tipo:"Planta",tipo_img:"./imagenes/log/planta.png"},
    {nombre:"Polvo Veneno", id:"boton_veneno",tipo:"Veneno",tipo_img:"./imagenes/log/veneno.png"},
)
cyndaquil.ataques.push(
    {nombre:"Ataque Rapido", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Ascuas", id:"boton_fuego",tipo:"Fuego",tipo_img:"./imagenes/log/fuego.png"},
    {nombre:"Rueda Fuego", id:"boton_fuego",tipo:"Fuego",tipo_img:"./imagenes/log/fuego.png"},
    {nombre:"Desenrollar", id:"boton_roca",tipo:"Roca",tipo_img:"./imagenes/log/roca.png"},
)

mudkip.ataques.push(
    {nombre:"Placaje", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Pistola Agua", id:"boton_agua",tipo:"Agua",tipo_img:"./imagenes/log/agua.png"},
    {nombre:"Bofeton Lodo", id:"boton_tierra",tipo:"Tierra",tipo_img:"./imagenes/log/tierra.png"},
    {nombre:"Lanza Roca", id:"boton_roca",tipo:"Roca",tipo_img:"./imagenes/log/roca.png"},
)
treecko.ataques.push(
    {nombre:"Destructor", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Absorber", id:"boton_planta",tipo:"Planta",tipo_img:"./imagenes/log/planta.png"},
    {nombre:"Gigadrenado", id:"boton_planta",tipo:"Planta",tipo_img:"./imagenes/log/planta.png"},
    {nombre:"Detencción", id:"boton_lucha",tipo:"Lucha",tipo_img:"./imagenes/log/lucha.png"},
)
torchic.ataques.push(
        {nombre:"Arañazo", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
        {nombre:"Ascuas", id:"boton_fuego",tipo:"Fuego",tipo_img:"./imagenes/log/fuego.png"},
        {nombre:"Pirotecnia", id:"boton_fuego",tipo:"Fuego",tipo_img:"./imagenes/log/fuego.png"},
        {nombre:"Picotazo", id:"boton_volador",tipo:"Volador",tipo_img:"./imagenes/log/volador.png"},
    )
    // const torchic_ataques =[
    //     {nombre:"Arañazo", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    //     {nombre:"Ascuas", id:"boton_fuego",tipo:"Fuego",tipo_img:"./imagenes/log/fuego.png"},
    //     {nombre:"Picotazo", id:"boton_volador",tipo:"Volador",tipo_img:"./imagenes/log/volador.png"},
    //     {nombre:"Lanzallamas", id:"boton_fuego",tipo:"Fuego",tipo_img:"./imagenes/log/fuego.png"},    
    // ]
    // torchic.ataques.push(...torchic_ataques)
mokepones.push(squirtle,bulbasaur,charmander,totodile,chikorita,cyndaquil,mudkip,treecko,torchic)

rattata.ataques.push(
    {nombre:"Placaje", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Ataque Rapido", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Mordisco", id:"boton_siniestro",tipo:"Siniestro",tipo_img:"./imagenes/log/siniestro.png"},
    {nombre:"Triturar", id:"boton_siniestro",tipo:"Siniestro",tipo_img:"./imagenes/log/siniestro.png"},
)
pidgey.ataques.push(
    {nombre:"Placaje", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Ataque Arena", id:"boton_tierra",tipo:"Tierra",tipo_img:"./imagenes/log/tierra.png"},
    {nombre:"Tornado", id:"boton_volador",tipo:"Volador",tipo_img:"./imagenes/log/volador.png"},
    {nombre:"Remolino", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
)
caterpie.ataques.push(
    {nombre:"Placaje", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Ataque Rapido", id:"boton_normal",tipo:"Normal",tipo_img:"./imagenes/log/normal.png"},
    {nombre:"Disparo Demora", id:"boton_bicho",tipo:"Bicho",tipo_img:"./imagenes/log/bicho.png"},
    {nombre:"Picadura", id:"boton_bicho",tipo:"Bicho",tipo_img:"./imagenes/log/bicho.png"},
)
mewtwo.ataques.push(
    {nombre:"Neblina", id:"boton_hielo",tipo:"Hielo",tipo_img:"./imagenes/log/hielo.png"},
    {nombre:"Psiquico", id:"boton_psiquico",tipo:"Psiquico",tipo_img:"./imagenes/log/psiquico.png"},
    {nombre:"Onda Mental", id:"boton_psiquico",tipo:"Psiquico",tipo_img:"./imagenes/log/psiquico.png"},
    {nombre:"Premonicion", id:"boton_psiquico",tipo:"Psiquico",tipo_img:"./imagenes/log/psiquico.png"},
)
mokepones_enemigo.push(rattata,pidgey,caterpie,mewtwo)

function iniciarJuego(){
    seleccionarAtaque.style.display="none"
    reiniciar.style.display="none"
    sectionVerMapa.style.display="none"
     /*mokepones_todos.forEach((mokepon)=>{*/
     opcion_de_mokepones =   
     `
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <input type="radio" name="mascota" id=${mokepones[0].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[0].nombre}>
                    <p>${mokepones[0].nombre}</p>
                    <img src=${mokepones[0].foto} class="img-pokemon" alt=${mokepones[0].nombre}>
                </label>
                <input type="radio" name="mascota" id=${mokepones[1].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[1].nombre}>
                    <p>${mokepones[1].nombre}</p>
                    <img src=${mokepones[1].foto} class="img-pokemon" alt=${mokepones[1].nombre}>
                </label>
                <input type="radio" name="mascota" id=${mokepones[2].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[2].nombre}>
                    <p>${mokepones[2].nombre}</p>
                    <img src=${mokepones[2].foto} class="img-pokemon" alt=${mokepones[2].nombre}>
                </label>
            </div>
            <div class="carousel-item">
                <input type="radio" name="mascota" id=${mokepones[3].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[3].nombre}>
                    <p>${mokepones[3].nombre}</p>
                    <img src=${mokepones[3].foto} class="img-pokemon" alt=${mokepones[3].nombre}>
                </label>
                <input type="radio" name="mascota" id=${mokepones[4].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[4].nombre}>
                    <p>${mokepones[4].nombre}</p>
                    <img src=${mokepones[4].foto} class="img-pokemon" alt=${mokepones[4].nombre}>
                </label>
                <input type="radio" name="mascota" id=${mokepones[5].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[5].nombre}>
                    <p>${mokepones[5].nombre}</p>
                    <img src=${mokepones[5].foto} class="img-pokemon" alt=${mokepones[5].nombre}>
                </label>
            </div>   
            <div class="carousel-item">
                <input type="radio" name="mascota" id=${mokepones[6].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[6].nombre}>
                    <p>${mokepones[6].nombre}</p>
                    <img src=${mokepones[6].foto} class="img-pokemon" alt=${mokepones[6].nombre}>
                </label>
                <input type="radio" name="mascota" id=${mokepones[7].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[7].nombre}>
                    <p>${mokepones[7].nombre}</p>
                    <img src=${mokepones[7].foto} class="img-pokemon" alt=${mokepones[7].nombre}>
                </label>
                <input type="radio" name="mascota" id=${mokepones[8].nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepones[8].nombre}>
                    <p>${mokepones[8].nombre}</p>
                    <img src=${mokepones[8].foto} class="img-pokemon" alt=${mokepones[8].nombre}>
                </label>
            </div>
        </div>
       
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        `
    
        cotenedor_tarjetas.innerHTML+=opcion_de_mokepones
           
        mascotaSeleccionada1= document.getElementById("Squirtle")
        mascotaSeleccionada2= document.getElementById("Bulbasaur")
        mascotaSeleccionada3= document.getElementById("Charmander")
        mascotaSeleccionada4= document.getElementById("Totodile")
        mascotaSeleccionada5= document.getElementById("Chikorita")
        mascotaSeleccionada6= document.getElementById("Cyndaquil")           
        mascotaSeleccionada7= document.getElementById("Mudkip")
        mascotaSeleccionada8= document.getElementById("Treecko")
        mascotaSeleccionada9= document.getElementById("Torchic")

        todas_las_mascotas_seleccionada.push(mascotaSeleccionada1)
        todas_las_mascotas_seleccionada.push(mascotaSeleccionada2)
        todas_las_mascotas_seleccionada.push(mascotaSeleccionada3)
        todas_las_mascotas_seleccionada.push(mascotaSeleccionada4)
        todas_las_mascotas_seleccionada.push(mascotaSeleccionada5)
        todas_las_mascotas_seleccionada.push(mascotaSeleccionada6)
        todas_las_mascotas_seleccionada.push(mascotaSeleccionada7)
        todas_las_mascotas_seleccionada.push(mascotaSeleccionada8)
        todas_las_mascotas_seleccionada.push(mascotaSeleccionada9)
    
    reiniciar.addEventListener("click", reiniciarJuego)
    botonMascota.addEventListener("click",seleccionarMascotaJugador)
    boton_ia.addEventListener("click",seleccionarMascotaJugadorConIA)
    unirseAlJuego()
}
function unirseAlJuego(){
    //Una vez abierto el sevidor, pedimos unirnos a ella esando el URL "http://localhost:8080/unirse" y recibimos la ID unica
    //JugadorId va a ser el nuemero de dicha ID aleatoria
    fetch("http://192.168.1.38:8080/unirse")
        .then(function(res){
            if(res.ok){
                res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                    jugadorId = respuesta //JugarorId = ID Random
                })
            }
        })
}

function seleccionarMascotaJugador(){ 
    for (let i = 0; i < todas_las_mascotas_seleccionada.length; i++) {
        if(todas_las_mascotas_seleccionada[i].checked){
            spamMascotaJugador.innerHTML = todas_las_mascotas_seleccionada[i].id
            mascotaJugador = todas_las_mascotas_seleccionada[i].id
            let mascota = extraerMascotas(mascotaJugador)
            mascota_del_jugador.innerHTML =  mascota 
            aparecerydesaparecer()
            extraerAtaques(mascotaJugador)
            seleccionarMokepon(mascotaJugador)
        }
    }
}
function seleccionarMascotaJugadorConIA(){ 
    for (let i = 0; i < todas_las_mascotas_seleccionada.length; i++) {
        if(todas_las_mascotas_seleccionada[i].checked){
            spamMascotaJugador.innerHTML = todas_las_mascotas_seleccionada[i].id
            mascotaJugador = todas_las_mascotas_seleccionada[i].id
            let mascota = extraerMascotas(mascotaJugador)
            mascota_del_jugador.innerHTML =  mascota 
            aparecerydesaparecer2()
            extraerAtaques(mascotaJugador)
            seleccionarMokepon(mascotaJugador)
            //seleccionarMascotaEnemiga() 
        }
    }
}
function aparecerydesaparecer(){
    seleccionarMascota2.style.display="none"
    sectionVerMapa.style.display="flex"
    IniciarMapa()
}
function aparecerydesaparecer2(){
    seleccionarMascota2.style.display="none"
    sectionVerMapa.style.display="flex"
    IniciarMapa2()
}
function extraerMascotas(mascotaJugador){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador===mokepones[i].nombre){
            mascota = 
           `<label class="mascota_del_jugador" for=${mokepones[i].nombre}>
                <img class="img_mascotas" src=${mokepones[i].foto} alt=${mokepones[i].nombre}>
            </label>`
        }
    }
    return mascota
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador===mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = 
                //       id del 1er Ataque        clase            nombre del ataque  
                //<button id=${ataque.id} class="boton_de_ataque">${ataque.nombre}</button>            
                `
                <button class="boton_de_ataque" name="${ataque.nombre}" id="${ataque.id}">
                    <p class="p_ataque">${ataque.nombre}</p>
                    <label for="tipo">
                        <img class="tipo_img" src="${ataque.tipo_img}" alt="tipo">
                    </label>
                </button>
                ` 
        contenedor_ataques.innerHTML+= ataquesMokepon
    })
    botones=document.querySelectorAll(".boton_de_ataque")
}
//y lo trasnforma en JSON.stringify (tipo texto) para poder leerlo 
//a en esta peticion fetch no le agregamos un .then por que no espera una respusta, solamente es enviar datos al servidor o backend
function seleccionarMokepon(mascotaJugador){//Pedimos unirnos a otro servidor /mokepon con una vairable "JugadorId" 
    fetch(`http://192.168.1.38:8080/mokepon/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            mokepon:mascotaJugador //Nombre de la mascota seleccionada
        })
    })

}
///---------------------------------------------------------------------------------------------------------------------->
function seleccionarMascotaEnemiga(enemigo){
    mascota_enemiga.innerHTML = enemigo.nombre
    ataques_mokepon_enemigo=enemigo.ataques 
    let mascota =`<label class="mascota_del_jugador" for=${enemigo.nombre}>
                    <img src=${enemigo.foto} alt=${enemigo.nombre}>
                </label>`
    mascota_del_enemigo.innerHTML=  mascota 
    //quienAtacaPrimero()
    secuenciaAtaque()

    /*let mascota_aleatoria = aleatorio(0, mokepones_enemigo.length-1)
    mascota_enemiga.innerHTML = mokepones_enemigo[mascota_aleatoria].nombre
    ataques_mokepon_enemigo=mokepones_enemigo[mascota_aleatoria].ataques 
    let mascota =`<label class="mascota_del_jugador" for=${mokepones_enemigo[mascota_aleatoria].nombre}>
                    <img src=${mokepones_enemigo[mascota_aleatoria].foto} alt=${mokepones_enemigo[mascota_aleatoria].nombre}>
                </label>`
    mascota_del_enemigo.innerHTML=  mascota 
    secuenciaAtaque()*/

    //mascota_enemiga.innerHTML = mokepones_enemigo[mascota_aleatoria].nombre
    /*if(mascota_aleatoria==1){
        mascota_enemiga.innerHTML="Vaporeon"
        }else if(mascota_aleatoria==2){
            mascota_enemiga.innerHTML="Machap"
        }else if(mascota_aleatoria==3){
            mascota_enemiga.innerHTML="Alakesad"
        }else{alert ("ERROR")
        }*/
}
function seleccionarMascotaEnemiga2(enemigo){
    mascota_enemiga.innerHTML = enemigo.nombre
    mokeponEnemigo2=enemigo.nombre
    ataques_mokepon_enemigo=enemigo.ataques 
    let mascota =`<label class="mascota_del_jugador" for=${enemigo.nombre}>
                    <img src=${enemigo.foto} alt=${enemigo.nombre}>
                </label>`
    mascota_del_enemigo.innerHTML=  mascota 
    secuenciaAtaque2()
}
function quienAtacaPrimero(){
    let primero = aleatorio(0,1)
    console.log(primero)
    if(primero==0){
        mensajes.innerHTML = ("Te toca atacar primero")
        secuenciaAtaque()
    }else if(primero==1){
        mensajes.innerHTML = ("Te tocó atacar segundo")
    }
}
function coloresPrendidos(botones){
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.color="white"
        botones[i].style.border="2px solid white"
        botones[i].disabled=false
    }
}
function coloresApagados(botones){
    for (let i = 0; i < botones.length; i++) {
        // botones[i].style.background = "#112f58"
        botones[i].style.color="rgba(255, 255, 255, 0.5)"
        botones[i].style.border="2px solid black"
        botones[i].disabled=true
    }
}
function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            //e.target.textContent    <----Contenido del "boton" que antes usaba
            if(boton.name === "Ascuas"||boton.name === "Lanzallamas"||boton.name === "Rueda Fuego"||boton.name === "Pirotecnia"){
                ataqueJugador="Fuego"
                ataqueImagen="./imagenes/log/fuego.png"
                nombreAtaque=boton.name
                coloresApagados(botones)
            }else if(boton.name === "Pistola Agua"||boton.name === "Acua Cola"||boton.name === "Burbuja"||boton.name === "Danza Lluvia"){
                ataqueJugador="Agua"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/agua.png"
                coloresApagados(botones)
            }else if (boton.name ==="Látigo de Cepa" || boton.name==="Hoja Afilada"|| boton.name==="Rayo Solar"||boton.name==="Absorber"||boton.name==="Gigadrenado"){
                ataqueJugador="Planta"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/planta.png"
                coloresApagados(botones)               
            }else if (boton.name ==="Bofeton Lodo"){
                ataqueJugador="Tierra"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/tierra.png"
                coloresApagados(botones)
            }else if (boton.name ==="Lanza Roca"||boton.name ==="Desenrollar"){
                ataqueJugador="Roca"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/roca.png"
                coloresApagados(botones)
            }else if (boton.name ==="Detencción"){
                ataqueJugador="Lucha"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/lucha.png"
                coloresApagados(botones)
            }else if (boton.name ==="Picotazo"||boton.name==="Tornado"){
                ataqueJugador="Volador"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/volador.png"
                coloresApagados(botones)
            }else if (boton.name ==="Polvo Veneno"){
                ataqueJugador="Veneno"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/veneno.png"
                coloresApagados(botones)
            }else if (boton.name ==="Mordisco"||boton.name==="Triturar"){
                ataqueJugador="Siniestro"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/siniestro.png"
                coloresApagados(botones)
            }else if (boton.name ==="Disparo Demora"||boton.name==="Picadura"){
                ataqueJugador="Bicho"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/bicho.png"
                coloresApagados(botones)
            }else if (boton.name ==="Psiquico"||boton.name==="Premonicion"||boton.name==="Onda Mental"){
                ataqueJugador="Psiquico"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/psiquico.png"
                coloresApagados(botones)
            }else if (boton.name ==="Colmillo Hielo"||boton.name ==="Neblina"){
                ataqueJugador="Hielo"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/hielo.png"
                coloresApagados(botones)
            }else if(boton.name ==="Furia Dragon"){
                ataqueJugador="Dragon"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/dragon.png"
                coloresApagados(botones)
            }else {
                ataqueJugador="Normal"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/normal.png"
                coloresApagados(botones)
            }
            enviarAtaques()
            //ataqueAleatorioEnemigo()
        })
    })
}
function secuenciaAtaque2(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            //e.target.textContent    <----Contenido del "boton" que antes usaba
            if(boton.name === "Ascuas"||boton.name === "Lanzallamas"||boton.name === "Rueda Fuego"||boton.name === "Pirotecnia"){
                ataqueJugador="Fuego"
                ataqueImagen="./imagenes/log/fuego.png"
                nombreAtaque=boton.name
                coloresApagados(botones)
            }else if(boton.name === "Pistola Agua"||boton.name === "Acua Cola"||boton.name === "Burbuja"||boton.name === "Danza Lluvia"){
                ataqueJugador="Agua"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/agua.png"
                coloresApagados(botones)
            }else if (boton.name ==="Látigo de Cepa" || boton.name==="Hoja Afilada"|| boton.name==="Rayo Solar"||boton.name==="Absorber"||boton.name==="Gigadrenado"){
                ataqueJugador="Planta"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/planta.png"
                coloresApagados(botones)               
            }else if (boton.name ==="Bofeton Lodo"){
                ataqueJugador="Tierra"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/tierra.png"
                coloresApagados(botones)
            }else if (boton.name ==="Lanza Roca"||boton.name ==="Desenrollar"){
                ataqueJugador="Roca"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/roca.png"
                coloresApagados(botones)
            }else if (boton.name ==="Detencción"){
                ataqueJugador="Lucha"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/lucha.png"
                coloresApagados(botones)
            }else if (boton.name ==="Picotazo"||boton.name==="Tornado"){
                ataqueJugador="Volador"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/volador.png"
                coloresApagados(botones)
            }else if (boton.name ==="Polvo Veneno"){
                ataqueJugador="Veneno"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/veneno.png"
                coloresApagados(botones)
            }else if (boton.name ==="Mordisco"||boton.name==="Triturar"){
                ataqueJugador="Siniestro"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/siniestro.png"
                coloresApagados(botones)
            }else if (boton.name ==="Disparo Demora"||boton.name==="Picadura"){
                ataqueJugador="Bicho"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/bicho.png"
                coloresApagados(botones)
            }else if (boton.name ==="Psiquico"||boton.name==="Premonicion"||boton.name==="Onda Mental"){
                ataqueJugador="Psiquico"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/psiquico.png"
                coloresApagados(botones)
            }else if (boton.name ==="Colmillo Hielo"||boton.name ==="Neblina"){
                ataqueJugador="Hielo"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/hielo.png"
                coloresApagados(botones)
            }else if(boton.name ==="Furia Dragon"){
                ataqueJugador="Dragon"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/dragon.png"
                coloresApagados(botones)
            }else {
                ataqueJugador="Normal"
                nombreAtaque=boton.name
                ataqueImagen="./imagenes/log/normal.png"
                coloresApagados(botones)
            }
            ataqueAleatorioEnemigo()
        })
    })
}
function enviarAtaques(){
    fetch(`http://192.168.1.38:8080/mokepon/${jugadorId}/ataques`,{ //SEGUN MI ID ENVIO MIS ATAQUES
        method:"post",
        headers:{"Content-Type":"application/json"
        },
        body:JSON.stringify({
            ataques: ataqueJugador, // Fuego , Agua , Planta o Tierra, etc...
            nombre_atakes: nombreAtaque,
            ataquesImg:ataqueImagen
        }) 
    })
    intervalo=setInterval(obtenerAtaques,50)
    //obtenerAtaques()
}
function obtenerAtaques(){
    fetch(`http://192.168.1.38:8080/mokepon/${enemigoId}/ataques`) //SEGUN EL ID DEL ENMIGO RECIBO ATAQUES
    .then(function(res){
        if(res.ok){
            res.json()
                .then(function({ataques,nombre_atakes,ataquesImg}){
                    //if(ataques.length===4){
                        ataqueEnemigo=ataques
                        nombreAtaqueEnemigo=nombre_atakes
                        ataquesImg2=ataquesImg
                        if(ataqueEnemigo!= undefined){

                            definicion(ataqueEnemigo)
                        }
                    //}
                })
        }
    })
}
function ataqueAleatorioEnemigo() {
    console.log("ataques enemigos "+ataques_mokepon_enemigo);
    //ataqueEnemigoAleatorio= aleatorio(0,ataques_mokepon_enemigo.length-1)
    let cualquiera = aleatorio(0, ataques_mokepon_enemigo.length-1)
    if(ataques_mokepon_enemigo[cualquiera].nombre === "Ascuas"||ataques_mokepon_enemigo[cualquiera].nombre === "Lanzallamas"||ataques_mokepon_enemigo[cualquiera].nombre === "Rueda Fuego"){
        ataqueEnemigo="Fuego"
        ataqueEnemigoImagen="./imagenes/log/fuego.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if(ataques_mokepon_enemigo[cualquiera].nombre === "Pistola Agua"||ataques_mokepon_enemigo[cualquiera].nombre === "Acua Cola"||ataques_mokepon_enemigo[cualquiera].nombre === "Burbuja"||ataques_mokepon_enemigo[cualquiera].nombre === "Danza Lluvia"){
        ataqueEnemigo="Agua"
        ataqueEnemigoImagen="./imagenes/log/agua.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Látigo de Cepa" || ataques_mokepon_enemigo[cualquiera].nombre==="Hoja Afilada"|| ataques_mokepon_enemigo[cualquiera].nombre==="Rayo Solar"||ataques_mokepon_enemigo[cualquiera].nombre==="Absorber"||ataques_mokepon_enemigo[cualquiera].nombre==="Gigadrenado"){
        ataqueEnemigo="Planta"
        ataqueEnemigoImagen="./imagenes/log/planta.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if(ataques_mokepon_enemigo[cualquiera].nombre ==="Bofeton Lodo"||ataques_mokepon_enemigo[cualquiera].nombre ==="Ataque Arena"){
        ataqueEnemigo="Tierra"
        ataqueEnemigoImagen="./imagenes/log/tierra.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Lanza Roca"){
        ataqueEnemigo="Roca"
        ataqueEnemigoImagen="./imagenes/log/roca.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Detencción"){
        ataqueEnemigo="Lucha"
        ataqueEnemigoImagen="./imagenes/log/lucha.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Picotazo"||ataques_mokepon_enemigo[cualquiera].nombre==="Tornado"){
        ataqueEnemigo="Volador"
        ataqueEnemigoImagen="./imagenes/log/volador.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Polvo Veneno"){
        ataqueEnemigo="Veneno"
        ataqueEnemigoImagen="./imagenes/log/veneno.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Mordisco"||ataques_mokepon_enemigo[cualquiera].nombre==="Triturar"){
        ataqueEnemigo="Siniestro"
        ataqueEnemigoImagen="./imagenes/log/siniestro.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Disparo Demora"||ataques_mokepon_enemigo[cualquiera].nombre==="Picadura"){
        ataqueEnemigo="Bicho"
        ataqueEnemigoImagen="./imagenes/log/bicho.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Psiquico"||ataques_mokepon_enemigo[cualquiera].nombre==="Premonicion"||ataques_mokepon_enemigo[cualquiera].nombre==="Onda Mental"){
        ataqueEnemigo="Psiquico"
        ataqueEnemigoImagen="./imagenes/log/psiquico.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else if (ataques_mokepon_enemigo[cualquiera].nombre ==="Colmillo Hielo"||ataques_mokepon_enemigo[cualquiera].nombre ==="Neblina"){
        ataqueEnemigo="Hielo"
        ataqueEnemigoImagen="./imagenes/log/hielo.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }else {
        ataqueEnemigo="Normal"
        ataqueEnemigoImagen="./imagenes/log/normal.png"
        nombreAtaqueEnemigo=ataques_mokepon_enemigo[cualquiera].nombre
    }
    /*
    if (ataqueEnemigoAleatorio==0 || ataqueEnemigoAleatorio==1){
        ataqueEnemigo.push("Fuego")

    }else if(ataqueEnemigoAleatorio==3 || ataqueEnemigoAleatorio==4){
        ataqueEnemigo.push("Agua")

    }else if(ataqueEnemigoAleatorio==2){
        ataqueEnemigo.push("Tierra")
    }
    else { ataqueEnemigo="ERROR"}
    */
    //array[array.length - 1].descripcion

    definicion(ataqueEnemigo)
   //iniciarPelea()
}

/*function iniciarPelea(){
    if(ataqueJugador.length ===4){
        //definicion()
    }
}
function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador= ataqueJugador[jugador]
    indexAtaqueEnemigo= ataqueEnemigo[enemigo]
}*/
function definicion(ataqueEnemigo){
    clearInterval(intervalo)
    /*for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]){
            //indexAmbosOponentes(i,i)
            crearMensaje("Empateeeee",ataqueJugador[i],ataqueEnemigo[i])
        }else if (ataqueJugador[i]==="Fuego" && ataqueEnemigo[i]==="Tierra" || ataqueJugador[i]=="Agua" &&ataqueEnemigo[i]=="Fuego" || ataqueJugador[i]=="Tierra" && ataqueEnemigo[i]=="Agua"){
            //indexAmbosOponentes(i,i)
            crearMensaje("Ganasteeeeeeee",ataqueJugador[i],ataqueEnemigo[i])
            victoriasJugador++
            spamVidasJugador.innerHTML="Vidas: "+victoriasJugador
            //document.getElementById("vidas_enemigo").innerHTML="Vidas: "+ vidasEnemigas
        }else  {
            //indexAmbosOponentes(i,i)
            crearMensaje("Perdisteeeeeee",ataqueJugador[i],ataqueEnemigo[i])
            victoriasEnemigo++
            spamVidasEnemiga.innerHTML="Vidas: "+ victoriasEnemigo 
        }  
    }*/
    
    //for (let i = 0; i < ataqueJugador.length; i++) {

        //Fuego Agua Planta Tierra Roca Lucha Volador Veneno Siniestro Bicho Psiquico Hielo
        if(ataqueJugador==ataqueEnemigo||ataqueJugador=="Fuego"&&ataqueEnemigo=="Lucha"||ataqueJugador=="Fuego"&&ataqueEnemigo=="Volador"||
            ataqueJugador=="Fuego"&&ataqueEnemigo=="Veneno"||ataqueJugador=="Fuego"&&ataqueEnemigo=="Siniestro"||ataqueJugador=="Fuego"&&ataqueEnemigo=="Psiquico"||

            ataqueJugador=="Agua"&&ataqueEnemigo=="Lucha"||ataqueJugador=="Agua"&&ataqueEnemigo=="Volador"||ataqueJugador=="Agua"&&ataqueEnemigo=="Veneno"||
            ataqueJugador=="Agua"&&ataqueEnemigo=="Siniestro"||ataqueJugador=="Agua"&&ataqueEnemigo=="Bicho"||ataqueJugador=="Agua"&&ataqueEnemigo=="Psiquico"||
            ataqueJugador=="Agua"&&ataqueEnemigo=="Hielo"||

            ataqueJugador=="Planta"&&ataqueEnemigo=="Lucha"||ataqueJugador=="Planta"&&ataqueEnemigo=="Siniestro"||ataqueJugador=="Planta"&&ataqueEnemigo=="Psiquico"||

            ataqueJugador=="Tierra"&&ataqueEnemigo=="Electrico"||ataqueJugador=="Tierra"&&ataqueEnemigo=="Lucha"||ataqueJugador=="Tierra"&&ataqueEnemigo=="Volador"||
            ataqueJugador=="Tierra"&&ataqueEnemigo=="Siniestro"||ataqueJugador=="Tierra"&&ataqueEnemigo=="Bicho"||ataqueJugador=="Tierra"&&ataqueEnemigo=="Psiquico"||

            ataqueJugador=="Lucha" && ataqueEnemigo=="Hielo"||ataqueJugador=="Lucha" && ataqueEnemigo=="Fuego"||ataqueJugador=="Lucha" && ataqueEnemigo=="Agua"||
            ataqueJugador=="Lucha" && ataqueEnemigo=="Planta"||ataqueJugador=="Lucha" && ataqueEnemigo=="Tierra"||ataqueJugador=="Lucha" && ataqueEnemigo=="Veneno"||
            ataqueJugador=="Lucha" && ataqueEnemigo=="Bicho"||ataqueJugador=="Lucha" && ataqueEnemigo=="Dragon"||

            ataqueJugador=="Roca" && ataqueEnemigo=="Veneno"||ataqueJugador=="Roca" && ataqueEnemigo=="Siniestro"||ataqueJugador=="Roca" && ataqueEnemigo=="Psiquico"||
            ataqueJugador=="Roca" && ataqueEnemigo=="Dragon"||
            
            ataqueJugador=="Volador"&&ataqueEnemigo=="Tierra"||ataqueJugador=="Volador"&&ataqueEnemigo=="Fuego"||ataqueJugador=="Volador"&&ataqueEnemigo=="Agua"||
            ataqueJugador=="Volador"&&ataqueEnemigo=="Veneno"||ataqueJugador=="Volador"&&ataqueEnemigo=="Siniestro"||

            ataqueJugador=="Veneno"&&ataqueEnemigo=="Fuego"||ataqueJugador=="Veneno"&&ataqueEnemigo=="Agua"||ataqueJugador=="Veneno"&&ataqueEnemigo=="Lucha"||
            ataqueJugador=="Veneno"&&ataqueEnemigo=="Volador"||ataqueJugador=="Veneno"&&ataqueEnemigo=="Siniestro"||ataqueJugador=="Veneno"&&ataqueEnemigo=="Bicho"||
            ataqueJugador=="Veneno"&&ataqueEnemigo=="Planta"|| ataqueJugador=="Veneno" && ataqueEnemigo=="Dragon"||ataqueJugador=="Veneno" && ataqueEnemigo=="Roca"||

            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Fuego"||
            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Agua"||
            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Planta"||
            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Tierra"||
            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Roca"||
            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Volador"||
            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Veneno"||
            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Hielo"||
            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Dragon"||

            ataqueJugador=="Bicho"&&ataqueEnemigo=="Agua"||
            ataqueJugador=="Bicho"&&ataqueEnemigo=="Tierra"||
            ataqueJugador=="Bicho"&&ataqueEnemigo=="Lucha"||
            ataqueJugador=="Bicho"&&ataqueEnemigo=="Veneno"||
            ataqueJugador=="Bicho"&&ataqueEnemigo=="Hielo"||

            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Fuego"||
            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Agua"||
            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Planta"||
            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Tierra"||
            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Roca"||
            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Volador"||
            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Hielo"||
            ataqueJugador=="Psiquico"&& ataqueEnemigo=="Dragon"||

            ataqueJugador=="Hielo"&&ataqueEnemigo=="Agua"||
            ataqueJugador=="Hielo"&&ataqueEnemigo=="Veneno"||
            ataqueJugador=="Hielo"&&ataqueEnemigo=="Siniestro"||
            ataqueJugador=="Hielo"&&ataqueEnemigo=="Bicho"||
            ataqueJugador=="Hielo"&&ataqueEnemigo=="Psiquico"||

            ataqueJugador=="Dragon" && ataqueEnemigo=="Siniestro"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Psiquico"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Veneno"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Lucha"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Roca"
){
            crearMensaje("Empate",ataqueJugador,ataqueEnemigo)
    
        }else if (
            ataqueJugador=="Fuego"&& ataqueEnemigo=="Planta" || 
            ataqueJugador=="Fuego" &&ataqueEnemigo=="Bicho" || 
            ataqueJugador=="Fuego" && ataqueEnemigo=="Hielo"||
            ataqueJugador=="Fuego" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Agua"&&ataqueEnemigo=="Fuego"||
            ataqueJugador=="Agua"&&ataqueEnemigo=="Roca"||
            ataqueJugador=="Agua"&&ataqueEnemigo=="Tierra"||
            ataqueJugador=="Agua" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Planta"&&ataqueEnemigo=="Agua"||
            ataqueJugador=="Planta"&&ataqueEnemigo=="Roca"||
            ataqueJugador=="Planta"&&ataqueEnemigo=="Tierra"||
            ataqueJugador=="Planta" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Tierra"&&ataqueEnemigo=="Fuego"||
            ataqueJugador=="Tierra"&&ataqueEnemigo=="Roca"||
            ataqueJugador=="Tierra"&&ataqueEnemigo=="Veneno"||
            ataqueJugador=="Tierra" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Lucha"&&ataqueEnemigo=="Roca"||
            ataqueJugador=="Lucha"&&ataqueEnemigo=="Siniestro"||
            ataqueJugador=="Lucha" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Roca" && ataqueEnemigo=="Fuego"||
            ataqueJugador=="Roca" && ataqueEnemigo=="Volador"||
            ataqueJugador=="Roca" && ataqueEnemigo=="Hielo"||
            ataqueJugador=="Roca" && ataqueEnemigo=="Bicho"||
            ataqueJugador=="Roca" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Volador"&&ataqueEnemigo=="Bicho"||
            ataqueJugador=="Volador"&&ataqueEnemigo=="Lucha"||
            ataqueJugador=="Volador"&&ataqueEnemigo=="Planta"||
            ataqueJugador=="Volador" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Veneno"&&ataqueEnemigo=="Planta"||
            ataqueJugador=="Veneno" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Siniestro"&&ataqueEnemigo=="Psiquico"||
            ataqueJugador=="Siniestro" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Bicho"&&ataqueEnemigo=="Planta"||
            ataqueJugador=="Bicho"&&ataqueEnemigo=="Psiquico"||
            ataqueJugador=="Bicho"&&ataqueEnemigo=="Siniestro"||
            ataqueJugador=="Bicho" && ataqueEnemigo=="Normal"||

            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Lucha"||
            ataqueJugador=="Psiquico"&&ataqueEnemigo=="Veneno"||
            ataqueJugador=="Psiquico"&& ataqueEnemigo=="Normal"||

            ataqueJugador=="Hielo"&&ataqueEnemigo=="Planta"||
            ataqueJugador=="Hielo"&&ataqueEnemigo=="Tierra"||
            ataqueJugador=="Hielo"&&ataqueEnemigo=="Volador"||
            ataqueJugador=="Hielo" && ataqueEnemigo=="Normal"||
            
            ataqueJugador=="Dragon" && ataqueEnemigo=="Fuego"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Agua"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Tierra"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Planta"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Bicho"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Volador"||
            ataqueJugador=="Dragon" && ataqueEnemigo=="Normal"){
            
            vidasEnemigas--
            spamVidasEnemiga.innerHTML="Vidas: "+ vidasEnemigas
            mensaje=`${mokeponEnemigo2||mokeponEnemigo.nombre} SE DEBILITO`
            crearMensaje(mensaje,ataqueJugador,ataqueEnemigo)
        }else{
            vidasJugador--
            spamVidasJugador.innerHTML="Vidas: "+vidasJugador
            mensaje=`${mascotaJugador} SE DEBILITO`
            crearMensaje(mensaje,ataqueJugador,ataqueEnemigo)
            
        }
    //CuatroAtaques()
    Vidas(mensaje)
}
function crearMensaje(mensaje,ataqueJugador,ataqueEnemigo){  
    let nuevoAtaqueDelJugador= document.createElement("p")
    let nuevoAtaqueDelEnemigo= document.createElement("p")
    nuevoAtaqueDelJugador.setAttribute("class","p_ataques")
    nuevoAtaqueDelEnemigo.setAttribute("class","p_ataques")
    //mensajes.innerHTML = mensaje
    if (mokeponEnemigo!== null)
    {
        mensajes.innerHTML= `${mascotaJugador} ataco con ${nombreAtaque}<br/>${mokeponEnemigo.nombre} ataco con ${nombreAtaqueEnemigo} <br/>${mensaje}`
    }else{
        mensajes.innerHTML= `${mascotaJugador} USÓ ${nombreAtaque} <br/> ${mokeponEnemigo2} ENEMIGO USÓ ${nombreAtaqueEnemigo}<br/><br/>${mensaje}`
    }
    
    nuevoAtaqueDelJugador.innerHTML=`${nombreAtaque}<img class="tipo_img2" src="${ataqueImagen}"> ` 
    nuevoAtaqueDelEnemigo.innerHTML=`${nombreAtaqueEnemigo}<img class="tipo_img2" src="${ataqueEnemigoImagen||ataquesImg2}">`
    todos_los_ataques.push(nuevoAtaqueDelJugador)
    coloresPrendidos(botones)
    
    //nuevoAtaqueDelJugador.innerHTML=indexAtaqueJugador
    //nuevoAtaqueDelEnemgo.innerHTML=indexAtaqueEnemigo
    
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}    
function CuatroAtaques(){
    if(vidasJugador==0 || vidasEnemigas ==0){
        Vidas()
    }
}
function Vidas(mensaje){
    //JUGAR HASTA QUE SE TE ACABEN LOS BOTONES ----------------------------------------------------------------->
        /*if(victoriasJugador ===victoriasEnemigo){
            mensajeFinal("EMPATEEEEEEEEEEEE")
        }else if(victoriasJugador>victoriasEnemigo){
            mensajeFinal("GANASTE LA BATALLAAAAAAAAAAAAAAAAAA PRRO")
        }else if (victoriasJugador < victoriasEnemigo){
            mensajeFinal("PERDISTE LA BATALLA PERDEDORRRRRRRRRRR")
        }*/
        if (mokeponEnemigo!== null)
        {
            if(vidasEnemigas==0){
                coloresApagados(botones)
                mensajeFinal(`${mascotaJugador} ataco con ${nombreAtaque}<br/>${mokeponEnemigo.nombre} ataco con ${nombreAtaqueEnemigo}<br/>${mensaje}<br/> <p class="victoria"> GANASTE LA BATALLAAAAAAAAAAA PRRO</p>`)
                
            }else if (vidasJugador==0){
                coloresApagados(botones)
                mensajeFinal(`${mascotaJugador} ataco con ${nombreAtaque}<br/>${mokeponEnemigo.nombre} ataco con ${nombreAtaqueEnemigo}<br/>${mensaje}<br/><p class="derrota">PERDISTE LA BATALLAAAAAAAAA XD</p>`)
            }
        }else{
            if(vidasEnemigas==0){
                coloresApagados(botones)
                mensajeFinal(`${mascotaJugador} ataco con ${nombreAtaque}<br/>${mokeponEnemigo2} ataco con ${nombreAtaqueEnemigo}<br/>${mensaje} <br/> <p class="victoria"> GANASTE LA BATALLAAAAAAAAAAA PRRO</p>`)
                
            }else if (vidasJugador==0){
                coloresApagados(botones)
                mensajeFinal(`${mascotaJugador} ataco con ${nombreAtaque}<br/>${mokeponEnemigo2} ataco con ${nombreAtaqueEnemigo}<br/>${mensaje} <br/><p class="derrota">PERDISTE LA BATALLAAAAAAAAA XD</p>`)
            }
        }

        // if(vidasEnemigas==0){
        //     coloresApagados(botones)
        //     mensajeFinal("RESULTADO FINAL: <br/>  GANASTE LA BATALLAAAAAAAAAAA PRRO")}
        // else if (vidasJugador==0){
        //     coloresApagados(botones)
        //     mensajeFinal("RESULTADO FINAL:  <br/> PERDISTE LA BATALLAAAAAAAAA XD")
        // }
    //JUGAR HASTA QUE UNO SE MUERA ----------------------------------------------------------------------------->
       /* if(vidasEnemigas==0){
            resultado="GANASTE LA BATALLAAAAAAAAAAAAAAAAAA PRRO"
            mensajeFinal(resultado)
        }else if (vidasJugador==0){
            resultado="PERDISTE LA BATALLA PERDEDORRRRRRRRRRR"
            mensajeFinal(resultado)
        }*/
}
function mensajeFinal(resultado){
    mensajes.innerHTML = resultado

    //let parrafo= document.createElement("p")
    //parrafo.innerHTML= resultado
    //mensajes.appendChild(parrafo)

    let reiniciar=document.getElementById("boton_reiniciar")
    reiniciar.style.display="block"
}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//-------------------------------------------------------------------------------------------------------------------------->
function pintarCanvas(){
    mascotaJugadorObjeto.x=mascotaJugadorObjeto.x+mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y=mascotaJugadorObjeto.y+mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

        mokeponesEnemigos.forEach(function(mokepon){
            if(mokepon != undefined){
                mokepon.pintarMokepon()
                revisarColision(mokepon)
            }
        })
    
}
function pintarCanvas2(){
    mascotaJugadorObjeto.x=mascotaJugadorObjeto.x+mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y=mascotaJugadorObjeto.y+mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    pidgey.pintarMokepon()
    rattata.pintarMokepon()
    caterpie.pintarMokepon()
    mewtwo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX !==0 || mascotaJugadorObjeto.velocidadY !==0){
        revisarColision2(mewtwo)
        revisarColision2(rattata)
        revisarColision2(pidgey)
        revisarColision2(caterpie)
    }
}

function enviarPosicion(x,y) {
    fetch(`http://192.168.1.38:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            x,
            y
        })
    })  
    .then(function(res){
        if(res.ok){
            res.json()
            .then(function ({ enemigos }){
                mokeponesEnemigos = enemigos.map(function(enemigo){
                    // let mokeponEnemigo=null
                    //const mokeponNombre= enemigo.mokepon.nombre || "" //debuelve el nombre del enemigo
                    if(enemigo.mokepon != undefined)
                    {
                        const mokeponNombre = enemigo.mokepon.nombre 
                                
                        switch (mokeponNombre)
                        {
                        case "Squirtle":
                            mokeponEnemigo = new Mokepon("Squirtle","./imagenes/Squirtle_Stand02.jpg",3,"./imagenes/Squirtle_head.png",enemigo.id) 
                                break
                        case "Bulbasaur":
                            mokeponEnemigo = new Mokepon("Bulbasaur","./imagenes/Bulbasaur_Pose01.jpg",3,"./imagenes/Bulbasaur_head.png",enemigo.id)
                            break
                        case "Charmander":
                            mokeponEnemigo = new Mokepon("Charmander","./imagenes/Charmander_Sit01.jpg",3,"./imagenes/Charmander_head.png",enemigo.id)
                            break
                        case "Totodile":
                            mokeponEnemigo = new Mokepon("Totodile","./imagenes/totodile.jpg",3,"./imagenes/Totodile_head.png",enemigo.id) 
                            break
                        case "Chikorita":
                            mokeponEnemigo = new Mokepon("Chikorita","./imagenes/chikorita.jpg",3,"./imagenes/Chikorita_head.png",enemigo.id)
                            break
                        case "Cyndaquil":
                            mokeponEnemigo = new Mokepon("Cyndaquil","./imagenes/cyndaquil.jpg",3,"./imagenes/Cyndaquil_head.png",enemigo.id)
                            break
                        case "Mudkip":
                            mokeponEnemigo = new Mokepon("Mudkip","./imagenes/mudkip.jpg",3,"./imagenes/Mudkip_head.png",enemigo.id) 
                            break
                        case "Treecko":
                            mokeponEnemigo = new Mokepon("Treecko","./imagenes/treecko.jpg",3,"./imagenes/Treecko_head.png",enemigo.id)
                            break
                        case "Torchic": 
                            mokeponEnemigo = new Mokepon("Torchic","./imagenes/torchick.jpg",3,"./imagenes/Torchic_head.png",enemigo.id)     
                        default:
                            break
                        }
                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                    }
                    return mokeponEnemigo
                    // mokeponEnemigo.pintarMokepon()
                })
            })
        }
    })
}
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX=10
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX=-10
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY=10
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY=-10
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX=0
    mascotaJugadorObjeto.velocidadY=0
}
function sePresionoUnaTecla(e){
    switch(e.key){
        case "w" :
            moverArriba()
            break
        case  "ArrowUp":
            moverArriba()
            break
        case "s" :
            moverAbajo()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "a" :
            moverIzquierda()
            break
        case "ArrowLeft":
            moverIzquierda()
            break    
        case"d":
            moverDerecha()
            break
        case"ArrowRight":
            moverDerecha()
            break       
        default:
            break
    }
}

function IniciarMapa(){
    mascotaJugadorObjeto=obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas,50)
    window.addEventListener("keydown",sePresionoUnaTecla)
    window.addEventListener("keyup",detenerMovimiento)
}
function IniciarMapa2(){
    mascotaJugadorObjeto=obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas2,50)
    window.addEventListener("keydown",sePresionoUnaTecla)
    window.addEventListener("keyup",detenerMovimiento)
}
function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador===mokepones[i].nombre){
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo= enemigo.y + enemigo.alto
    const derechaEnemigo=enemigo.x + enemigo.ancho
    const izquierdaEnemigo=enemigo.x
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota=mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota=mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota=mascotaJugadorObjeto.x

    if( abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo||
        izquierdaMascota > derechaEnemigo){
        return
    }

    if(enemigo.x == undefined || enemigo.y == undefined){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("se detecto una colicion");

    enemigoId=enemigo.id
    seleccionarAtaque.style.display="flex"
    sectionVerMapa.style.display="none"
    seleccionarMascotaEnemiga(enemigo)//nombre del enemigo
    //alert("Hay Colision " + enemigo.nombre)
}

function revisarColision2(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if( abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo) {
        return
    }

    if(enemigo.x == undefined || enemigo.y == undefined){
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    seleccionarAtaque.style.display="flex"
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemiga2(enemigo)
}
window.addEventListener('load',iniciarJuego)


