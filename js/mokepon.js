let ataqueJugador;
let ataqueEnemigo;
let resultado;
let mascotaSeleccionada;

let vidasJugador =3;
let vidasEnemigo =3;

let mokepones = [];

let mokeponSeleccionadoJugador = []

let mokeponSeleccionadoOponente = []


function iniciarJuego() {

    // Clase 26 - Creando sistema de vidas
    /*vidasJugador = 3; 
    vidasEnemigo = 3;
    */

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

    // Secciones a desaparecer al iniciar el juego:

        // Sección del botón "Reiniciar"  
           hideANDShowHtmlElement("reiniciar")

        // Sección de "Elegir ataque"

           hideANDShowHtmlElement("seleccionar-ataque")

        // Seccion de Mensajes

        hideANDShowHtmlElement("mostrar-mensajes")



    // Clase 33: 

    elementFormMascotas = document.querySelector(".mascota-formulario");

    elementFormMascotas.addEventListener("submit",function(event){
        event.preventDefault();
    })

    // Dibujar cards desde JS

        //Agregar objetos mokepones al array

        /*
        mokepones.push(
            {
                nombre: "Hipodoge",
                imagen: "./images/001.png",
                id: "0001",
                ataques: ["Agua"]
            }
        )
        */

        agregarMokepon(
            "Hipodoge",
            "./images/001.png",
            "0001",
            ["Agua", "Fuego", "Tierra"],
            ["block", "none", "none"],
            mokepones
        )

        agregarMokepon(
            "Capipepo",
            "./images/002.png",
            "0002",
            ["Agua", "Fuego", "Tierra"],
            ["none", "none", "block"],
            mokepones
        )

        agregarMokepon(
            "Ratigueya",
            "./images/003.png",
            "0003",
            ["Agua", "Fuego", "Tierra"],
            ["none", "block", "none"],
            mokepones
        )

        agregarMokepon(
            "Langostelvis",
            "./images/004.png",
            "0004",
            ["Agua", "Fuego", "Tierra"],
            ["block", "block", "none"],
            mokepones
        )

        agregarMokepon(
            "Tucapalma",
            "./images/005.png",
            "0005",
            ["Agua", "Fuego", "Tierra"],
            ["block", "none", "block"],
            mokepones
        )

        agregarMokepon(
            "Pydos",
            "./images/006.png",
            "0001",
            ["Agua", "Fuego", "Tierra"],
            ["none", "block", "block"],
            mokepones
        )


        let cardsContainer = document.querySelector(".cards-container");

        mokepones.forEach( (mokepon) =>{

            cardsContainer.innerHTML += 
            `
                <div class="card-mokepon">
                        <div>
                            <div >
                                <img src=${mokepon.imagen} alt="">
                            </div>
                        </div>
                        <div>
                            <p class="text-mokepon-number">#${mokepon.id}</p>
                            <p class="text-mokepon-name">${mokepon.nombre}</p>
                            <div>
                                <p style="display: ${mokepon.mostrar[0]};" class="water-attack-badge">${mokepon.ataques[0]}</p>
                                <p style="display: ${mokepon.mostrar[1]};" class="fire-attack-badge">${mokepon.ataques[1]}</p>
                                <p style="display: ${mokepon.mostrar[2]};" class="tierra-attack-badge">${mokepon.ataques[2]}</p>
                            </div>
                        </div>

                </div>
                
            `
        }
        )


// Clase 38: Capturar las tarjetas en un array

    let cardsArray = document.getElementsByClassName("card-mokepon");

    console.log(cardsArray);

    for (let i = 0; i < cardsArray.length; i++) {

        cardsArray[i].style.boxShadow = 'rgb(126, 153, 163)1px 2px 5px 0px'
        cardsArray[i].style.outline = 'rgb(255, 255, 255) solid 0px'

        cardsArray[i].addEventListener("click", ()=>{

            console.log("antes del evento click")

            identificarCard(i);

        } )

    }


}

