// veces que desea jugar
// que opcion elige

const n1 = document.getElementById("player1");


// que le sale al pc

let n2;

function getRandom() {
    return Math.floor(Math.random() * 3);
}

if (getRandom == 0) {
    n2 = "papel"
} else if (getRandom == 1) {
    n2 = "tijeras"
} else {
    n2 = "piedra";

}

console.log(n2);

// comparar resultados
// mostrar ganador
// repetir si es necesario

// let veces = prompt(`
// ¿Cuantas veces desea jugar?
// `);

// let n1 = ["Piedra", "Papel", "Tijera"];
// let n1 = [0, 1, 2];

let userChoice = parseInt(
    prompt(`
        Elija una opción:
        1. Piedra
        2. Papel
        3. Tijera
    `);
);

let machineChoice = Math.floor(Math.random() * (4 - 1)) + 1;

console.log(machineChoice);

switch (n1) {
    case "1":
        console.log("Piedra");
        break;
    case "2":
        console.log("Papel");
        break;
    case "3":
        console.log("Tijera");
        break;
}

function comparar(n1, n2) {
    return parseInt(n1)
}
}