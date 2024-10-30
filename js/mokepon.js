
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota");
    console.log(botonMascotaJugador);
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

}

function seleccionarMascotaJugador(){
    
        // Capturar mascotas en variables

        let moke1 = document.getElementById("hipodoge");
        console.log(moke1)
    
        let moke2 = document.getElementById("capipepo");
        console.log(moke2)
    
        let moke3 = document.getElementById("ratigueya");
        console.log(moke3)
    
        let moke4 = document.getElementById("langostelvis");
        console.log(moke4)
    
        let moke5 = document.getElementById("tucapalma");
        console.log(moke5)
    
        let moke6 = document.getElementById("pydos");
        console.log(moke6)

        // Clase 20: capturar elemento <span></span>

        let showMascotaJugador = document.getElementById("mascota-jugador");
        console.log(showMascotaJugador);

        // Mostrar la mascota seleccionada

        switch (true) {
            case moke1.checked:
                //alert (`Seleccionaste a tu mascota: ${moke1.value}`)

                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                showMascotaJugador.innerHTML = moke1.value
                break;

            case moke2.checked:
                //alert (`Seleccionaste a tu mascota: ${moke2.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                showMascotaJugador.innerHTML = moke2.value
                break;    
            case moke3.checked:
                //alert (`Seleccionaste a tu mascota: ${moke3.value}`)

                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                showMascotaJugador.innerHTML = moke3.value
                break;  
            case moke4.checked:
                //alert (`Seleccionaste a tu mascota: ${moke4.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                showMascotaJugador.innerHTML = moke4.value
                break;  
            case moke5.checked:
                //alert (`Seleccionaste a tu mascota: ${moke5.value}`)

                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                showMascotaJugador.innerHTML = moke5.value
                break; 
            case moke6.checked:
                //alert (`Seleccionaste a tu mascota: ${moke6.value}`)

                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                showMascotaJugador.innerHTML = moke6.value
                break;                  
            default:
                alert(`No has seleccionado ninguna mascota`)
                break;
        } 

        seleccionarMascotaEnemigo();
}



// Clase 21: Crear funcion para obtener un numero aleatorio entre un rango

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


// Inicio del juego

window.addEventListener("load", iniciarJuego);