function dibujarCardsSegundaPantalla(id1, id2) {
      // Dibujar cards de la segunda pantalla desde JS

      let cardsPlayingContainer = document.querySelector(".cards-juego-container");

      cardsPlayingContainer.innerHTML +=
      `
      <div class="card-mokepon-juego">
                      <div>
                          <h3>${id1}</h3>
                      </div>
   
                      <div>
                          <div>
                              <div>
                                  <img src=${mokeponSeleccionadoJugador[0].imagen} alt="">
                              </div>
                          </div>
                      </div>
                      <div>
                          <p class="text-mokepon-subtitles">Mascota Seleccionada:</p>
                          <p id="mascota-jugador" class="text-mokepon-name-clear">${mokeponSeleccionadoJugador[0].nombre}</p>
                          <div>
                              <p class="text-mokepon-subtitles">Vidas:</p>
                              <p id="vidas-jugador" class="text-mokepon-hearts"> </p>
                          </div>
                          <div>
                              <p style="display: ${mokeponSeleccionadoJugador[0].mostrar[0]};" class="water-attack-badge">${mokeponSeleccionadoJugador[0].ataques[0]}</p>
                              <p style="display: ${mokeponSeleccionadoJugador[0].mostrar[1]};" class="fire-attack-badge">${mokeponSeleccionadoJugador[0].ataques[1]}</p>
                              <p style="display: ${mokeponSeleccionadoJugador[0].mostrar[2]};" class="tierra-attack-badge">${mokeponSeleccionadoJugador[0].ataques[2]}</p>                            
                          </div>
                      </div>
    </div>   
  
                  <div class="card-mokepon-juego">
                      <div>
                          <h3>${id2}</h3>
                      </div>
   
                      <div>
                          <div>
                              <div>
                                  <img src=${mokeponSeleccionadoOponente[0].imagen} alt="">
                              </div>
                          </div>
                      </div>
                      <div>
                          <p class="text-mokepon-subtitles">Mascota Seleccionada:</p>
                          <p id="mascota-enemigo" class="text-mokepon-name-clear">${mokeponSeleccionadoOponente[0].nombre}</p>
                          <div>
                              <p class="text-mokepon-subtitles">Vidas:</p>
                              <p id="vidas-enemigo" class="text-mokepon-hearts"> </p>
                          </div>
                          <div>
                              <p style="display: ${mokeponSeleccionadoOponente[0].mostrar[0]};" class="water-attack-badge">${mokeponSeleccionadoOponente[0].ataques[0]}</p>
                              <p style="display: ${mokeponSeleccionadoOponente[0].mostrar[1]};" class="fire-attack-badge">${mokeponSeleccionadoOponente[0].ataques[1]}</p>
                              <p style="display: ${mokeponSeleccionadoOponente[0].mostrar[2]};" class="tierra-attack-badge">${mokeponSeleccionadoOponente[0].ataques[2]}</p>                            
                          </div>
                      </div>
                  </div>   
      
      `
}

function agregarMokepon(name, image, ID, types,display, array) {

    array.push(
        {
            nombre: name,
            imagen: image,
            id: ID,
            ataques: types,
            mostrar: display
        }
    )

}

function identificarCard(indice) {

    console.log(`La card seleccionada es la de la posición ${indice}`)
    
    let cardsArray = document.getElementsByClassName("card-mokepon");

    if(cardsArray[indice].style.boxShadow =='rgb(126, 153, 163) 1px 2px 5px 0px')
        {
            console.log("El flujo entró al IF")

        for (let i = 0; i < cardsArray.length; i++) {

            cardsArray[i].style.outline = 'rgb(255, 255, 255) solid 0px'
            cardsArray[i].style.boxShadow = 'rgb(126, 153, 163) 1px 2px 5px 0px'    
        }
        
        cardsArray[indice].style.outline = 'rgb(227, 53, 13) solid 3px'
        cardsArray[indice].style.boxShadow = 'rgb(227, 53, 13) 1px 2px 15px 0px'

    } else if(cardsArray[indice].style.boxShadow == 'rgb(227, 53, 13) 1px 2px 15px 0px'){

        console.log("El flujo entró al ELSE IF")

        cardsArray[indice].style.outline = 'rgb(255, 255, 255) solid 0px'
        cardsArray[indice].style.boxShadow = 'rgb(126, 153, 163) 1px 2px 5px 0px'
    }

}

