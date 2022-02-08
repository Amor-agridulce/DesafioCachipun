// Veces que desea jugar
let vecesJuego = parseInt(prompt("¿Cuántas veces quiere jugar?"))

while(vecesJuego > 0){
    console.log(`Te quedan ${vecesJuego} oportunidades`);
    
    // Que opcion elige usuario
    let opcionUsuario = parseInt(prompt(`Elige entre 
    1- piedra ✊
    2- papel ✋
    3- tijeras ✌`))

    // Mostrar selección del usuario
    switch(opcionUsuario){
        case 1: console.log("Elegiste piedra ✊");
        break
        case 2: console.log("Elegiste papel ✋");
        break
        case 3: console.log("Elegiste tijeras ✌");
        break
        default: console.log("No válido...");
        break
    }

    // Que elige la maquina
    let opcionMaquina = Math.floor(Math.random() * (4 - 1)) + 1;

    // Mostrar selección de la maquina
    switch(opcionMaquina){
        case 1: console.log("La maquina eligió piedra ✊");
        break
        case 2: console.log("La maquina eligió papel ✋");
        break
        case 3: console.log("La maquina eligió tijeras ✌");
        break
    }   

    console.log(comparar(opcionMaquina, opcionUsuario));

    vecesJuego--
}

// Comparar los resultados
function comparar (maquina, usuario){
    if(maquina === 1 && usuario === 2){
        return "Ganaste 🙆‍♀️";
    }
    if(maquina === 2 && usuario === 3){
        return "Ganaste 🙆‍♀️";
    }
    if(maquina === 3 && usuario === 1){
        return "Ganaste 🙆‍♀️";
    }
    if(maquina === usuario){
        return "Es un empate! 💁‍♀️";
    }
    return "Perdiste 🤷‍♀️";
}