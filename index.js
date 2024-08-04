const express= require("express")
const cors=require("cors")
const app = express()

app.use(express.static("public"))
app.use(cors())
app.use(express.json())

const jugadores =[]

class Jugador{
    constructor(id){
        this.id=id
    }
    asignarMokepon(mokepon){
        this.mokepon=mokepon
    }
    actualizarPosicion(x,y){
        this.x=x
        this.y=y
    }
    asignarAtaques(ataques){
        this.ataques=ataques
    }
    asignarNombre_atakes(nombre_atakes){
        this.nombre_atakes=nombre_atakes
    }
    asignarImagen_atakes(ataquesImg){
        this.ataquesImg=ataquesImg
    }
}

class Mokepon {
    constructor(nombre){
        this.nombre=nombre
    }
}
//una vez abierta el servidor podemos unirnos a ella con un get /"unirse"
//al entrar genera un ID unico de forma aleatoria (random) y se lo manda al frontend
app.get("/unirse",(req,res)=>{
    const id = `${Math.random()}`
    const jugador =new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin","*")
    res.send(id)
})

//Peticion Post por que vamo a recivir datos en JSON
//variable tipo parametro, una variable que vienen en una URL al momento de ralizar una peticion,(ID)
//para eso se expresa con : para recivir dicha variable
//req = peticion 
//res = responder
app.post("/mokepon/:jugadorId",(req,res)=>{
    const jugadorId = req.params.jugadorId || "" //id del mokepon seleccionado
    const nombre=req.body.mokepon || "" //Nombre del mokepon seleccionado
    const mokepon=new Mokepon(nombre) //la variable "mokepon" = el nombre de la clase mokepon 
    const jugadorIndex = jugadores.findIndex((jugador)=>jugadorId ===jugador.id) //jugadorIndex es igual a la comparacion del id que recibe con la alguno de los jugadores
    if (jugadorIndex >=0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon)//le agrega un nombre mokepon a un jugador segun su cual sea id osea jugadorIndex
    }
    console.log(jugadores); //muestra el arreglo con todos los jugadores 
    console.log(jugadorId); //muestra el id que recibio
    res.end() //no hay respuesta
})


app.post("/mokepon/:jugadorId/posicion",(req,res)=>{
    const jugadorId=req.params.jugadorId||""
    const x=req.body.x||0
    const y=req.body.y||0

    const jugadorIndex=jugadores.findIndex((jugador)=>jugadorId===jugador.id) //JugadorIndex es igual si jugadorId y jugador.id es igual

    if(jugadorIndex>=0){
        jugadores[jugadorIndex].actualizarPosicion(x,y)//al jugador segun su id agregamos su posicion y actualizamos segun su movimiento
    }
    const enemigos = jugadores.filter((jugador)=>jugadorId !== jugador.id)//si el id del jugador es diferene al id de todos los demas devuelve un array de todos los enemigos

    res.send({
        enemigos
    })
})

app.post("/mokepon/:jugadorId/ataques",(req,res)=>{
    const jugadorId = req.params.jugadorId || "" //id del mokepon seleccionado
    const ataques=req.body.ataques || "" //FUEGO,PLANTA, AGUA, TIERRA
    const nombre_atakes=req.body.nombre_atakes || ""
    const ataquesImg=req.body.ataquesImg || ""

    const jugadorIndex = jugadores.findIndex((jugador)=>jugadorId ===jugador.id) //jugadorIndex es igual a la comparacion del id que recibe con la alguno de los jugadores
    
    if (jugadorIndex >=0) {
        jugadores[jugadorIndex].asignarAtaques(ataques)//le agrega un ATAQUE mokepon a un jugador segun su cual sea id osea jugadorIndex
        jugadores[jugadorIndex].asignarNombre_atakes(nombre_atakes)
        jugadores[jugadorIndex].asignarImagen_atakes(ataquesImg)
    }

    res.end() //no hay respuesta
})

app.get("/mokepon/:jugadorId/ataques",(req,res)=>{
    const jugadorId = req.params.jugadorId || "" // Solocita la Id del ENEMIGO
    const jugador =jugadores.find((jugador)=>jugador.id===jugadorId) // En la lista de jugadores comparamanos si el id de este jugadors es igual a los de algunos de los jugadores de la lista (array)
    res.send({
        ataques:jugador.ataques, //una vez que concidio el id, vamos a pasar el parametro de "jugador.ataques" a "ataques" (ej. Fuego, Agua, Planta, etc...)
        nombre_atakes:jugador.nombre_atakes,
        ataquesImg:jugador.ataquesImg
    })
    jugador.ataques=null
    ataques=null
})


app.listen(8080,()=>{
    console.log("Servidor funcionando")
})