function contadorVidasJugador(vidas) {

        // Capturar elemento span donde se muestra la vida del jugador en el juego

        let showVidasJugador = document.getElementById("vidas-jugador");

        switch (vidas) {
            case 3:

            showVidasJugador.innerHTML = `<i class="bi bi-suit-heart-fill icon-heart"></i>
                                            <i class="bi bi-suit-heart-fill icon-heart"></i>
                                            <i class="bi bi-suit-heart-fill icon-heart"></i>`
                break;
            case 2:

            showVidasJugador.innerHTML = `<i class="bi bi-suit-heart-fill icon-heart"></i>
                                            <i class="bi bi-suit-heart-fill icon-heart"></i>` 
                
                break;
            case 1:
            
            showVidasJugador.innerHTML = `<i class="bi bi-suit-heart-fill icon-heart"></i>`
                break;            
            case 0:
            showVidasJugador.innerHTML = ' ' 

                break;            
        }
   
}

function contadorVidasOponente(vidas) {

        // Capturar elemento span donde se muestra la vida del enemigo en el juego

    let showVidasEnemigo = document.getElementById("vidas-enemigo");

    switch (vidas) {
        case 3:

        showVidasEnemigo.innerHTML = `<i class="bi bi-suit-heart-fill icon-heart"></i>
                                        <i class="bi bi-suit-heart-fill icon-heart"></i>
                                        <i class="bi bi-suit-heart-fill icon-heart"></i>`
            break;
        case 2:

        showVidasEnemigo.innerHTML = `<i class="bi bi-suit-heart-fill icon-heart"></i>
                                        <i class="bi bi-suit-heart-fill icon-heart"></i>` 
            
            break;
        case 1:
        
        showVidasEnemigo.innerHTML = `<i class="bi bi-suit-heart-fill icon-heart"></i>`
            break;            
        case 0:
            showVidasEnemigo.innerHTML = ' ' 
            break;            
    }

}


