let ataqueJugador;
let ataqueEnemigo;
let resultado;
let mascotaSeleccionada;

let vidasJugador =0;
let vidasEnemigo =0;

function iniciarJuego() {

    // Clase 26 - Creando sistema de vidas
    vidasJugador = 3; 
    vidasEnemigo = 3;

    let botonMascotaJugador = document.getElementById("boton-mascota");
    //Clase 23 Capturar los botones de ataque

    let btnFuego = document.getElementById("boton-fuego");
    let btnTierra = document.getElementById("boton-tierra");
    let btnAgua = document.getElementById("boton-agua");

    //Clase 26 Capturar btn de capturar

    let btnReiniciar = document.getElementById("boton-reiniciar");

    // Eventos 

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    btnFuego.addEventListener("click",ataqueFuego);
    btnTierra.addEventListener("click",ataqueTierra);
    btnAgua.addEventListener("click",ataqueAgua);

    btnReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador(){
    
        // Capturar mascotas en variables
        let moke1 = document.getElementById("hipodoge");
        let moke2 = document.getElementById("capipepo");
        let moke3 = document.getElementById("ratigueya");
        let moke4 = document.getElementById("langostelvis");
        let moke5 = document.getElementById("tucapalma");
        let moke6 = document.getElementById("pydos");

        // Clase 20: capturar elemento <span></span>
        let showMascotaJugador = document.getElementById("mascota-jugador");
        console.log(showMascotaJugador);

        // Clase 26: capturar elementos span donde se muestran las vidas del jugador y el enemigo

        let showVidasJugador = document.getElementById("vidas-jugador");
        let showVidasEnemigo = document.getElementById("vidas-enemigo");

        // Mostrar la mascota seleccionada
        switch (true) {
            case moke1.checked:
                //alert (`Seleccionaste a tu mascota: ${moke1.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=1;
                showMascotaJugador.innerHTML = moke1.value
                break;

            case moke2.checked:
                //alert (`Seleccionaste a tu mascota: ${moke2.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=2;
                showMascotaJugador.innerHTML = moke2.value
                break;    
            case moke3.checked:
                //alert (`Seleccionaste a tu mascota: ${moke3.value}`)

                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=3;
                showMascotaJugador.innerHTML = moke3.value
                break;  
            case moke4.checked:
                //alert (`Seleccionaste a tu mascota: ${moke4.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=4;
                showMascotaJugador.innerHTML = moke4.value
                break;  
            case moke5.checked:
                //alert (`Seleccionaste a tu mascota: ${moke5.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=5;
                showMascotaJugador.innerHTML = moke5.value
                break; 
            case moke6.checked:
                //alert (`Seleccionaste a tu mascota: ${moke6.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=6;
                showMascotaJugador.innerHTML = moke6.value
                break;                  
            default:
                alert(`No has seleccionado ninguna mascota`)
                break;
        } 
        
        seleccionarMascotaEnemigo();

        // Clase 26: mostrar vidas en span

        showVidasJugador.innerHTML = vidasJugador
        showVidasEnemigo.innerHTML = vidasEnemigo

}

// Clase 22: Crear funcion para obtener un numero aleatorio entre un rango

function aleatorio(max, min) {

    return Math.floor(Math.random() * (max - min+1) + min)
}

function seleccionarMascotaEnemigo(){
    
    // Capturar mascotas en variables

    let moke1 = document.getElementById("hipodoge");
    let moke2 = document.getElementById("capipepo");
    let moke3 = document.getElementById("ratigueya");
    let moke4 = document.getElementById("langostelvis");
    let moke5 = document.getElementById("tucapalma");
    let moke6 = document.getElementById("pydos");

    // Capturar elemento <span></span>

    let showMascotaEnemigo = document.getElementById("mascota-enemigo");

    // Mostrar la mascota seleccionada

    let aleatorioEnemigo = aleatorio(6,1);
    console.log(aleatorioEnemigo);

    switch (aleatorioEnemigo) {
        case 1:
            showMascotaEnemigo.innerHTML = moke1.value
            break;

        case 2:
            showMascotaEnemigo.innerHTML = moke2.value
            break;    
        case 3:
            showMascotaEnemigo.innerHTML = moke3.value
            break;  
        case 4:
            showMascotaEnemigo.innerHTML = moke4.value
            break;  
        case 5:
            showMascotaEnemigo.innerHTML = moke5.value
            break;                
        default:
            showMascotaEnemigo.innerHTML = moke6.value
            break;
    } 

}

// Clase 23: Funciones para los ataques del jugador

function ataqueFuego() {
    // Condicional para desabilitar botones segun el pokemon seleccionado
    // mascotas de fuego = 3, 4, 6
    // mascotas de agua = 1, 4, 5
    // mascotas de tierra = 2, 5, 6

    // Clase 26: Establecer condicional para preguntar si el jugador cuenta con vidas

    if (vidasJugador>0) {

        if (mascotaSeleccionada==3 || mascotaSeleccionada==4|| mascotaSeleccionada==6) {
            ataqueJugador = "Fuego"
            //imprimirAtaque(ataqueJugador);
        
            // Invocar a la elección aleatorio del ataque del enemigo
            ataqueAleatorioEnemigo();
        } else{
            alertaAtaqueEscogido();
        }  

    } else{
        alertaVidas();
    }
}

function ataqueTierra() {
    // Condicional para desabilitar botones segun el pokemon seleccionado
    // mascotas de fuego = 3, 4, 6
    // mascotas de agua = 1, 4, 5
    // mascotas de tierra = 2, 5, 6

    if (vidasJugador>0){
        if (mascotaSeleccionada==2 || mascotaSeleccionada==5|| mascotaSeleccionada==6) {
            ataqueJugador = "Tierra"   
       
            // imprimirAtaque(ataqueJugador);
         
             // Invocar a la elección aleatorio del ataque del enemigo
                 ataqueAleatorioEnemigo();
        } else{
            alertaAtaqueEscogido();
        }
    }else{
        alertaVidas();
    }


}

function ataqueAgua() {

    // Condicional para desabilitar botones segun el pokemon seleccionado
    // mascotas de fuego = 3, 4, 6
    // mascotas de agua = 1, 4, 5
    // mascotas de tierra = 2, 5, 6

    if (vidasJugador>0){
        if (mascotaSeleccionada==1 || mascotaSeleccionada==4|| mascotaSeleccionada==5) {
            ataqueJugador = "Agua"
            //imprimirAtaque(ataqueJugador);
        
            // Invocar a la elección aleatorio del ataque del enemigo
            ataqueAleatorioEnemigo();
        } else{
            alertaAtaqueEscogido();
        }
    }else{
        alertaVidas();
    }


}

/*function imprimirAtaque(ataque) {
    let showAtaqueJugador = document.getElementById("ataque-jugador");
    showAtaqueJugador.innerHTML=ataque;
}*/

// Clase 24: Ataque aleatorio del enemigo

function ataqueAleatorioEnemigo() {
    if (vidasEnemigo>0) {
        let ataqueAleatorio = aleatorio(3,1);
        console.log(ataqueAleatorio);
        let showAtaqueEnemigo = document.getElementById("ataque-enemigo");
    
        switch (ataqueAleatorio) {
            case 1:
                ataqueEnemigo = "Fuego"
                break;
            case 2:
                ataqueEnemigo = "Agua"
                break;
            default:
                ataqueEnemigo = "Tierra"
                break;
        }
        // La impresión se coloca fuera del switch porque el switch solo se utiliza para asignar un valor a la var ataqueEnemigo
        // antes de mostrar mensaje, obtenemos resultado de partida

            obtenerResultado();
            //showAtaqueEnemigo.innerHTML = ataqueEnemigo
            crearMensaje();
        

        
    } else{
        alertaVidasEnemigo()
    }
    

}

// Clase 25: Función para insertar nuevos párrafos

function crearMensaje() {

   // 1° Crear párrafo y almacenarlo en una variable

    let parrafo = document.createElement("div");

    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo}, Resultado: ${resultado}`;

    console.log(parrafo);

    // 2° Ubicar párrafo

    let contendorParrafo = document.getElementById("mensajes");

    contendorParrafo.append(parrafo);

    // Clase 26: volvemos a imprimir las vidas para que se actualice en el DOM

    let showVidasJugador = document.getElementById("vidas-jugador");
    let showVidasEnemigo = document.getElementById("vidas-enemigo");

    showVidasJugador.innerHTML = vidasJugador
    showVidasEnemigo.innerHTML = vidasEnemigo

    // Preguntar si el jugador o enemigo tienen vidas (esto puede ir dentro de la función)

    if(vidasJugador==0){
        crearMensajeFinal("Perdiste!, te quedaste sin vidas.")
        alert("Usted ha PERDIDO la partida")
    } else if(vidasEnemigo==0){
        crearMensajeFinal("Ganaste!, tu competidor se quedó sin vidas.")
        alert("Usted ha GANADO la partida")
    }
}

function crearMensajeFinal(resultadoFinal) {

       // 1° Crear párrafo y almacenarlo en una variable

       let parrafo = document.createElement("div");

       parrafo.innerHTML = resultadoFinal;
      
       // 2° Ubicar párrafo (al final de los párrafos agregados en cada partida)
   
       let contendorParrafo = document.getElementById("mensajes");
   
       contendorParrafo.append(parrafo);
    
}

function obtenerResultado(){

        if (ataqueJugador==ataqueEnemigo) {
            resultado = "Empate"
        } 
        else if(ataqueJugador=="Agua"){

            resultado = "Ganaste"  
            // Porque el agua vence a ambos y si pasó el primer condicional, no son iguales, osea el enemigo es tierra o fuego

            vidasEnemigo -= 1;
        } 
        else if(ataqueJugador == "Tierra" && ataqueEnemigo=="Fuego"){

            resultado = "Ganaste" // Porque tierra vence a fuego
            vidasEnemigo -= 1;
        }
        else{
            resultado= "Perdiste"  // en todos los escenarios restantes, pierdes
            vidasJugador -= 1;
        }        
    

}

// Crear fución de alerta que imposibiliza ataque por el mokepon elegido

function alertaAtaqueEscogido() {

    alert("Lo siento!😩 El mokepon escogido no cuenta con ese ataque")
    
}

function alertaVidas() {
    
    alert("Te quedaste sin vidas 😩")

}

function  alertaVidasEnemigo(params) {

    alert("El enemigo se quedó sin vidas 😩")

}

function reiniciarJuego() {
    // Clase 26 - 1° Reiniciamos las vidas
        vidasJugador = 3; 
        vidasEnemigo = 3;
    
    // 2° Reimprimimos
        //Capturar elementos span donde se muestran las vidas del jugador y el enemigo

        let showVidasJugador = document.getElementById("vidas-jugador");
        let showVidasEnemigo = document.getElementById("vidas-enemigo");

        // Vaciar el número que se indica en vidas, porque al reiniciar el juego ese span debe estar vacío, como
        // cuando recien carga el juego
        showVidasJugador.innerHTML = ""
        showVidasEnemigo.innerHTML = ""
    
    // 3° Borrar los párrafos creados por cada juego


    let contendorParrafo = document.getElementById("mensajes");

    contendorParrafo.innerHTML = ""
    
}

// Inicio del juego

window.addEventListener("load", iniciarJuego);


