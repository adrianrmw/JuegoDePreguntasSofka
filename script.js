class Jugador {
    constructor(nombre, pass, puntos) {
        this.nombre = nombre;
        this.pass = pass;
        this.puntos = puntos;
    }
}

class Pregunta {
    constructor(dificultad, letra, respuesta, incorrecta1, incorrecta2, incorrecta3){
        this.dificultad = dificultad;
        this.letra = letra;
        this.respuesta = respuesta;
        this.incorrecta1 = incorrecta1;
        this.incorrecta2 = incorrecta2;
        this.incorrecta3 = incorrecta3;
    }
}


//Jugadores de ejemplo
const pruebaUsuario = new Jugador("testUser", "1234", 500);
const pruebaUsuario2 = new Jugador("testUser2", "1234", 400);
const pruebaUsuario3 = new Jugador("testUser3", "1234", 300);

let jugadores = [ pruebaUsuario, pruebaUsuario2, pruebaUsuario3 ];

let label_error = document.getElementById("label-info")


//Preguntas de ejemplo
const preguntaMuyFacil_1 = new Pregunta("1", "¿Cuantos minutos tiene una hora?","60","100","30","45");
const preguntaMuyFacil_2 = new Pregunta("1", "¿Cuanto es 24 + 186?","210","204","216","214");
const preguntaMuyFacil_3 = new Pregunta("1", "¿Cual es la capital de Francia?","Paris","Marsella","Toulouse","Lyon");
const preguntaMuyFacil_4 = new Pregunta("1", "¿Cómo se llama el proceso por el que las plantas extraen energía de la luz solar?","Fotosintesis","Fusion","Regeneracion","Digestion");
const preguntaMuyFacil_5 = new Pregunta("1", "¿Como se escribe el numero 19 en numeracion romana?","XIX","XXI","XVIII","IXX");

const preguntasMuyFaciles = [ preguntaMuyFacil_1, preguntaMuyFacil_2, preguntaMuyFacil_3, preguntaMuyFacil_4, preguntaMuyFacil_5];

const preguntaFacil_1 = new Pregunta("2", "¿Cuál es el segundo país más poblado del mundo?","India","China","USA","Rusia");
const preguntaFacil_2 = new Pregunta("2", "¿En qué año fue descubierta América?","1492","1429","1592","1529");
const preguntaFacil_3 = new Pregunta("2", "¿Que seleccion gano el Mundial de Futbol de Sudafrica 2010?","España","Alemania","Holanda","Uruguay");
const preguntaFacil_4 = new Pregunta("2", "¿Qué juego está formado por peones, alfiles, reyes y reinas?","Ajedrez","Rayuela","Damas","Clash Royale");
const preguntaFacil_5 = new Pregunta("2", "¿Cuantos habitantes tiene Uruguay?","3.4 millones","2 millones","5 millones","7.5 millones");

const preguntasFaciles = [ preguntaFacil_1, preguntaFacil_2, preguntaFacil_3, preguntaFacil_4, preguntaFacil_5];

const preguntaIntermedio_1 = new Pregunta("3", "¿En qué año llegó el hombre a la luna?","1969","1987","1962","1979");
const preguntaIntermedio_2 = new Pregunta("3", "¿Quién escribió El Quijote?","Miguel de Cervantes","Oscar Wilde","Gabriel Garcia Marquez","Juana de Ibarbourou");
const preguntaIntermedio_3 = new Pregunta("3", "¿Cuál es la capital de Alemania?","Berlin","Hamburgo","Múnich","Colonia");
const preguntaIntermedio_4 = new Pregunta("3", "¿Que equipo gano la temporada 2020/21 de la NBA?","Milwaukee Bucks","Miami Heat","Boston Celtics","LA Lakers");
const preguntaIntermedio_5 = new Pregunta("3", "¿Quienes acompañan a Harry Potter en sus peliculas?","Ron Weasley y Hermione Granger","Peter Pettigrew","Newt Scamander","James Potter");