function seleccionarMascotaJugador(){

    // Clase 20: capturar elemento <span></span>
        let showMascotaJugador = document.getElementById("mascota-jugador");
        console.log(showMascotaJugador);

    let cardsArray = document.getElementsByClassName("card-mokepon");

    let seleccion = false;

    for (let i = 0; i < cardsArray.length; i++) {

        switch (true) {
            case cardsArray[i].style.boxShadow == 'rgb(227, 53, 13) 1px 2px 15px 0px':
            
                if(i==0){
                    mascotaSeleccionada=1
                    //showMascotaJugador.innerHTML = "Hipodoge"

                    //Guardar información de mokepon seleccionado por jugador

                    mokeponSeleccionadoJugador.push(mokepones[0]);

                    console.log(mokeponSeleccionadoJugador);

                } else if(i==1){
                    mascotaSeleccionada=2
                    //showMascotaJugador.innerHTML = "Capipepo"

                    //Guardar información de mokepon seleccionado por jugador

                    mokeponSeleccionadoJugador.push(mokepones[1]);
                    
                }else if(i==2){
                    mascotaSeleccionada=3
                    //showMascotaJugador.innerHTML = "Ratigueya"

                    //Guardar información de mokepon seleccionado por jugador

                    mokeponSeleccionadoJugador.push(mokepones[2]);

                }else if(i==3){
                    mascotaSeleccionada=4
                    //showMascotaJugador.innerHTML = "Langostelvis"

                    //Guardar información de mokepon seleccionado por jugador

                    mokeponSeleccionadoJugador.push(mokepones[3]);

                }else if(i==4){
                    mascotaSeleccionada=5
                   // showMascotaJugador.innerHTML = "Tucapalma"

                    //Guardar información de mokepon seleccionado por jugador

                    mokeponSeleccionadoJugador.push(mokepones[4]);

                }else if(i==5){
                    mascotaSeleccionada=6
                    //showMascotaJugador.innerHTML = "Pydos"

                    //Guardar información de mokepon seleccionado por jugador

                    mokeponSeleccionadoJugador.push(mokepones[5]);
                }

                seleccion = true;

                seleccionarMascotaEnemigo();
                dibujarCardsSegundaPantalla("Jugador", "Enemigo")

                hideANDShowHtmlElement("seleccionar-ataque");
                hideANDShowHtmlElement("seleccionar-mascota")
            break;
        }
    }

    if(seleccion==false){

        /*alert(`No has seleccionado ninguna mascota`)*/

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success d-flex align-items-center column-gap-2 px-4 py-2 text-uppercase",
              popup:"shadow-lg",
            },
            buttonsStyling: false
          });

        swalWithBootstrapButtons.fire({
            title: ` <h1 style="display:flex; justify-content: center; font-family: Roboto, serif; color: #d91300; font-weight: 700"> Advertencia </h1> `,
            text: "No has seleccionado ninguna mascota",
            imageUrl: "./images/empyPokeball1.png",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Empty Pokeball",
            confirmButtonColor: "#7e99a3",
            confirmButtonText:`
            ¡Entendido! <i class="fa-solid fa-thumbs-up"></i>
            `,
            width: "400px",
           
        });
    }

    


    

    /*
        // Capturar mascotas en variables
        let moke1 = document.getElementById("hipodoge");
        let moke2 = document.getElementById("capipepo");
        let moke3 = document.getElementById("ratigueya");
        let moke4 = document.getElementById("langostelvis");
        let moke5 = document.getElementById("tucapalma");
        let moke6 = document.getElementById("pydos");
        */

        /*
        // Clase 26: capturar elementos span donde se muestran las vidas del jugador y el enemigo

        let showVidasJugador = document.getElementById("vidas-jugador");
        let showVidasEnemigo = document.getElementById("vidas-enemigo");
        */

        /*
        // Mostrar la mascota seleccionada
        switch (true) {
            case moke1.checked:
                //alert (`Seleccionaste a tu mascota: ${moke1.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=1;
                showMascotaJugador.innerHTML = moke1.value

                // Aparecer la sección para "Elegir ataque"

                 hideANDShowHtmlElement("seleccionar-ataque");

                 // Desaparecer la sección de "Elegir mascota"

                 hideANDShowHtmlElement("seleccionar-mascota")
                break;

            case moke2.checked:
                //alert (`Seleccionaste a tu mascota: ${moke2.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=2;
                showMascotaJugador.innerHTML = moke2.value

                // Aparecer la sección para "Elegir ataque"

                hideANDShowHtmlElement("seleccionar-ataque");      
                
                 // Desaparecer la sección de "Elegir mascota"

                 hideANDShowHtmlElement("seleccionar-mascota")                
                
                break;    
            case moke3.checked:
                //alert (`Seleccionaste a tu mascota: ${moke3.value}`)

                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=3;
                showMascotaJugador.innerHTML = moke3.value

                // Aparecer la sección para "Elegir ataque"

                hideANDShowHtmlElement("seleccionar-ataque");                

                 // Desaparecer la sección de "Elegir mascota"

                 hideANDShowHtmlElement("seleccionar-mascota")                
                break;  
            case moke4.checked:
                //alert (`Seleccionaste a tu mascota: ${moke4.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=4;
                showMascotaJugador.innerHTML = moke4.value

                // Aparecer la sección para "Elegir ataque"

                hideANDShowHtmlElement("seleccionar-ataque");

                 // Desaparecer la sección de "Elegir mascota"

                 hideANDShowHtmlElement("seleccionar-mascota")

                break;  
            case moke5.checked:
                //alert (`Seleccionaste a tu mascota: ${moke5.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=5;
                showMascotaJugador.innerHTML = moke5.value

                // Aparecer la sección para "Elegir ataque"

                hideANDShowHtmlElement("seleccionar-ataque");

                 // Desaparecer la sección de "Elegir mascota"

                 hideANDShowHtmlElement("seleccionar-mascota")

                break; 
            case moke6.checked:
                //alert (`Seleccionaste a tu mascota: ${moke6.value}`)
                // Clase 20: mostrar mascota seleccionada en el elemento SPAN
                mascotaSeleccionada=6;
                showMascotaJugador.innerHTML = moke6.value
                // Aparecer la sección para "Elegir ataque"

                hideANDShowHtmlElement("seleccionar-ataque");

                 // Desaparecer la sección de "Elegir mascota"

                 hideANDShowHtmlElement("seleccionar-mascota")

                break;                  
            default:
                alert(`No has seleccionado ninguna mascota`)
                break;
        } 
        */



        // Clase 26: mostrar vidas en span

        contadorVidasJugador(vidasJugador)
        contadorVidasOponente(vidasEnemigo)

       /* showVidasJugador.innerHTML = vidasJugador
        showVidasEnemigo.innerHTML = vidasEnemigo*/
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
            //showMascotaEnemigo.innerHTML = "Hipodoge"

            mokeponSeleccionadoOponente.push(mokepones[0]);
            break;

        case 2:
            //showMascotaEnemigo.innerHTML = "Capipepo"
            mokeponSeleccionadoOponente.push(mokepones[1]);

            break;    
        case 3:
            //showMascotaEnemigo.innerHTML = "Ratigueya"
            mokeponSeleccionadoOponente.push(mokepones[2]);

            break;  
        case 4:
            //showMascotaEnemigo.innerHTML = "Langostelvis"
            mokeponSeleccionadoOponente.push(mokepones[3]);

            break;  
        case 5:
            //showMascotaEnemigo.innerHTML = "Tucapalma"
            mokeponSeleccionadoOponente.push(mokepones[4]);

            break;                
        default:
            //showMascotaEnemigo.innerHTML = "Pydos"
            mokeponSeleccionadoOponente.push(mokepones[5]);

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

            contadorVidasJugador(vidasJugador)
            contadorVidasOponente(vidasEnemigo)
            
            //Mostrar seccion de mensajes //

            hideANDShowHtmlElement("mostrar-mensajes");

            crearMensaje();
    } else{
        alertaVidasEnemigo()
    }
}

