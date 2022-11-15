export function piedraPapelTijera(btn, selector){
    const d = document,
    $boton = d.getElementById(btn),             //Boton 'Iniciar Juego'
    $opciones = d.querySelectorAll(selector),   //Obtener una NodeList de todas las opciones para jugar.
    $jugador1 = d.getElementById("jugador1"),   //Elección del jugador
    $cpu = d.getElementById("cpu"),             //Elección del CPU
    $resultado = d.getElementById("resultado"), //Cuadro del resultado  
    $countJugador1 = d.getElementById("countJugador1"), //Contador de juegos ganados por el Jugador1
    $countCPU = d.getElementById("countCPU");           //Contador de juegos ganados por el CPU
    let countJugador1 = 0
    let countCPU = 0
    let opcion = null   //Selección del jugador (piedra, papel o tijera)

    // Recorrer la NodeList del total de opciones posibles para jugar (piedra, papale o tijera) del Jugador 
    $opciones.forEach(element => {
        element.addEventListener("click", e=>{
            // Diferenciar con otro color la selección del jugador
            // Remover la clase active de todos. Y a la selección del jugador, añadirle la clase active
            const $active = d.querySelectorAll(".active");
            $active.forEach((e)=>{
                e.classList.remove("active");
            })
            e.path[0].classList.add("active");

            // Obtener el id de la selección del jugador
            // Mostrar la selección en pantalla 
            opcion = e.path[0].id;
            if (opcion == "piedra"){
                $jugador1.innerHTML = `<img src="./img/rock-svgrepo-com.svg" alt="" width="70px">`;
            }
            if (opcion == "papel"){
                $jugador1.innerHTML = `<img src="img/paper-svgrepo-com.svg" alt="" width="70px">`;
            }
            if (opcion == "tijera"){
                $jugador1.innerHTML = `<img src="./img/scissors-svgrepo-com.svg" alt="" width="70px">`;
            }
        })
    })

    // Lógica del juego
    $boton.addEventListener("click", e=>{
        // La CPU tiene 3 elecciones que son aleatorias.
        let opcionCPU = Math.floor(Math.random() * 3)
        // 0:piedra; 1:papel; 2:tijera;
        if (opcion == "piedra"){
            if (opcionCPU == 0){
                $cpu.innerHTML=`<img src="./img/rock-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "EMPATE"
            } else if (opcionCPU == 1){
                $cpu.innerHTML=`<img src="img/paper-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "HAS PERDIDO"
                countCPU++;
                $countCPU.textContent = countCPU;
            } else {
                $cpu.innerHTML=`<img src="./img/scissors-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "HAS GANADO"
                countJugador1++;
                $countJugador1.textContent = countJugador1;
            }
        }
        if (opcion == "papel"){
            if (opcionCPU == 0){
                $cpu.innerHTML=`<img src="./img/rock-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "HAS GANADO"
                countJugador1++;
                $countJugador1.textContent = countJugador1;
            } else if (opcionCPU == 1){
                $cpu.innerHTML=`<img src="img/paper-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "EMPATE"
            } else {
                $cpu.innerHTML=`<img src="./img/scissors-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "HAS PERDIDO"
                countCPU++;
                $countCPU.textContent = countCPU;
            }
        }
        if (opcion == "tijera"){
            if (opcionCPU == 0){
                $cpu.innerHTML=`<img src="./img/rock-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "HAS PERDIDO"
                countCPU++;
                $countCPU.textContent = countCPU;
            } else if (opcionCPU == 1){
                $cpu.innerHTML=`<img src="img/paper-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "HAS GANADO"
                countJugador1++;
                $countJugador1.textContent = countJugador1;
            } else {
                $cpu.innerHTML=`<img src="./img/scissors-svgrepo-com.svg" alt="" width="70px">`
                $resultado.innerText = "EMPATE"
            }
        }
    })
}