const preguntasIntermedio = [ preguntaIntermedio_1, preguntaIntermedio_2, preguntaIntermedio_3, preguntaIntermedio_4, preguntaIntermedio_5];

const preguntaDificil_1 = new Pregunta("4", "¿En qué año se creó la Organización de las Naciones Unidas?","1945","1946","1956","1952");
const preguntaDificil_2 = new Pregunta("4", "¿A qué arte se dedicó principalmente Francisco Goya?","Pintura","Escultura","Danza","Musica");
const preguntaDificil_3 = new Pregunta("4", "¿Dónde podemos encontrar la Casa Rosada?","Argentina","USA","España","Chile");
const preguntaDificil_4 = new Pregunta("4", "¿Cómo se llama la protagonista de la saga de videojuegos The Legend of Zelda?","Link","Zelda","Finch","Mike");
const preguntaDificil_5 = new Pregunta("4", "¿Cómo se llama el pintor noruego autor de la obra El Grito?","Munch","Picasso","Monet","Da Vinci");

const preguntasDificiles = [ preguntaDificil_1, preguntaDificil_2, preguntaDificil_3, preguntaDificil_4, preguntaDificil_5];

const preguntaExtrema_1 = new Pregunta("5", "¿A que casa pertenece Arya, personaje de Game of Thrones?","Stark","Tyrell","Targaryen","Snow");
const preguntaExtrema_2 = new Pregunta("5", "¿Cuál es el nombre técnico del miedo o fobia a las alturas?","Acrofobia","Vertigo","Chronofobia","Antropofobia ");
const preguntaExtrema_3 = new Pregunta("5", "¿Quién fue la primera mujer en ganar una medalla olímpica?","Charlotte Cooper","Simone Biles","Clarisse Agbegnenou","Yulimar Rojas");
const preguntaExtrema_4 = new Pregunta("5", "¿Cuál fue el primer país en aprobar el sufragio femenino?","Nueva Zelanda","USA","Argentina","Uruguay");
const preguntaExtrema_5 = new Pregunta("5", "¿De qué país se independizó Eslovenia?","Yugoslavia","Inglaterra","URSS","Francia");

const preguntasExtremas = [ preguntaExtrema_1, preguntaExtrema_2, preguntaExtrema_3, preguntaExtrema_4, preguntaExtrema_5 ];





//funciones para Jugadores
function login(){
    let user = "";
    let pass = "";

    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

    if(user === "" || pass === "") {
        label_error.innerHTML = "Datos vacios"
        return;
    }
    else {
        for (let jugadorRegistado of jugadores)
        {   
            if(user === jugadorRegistado.nombre && pass === jugadorRegistado.pass) {
                label_error.innerHTML = ""
                location.href = "juego.html";
            }
        }
        label_error.innerHTML = "Datos incorrectos"
        return;
    }
}

function registrarUsuario() {
    let user = "";
    let pass = "";

    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

    if(user === "" || pass === "") {
        return;
    }
    else {
        const nuevoJugador = new Jugador(user, pass, 0);
        // const index = jugadores.indexOf(nuevoJugador);
        // if( index === -1){
        //     label_error.innerHTML = "Usuario ya registrado";
            
        //     console.log(jugadores.indexOf(nuevoJugador.nombre) + nuevoJugador.nombre)
        // }
        // else {
            label_error.innerHTML = "Registro con exito";

            let nuevoJugadorJSON = JSON.stringify(nuevoJugador);
            localStorage.setItem(nuevoJugador.nombre, nuevoJugadorJSON);
        
            //Agrego el nuevo usuario a la collecion
            jugadores[jugadores.length] = nuevoJugador;
        //}
    }  
}








//funciones para Juego

let unaPregunta;
let posiblesRespuestas;
let puntos = 0;
escogerPreguntaRandom();
desordenarOpciones(unaPregunta);