// Clase 25: Función para insertar nuevos párrafos

function crearMensaje() {

   // 1° Crear párrafo y almacenarlo en una variable

   let contendorParrafo = document.getElementById("mensajes");

   if (contendorParrafo.children.length == 1) {

        let parrafo1 = document.createElement("p");
        let parrafo2 = document.createElement("p");
        let parrafo3 = document.createElement("p");

        parrafo1.innerHTML = 
        `Atacaste con ${ataqueJugador}`

        parrafo2.innerHTML = 
        `El oponente atacó con ${ataqueEnemigo}`

        parrafo3.innerHTML = 
        `¡${resultado}!`
        

        parrafo1.setAttribute("class", "text-batalla-jugador")
        parrafo2.setAttribute("class", "text-batalla-enemigo")
        parrafo3.setAttribute("class", "text-batalla-veredicto")


        // 2° Ubicar párrafo

        contendorParrafo.append(parrafo1,parrafo2,parrafo3);
    
   } else if (contendorParrafo.children.length > 1){
    
        let parrafoNuevo1 = document.createElement("p");
        let parrafoNuevo2 = document.createElement("p");
        let parrafoNuevo3 = document.createElement("p");

        parrafoNuevo1.innerHTML = 
        `Atacaste con ${ataqueJugador}`

        parrafoNuevo2.innerHTML = 
        `El oponente atacó con ${ataqueEnemigo}`

        parrafoNuevo3.innerHTML = 
        `¡${resultado}!`

        parrafoNuevo1.setAttribute("class", "text-batalla-jugador")
        parrafoNuevo2.setAttribute("class", "text-batalla-enemigo")
        parrafoNuevo3.setAttribute("class", "text-batalla-veredicto")

        contendorParrafo.children[1].replaceWith(parrafoNuevo1)
        contendorParrafo.children[2].replaceWith(parrafoNuevo2)
        contendorParrafo.children[3].replaceWith(parrafoNuevo3)

   }

    // Clase 26: volvemos a imprimir las vidas para que se actualice en el DOM

    /*
    let showVidasJugador = document.getElementById("vidas-jugador");
    let showVidasEnemigo = document.getElementById("vidas-enemigo");

    showVidasJugador.innerHTML = vidasJugador
    showVidasEnemigo.innerHTML = vidasEnemigo
    */

    // Preguntar si el jugador o enemigo tienen vidas (esto puede ir dentro de la función)

    if(vidasJugador==0){
        crearMensajeFinal("Perdiste la batalla, te quedaste sin vidas.")
        alert("Usted ha PERDIDO la partida")
        bloquearBotonAtaque()

        // Aparecer Sección del botón "Reiniciar"  

        hideANDShowHtmlElement("reiniciar")
        

    } else if(vidasEnemigo==0){
        crearMensajeFinal("Ganaste la batalla, tu competidor se quedó sin vidas.")
        alert("Usted ha GANADO la partida")
        bloquearBotonAtaque()

        // Aparecer Sección del botón "Reiniciar"  
        
        hideANDShowHtmlElement("reiniciar")
    }
}

