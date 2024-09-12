
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

        // Mostrar la mascota seleccionada

        switch (true) {
            case moke1.checked:
                alert (`Seleccionaste a tu mascota: ${moke1.value}`)
                break;
            case moke2.checked:
                alert (`Seleccionaste a tu mascota: ${moke2.value}`)
                break;    
            case moke3.checked:
                alert (`Seleccionaste a tu mascota: ${moke3.value}`)
                break;  
            case moke4.checked:
                alert (`Seleccionaste a tu mascota: ${moke4.value}`)
                break;  
            case moke5.checked:
                alert (`Seleccionaste a tu mascota: ${moke5.value}`)
                break; 
            case moke6.checked:
                alert (`Seleccionaste a tu mascota: ${moke6.value}`)
                break;                  
            default:
                alert(`No has seleccionado ninguna mascota`)
                break;
        }
}

window.addEventListener("load", iniciarJuego);