let botonesActivos = false;

let btnCorrespondientes = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
];


function escogerPreguntaRandom() {
   escogerPregunta(Math.floor(Math.random()*5));
}

function escogerPregunta(n) {    

    if(puntos === 0) {
        unaPregunta = preguntasMuyFaciles[n];
    }
    else if(puntos === 100) {
        unaPregunta = preguntasFaciles[n];
    }
    else if(puntos === 200) {
        unaPregunta = preguntasIntermedio[n];
    }
    else if(puntos === 300) {
        unaPregunta = preguntasDificiles[n];
    }
    else if(puntos === 400) {
        unaPregunta = preguntasExtremas[n];
    }
    else {
        alert(`Felicidades usted gano el juego! Puntuacion: ${puntos} `);
        reiniciarJuego();
    }

    select_id("categoria").innerHTML = `Nivel: ${unaPregunta.dificultad}`;
    select_id("pregunta").innerHTML = unaPregunta.letra;

    select_id("btn1").innerHTML = unaPregunta.respuesta;
    select_id("btn2").innerHTML = unaPregunta.incorrecta1;
    select_id("btn3").innerHTML = unaPregunta.incorrecta2;
    select_id("btn4").innerHTML = unaPregunta.incorrecta3;

}


function select_id(id) {
    return document.getElementById(id);
}


function desordenarOpciones(unaPregunta) {
    posiblesRespuestas = [
        unaPregunta.respuesta,
        unaPregunta.incorrecta1,
        unaPregunta.incorrecta2,
        unaPregunta.incorrecta3
    ];

    posiblesRespuestas.sort(()=> Math.random()-0.5);

    select_id("btn1").innerHTML = posiblesRespuestas[0];
    select_id("btn2").innerHTML = posiblesRespuestas[1];
    select_id("btn3").innerHTML = posiblesRespuestas[2];
    select_id("btn4").innerHTML = posiblesRespuestas[3];
}



function verificarRespuesta(i) {
    if(botonesActivos){
        return;
    }

    botonesActivos = true;
    if(posiblesRespuestas[i] == unaPregunta.respuesta) {
        btnCorrespondientes[i].style.background = "green";
        puntos += 100;

        setTimeout(()=> {
            siguientePregunta();
            botonesActivos = false;
        },2000);
    }
    else {
        btnCorrespondientes[i].style.background = "red";

        setTimeout(()=> {
            reiniciarJuego();
            botonesActivos = false;
        },2000);
    }

    for (let i = 0; i < posiblesRespuestas.length; i++) {
        if (posiblesRespuestas[i] == unaPregunta.respuesta) {
            btnCorrespondientes[i].style.background = "green";
        }
    }    
}

function reiniciarJuego(){
    for (let btn of btnCorrespondientes) {
        btn.style.background = "#eee";        
        puntos = 0;
    }
    select_id("puntaje").innerHTML = puntos;
    escogerPreguntaRandom();
    desordenarOpciones(unaPregunta);
}

function siguientePregunta(){
    for (let btn of btnCorrespondientes) {
        btn.style.background = "#eee";    
    }
    select_id("puntaje").innerHTML = puntos;
    escogerPreguntaRandom();
    desordenarOpciones(unaPregunta);
}




//funciones para el ranking
cargarRanking();

function cargarRanking(){
    const tabla = document.querySelector(".tablaPosiciones");

    let docFragment = document.createDocumentFragment();

    for (let i = 0; i < jugadores.length; i++) {

        let divNombre = document.createElement('div');
        let divPuntos = document.createElement('div');

        let nombre = jugadores[i].nombre;
        let puntos = jugadores[i].puntos;
        divNombre.innerHTML = nombre;
        divPuntos.innerHTML = puntos;

        docFragment.appendChild(divNombre);
        docFragment.appendChild(divPuntos);
    }
    
    tabla.appendChild(docFragment);
}