function crearMensajeFinal(resultadoFinal) {

       // 1° Crear párrafo y almacenarlo en una variable

       let parrafoFinal = document.createElement("p");

       parrafoFinal.innerHTML = resultadoFinal;

       parrafoFinal.setAttribute("class", "text-batalla-final")

      
       // 2° Ubicar párrafo (al final de los párrafos agregados en cada partida)
   
       let contendorParrafo = document.getElementById("mensajes");
   
       contendorParrafo.append(parrafoFinal);


    
}

function bloquearBotonAtaque() {
        // Clase 30: Bloquear Botones de ataque

            // 1° Capturar botones en array

            let btnsAtaque = document.getElementsByClassName("btn-ataque");

            console.log(btnsAtaque);

            
            // 2° Recorrer array de botones y añadirles la propiedad diasabled

            for (let i = 0; i < btnsAtaque.length; i++) {

                btnsAtaque[i].setAttribute("disabled","");
                
            }
}

function obtenerResultado(){

        if (ataqueJugador==ataqueEnemigo) {
            resultado = "Empate, es un combate reñido"
        } 
        else if(ataqueJugador=="Agua"){

            resultado = "Ganaste, el enemigo pierde una vida"  
            // Porque el agua vence a ambos y si pasó el primer condicional, no son iguales, osea el enemigo es tierra o fuego

            vidasEnemigo -= 1;
        } 
        else if(ataqueJugador == "Tierra" && ataqueEnemigo=="Fuego"){

            resultado = "Ganaste, el enemigo pierde una vida" // Porque tierra vence a fuego
            vidasEnemigo -= 1;
        }
        else{
            resultado= "Perdiste, pierdes una vida"  // en todos los escenarios restantes, pierdes
            vidasJugador -= 1;
        }        
    

}

// Crear fución de alerta que imposibiliza ataque por el mokepon elegido

function alertaAtaqueEscogido() {

    /*alert("Lo siento!😩 El mokepon escogido no cuenta con ese ataque")*/

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success d-flex align-items-center column-gap-2 px-4 py-2 text-uppercase",
          popup:"shadow-lg",
        },
        buttonsStyling: false
      });

    swalWithBootstrapButtons.fire({
        title: ` <h1 style="display:flex; justify-content: center; font-family: Roboto, serif; color: #d91300; font-weight: 700"> Advertencia </h1> `,
        text: "¡Lo siento!😩 El mokepon escogido no cuenta con ese ataque",
        icon: "error",
        confirmButtonColor: "#7e99a3",
        confirmButtonText:`
        ¡Entendido! <i class="fa-solid fa-thumbs-up"></i>
        `,
        width: "400px",
       
    });
    
}

function alertaVidas() {
    
    alert("Te quedaste sin vidas 😩")

}

function  alertaVidasEnemigo(params) {

    alert("El enemigo se quedó sin vidas 😩")

}

function reiniciarJuego() {
    /*
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
    */
   //Clase 30: utilizando función JS reload( )

   window.location.reload();
    
}

function hideANDShowHtmlElement(idElement) {

    // Clase 31: Capturar elemento html a través de su ID

        // Capturar elemento

            let htmlElementToModify = document.getElementById(idElement);

            console.log(htmlElementToModify);

        // Aplicar propiedad para desaparecer elemento o hacerlo aparecer en caso este desaparecido

            if(htmlElementToModify.style.display == ""){

                htmlElementToModify.style.display = "none"

            } else if (htmlElementToModify.style.display == "none")
            {
                htmlElementToModify.style.display = "flex"
            }
    
}



// Inicio del juego

window.addEventListener("load", iniciarJuego);


